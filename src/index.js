import Tree from "./Tree";
import debounce from "debounce";
import raf from "raf";

import config from "./config"
import SimplexNoise from "./noise"
import { TAU } from "./math";
// noinspection ES6UnusedImports
import STYLE from "./style.css"

import { AUTUMN, SPRING, SUMMER, WINTER } from "./seasons";
import { LEAF, LOCKED, SNOW } from "./particle-modes";
import loadGrassPalette from "./loadGrassPalette";


let canvas, ctx, tree, start, width, height, leaf, bgContext, grassPalette;

let background, decayStart, seasonCount = 0, frost = 0;

let season = config.initialSeason;
let leafWindFactor = config.leafWindFactor[season];
let windStrength = config.windStrength[season];

const noise = new SimplexNoise();

const LEAF_SIZE = 4;
const LEAF_SCALE = 0.5;

const leafs = new Float32Array(config.numLeafs.reduce((a,b) => Math.max(a,b), 0) * LEAF_SIZE);


function initLeafs()
{
    const { numLeafs, initialSeason } = config;

    const autommLeavesCount = numLeafs[AUTUMN] * LEAF_SIZE;

    for (let i = 0; i < leafs.length; i += LEAF_SIZE)
    {
        leafs[i] = Math.random() * width;

        const space = initialSeason < AUTUMN ? 1 : i <  autommLeavesCount ? 0.5 : 1;

        leafs[i + 1] = Math.random() * -height - space * height ;
        leafs[i + 2] = Math.random();
        leafs[i + 3] = initialSeason < AUTUMN ? LOCKED : initialSeason === AUTUMN && i < autommLeavesCount ? LEAF : SNOW;
    }
}


function updateSeason()
{
    document.body.className = "season-" + season;
}


function drawLeafOrSnow(context, x, y, z, i, isLeaf, didHitGround)
{

    const rnd0 = noise.noise2D(x * 0.0001 + i, y * 0.001);
    const rnd1 = noise.noise2D(y * 0.0001, x * 0.001);

    // const dx = noise.noise2D( y, x);
    // const dy = noise.noise2D( x, y);
    //
    // x += dx;
    // y += dy;

    x += rnd1;
    y -= rnd1;

    const angle = rnd0 * TAU;

    context.save();
    context.translate(x + 32, y + (didHitGround ? -decayStart + 20 : 20));

    if (isLeaf || !didHitGround)
    {
        context.rotate(angle);

    }
    context.scale(0.25 + 0.5 * z * LEAF_SCALE, 0.25 + 0.5 * z * LEAF_SCALE);

    if (isLeaf)
    {
        context.drawImage(leaf, 0, 0);
    }
    else
    {
        if (didHitGround)
        {
            context.fillRect(0, 0, 96, 18);
        }
        else
        {
            context.fillRect(0, 0, 24, 24);
        }
    }
    context.restore();
}


function decayBackground()
{

    const x = Math.random() * (width - config.decaySize);
    const y = Math.random() * (height - decayStart - config.decaySize);
    const imageData = bgContext.getImageData(x, y,  config.decaySize, config.decaySize);

    const dataWidth = imageData.data.length;

    let changed = false;
    for (let i = 0; i < dataWidth; i += 4)
    {
        let r = imageData.data[i];
        let g = imageData.data[i + 1];
        const b = imageData.data[i + 2];
        const a = imageData.data[i + 3];

        if (a === 255)
        {
            if (g > 66)
            {
                if (r < g)
                {
                    r += 6;
                }
                else
                {
                    if (r > 140 || g < 120)
                    {
                        r -= 1;
                    }
                    g -= 1;
                }
                imageData.data[i] = r;
                imageData.data[i + 1] = g;
                changed = true;
            }
        }
        else
        {
            if (season < AUTUMN && r + b > g)
            {
                imageData.data[i + 3] -= 8;
                changed = true;
            }
        }
    }

    if (changed)
    {
        bgContext.putImageData(imageData, x, y);
    }
}


function lookupGrassStyle(n, n2)
{
    const { width, height, colors} = grassPalette;

    const x = ((width - 1) * n)|0;
    const y = ((height - 1) * n2)|0;

    //console.log("lookupGrassStyle", n, n2, x, y);

    return grassPalette.colors[width * y + x];
}

function drawGrass()
{
    const {grassLength, horizon} = config;

    for (let i = 0; i < config.grassCount; i++)
    {

        const x = (Math.random() * width) | 0;
        const z = Math.random();

        const horizonY = ((height * horizon) | 0) - decayStart;

        const y = (horizonY + (background.height - horizonY) * z) | 0;

        const angleNoise = noise.noise2D(x * 0.01, (y + i )* 0.01);

        const seasonMultiplier = season === SPRING ? Math.min(1, seasonCount * 3 / config.seasonLength) : 1;
        const lengthNoise = (0.5 + noise.noise2D(x * 0.004, y  * 0.04) * 0.7) * seasonMultiplier;
        const c2 = noise.noise2D(x * 0.0005, y  * 0.004);
        const c1 = Math.random();

        const angle = TAU / 4 + angleNoise * TAU / 16 - TAU / 32;

        bgContext.strokeStyle = lookupGrassStyle(c1, c2);
        bgContext.lineWidth = 1 + z * 3;

        bgContext.beginPath();
        bgContext.moveTo(x, y);
        bgContext.lineTo(x + Math.cos(angle) * grassLength * lengthNoise, y + Math.sin(angle) * grassLength * lengthNoise);
        bgContext.stroke();
    }
    bgContext.opacity = 1;
}


function render()
{
    const { gravity, horizon, fullOpacity, fullCrownSize, minCrownSize, minOpacity, seasonLength} = config;

    seasonCount++;
    if (seasonCount > seasonLength)
    {
        seasonCount = 0;
        season = (season + 1) & 3;

        updateSeason();
    }

    const {points, tips} = tree;

    const time = Date.now() - start;

    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = "#90482a";
    ctx.beginPath();

    const windX = Math.cos(time * 0.0003) * 100;
    const windY = Math.cos(time * 0.0007) * 50;

    ctx.moveTo(points[0], points[1]);

    for (let i = 3; i < points.length; i += 3)
    {

        const x = points[i];
        const y = points[i + 1];
        const depth = points[i + 2];

        const factor = noise.noise2D(x * 0.001 + time * 0.0005, y * 0.001) * (depth * 0.05);

        ctx.lineTo((x + windX * factor), (y + windY * factor));
    }

    ctx.fill();

    if (season !== WINTER)
    {
        let crownSize, crownOpacity;

        if (season === SUMMER)
        {
            crownSize = config.fullCrownSize;
            crownOpacity = config.fullOpacity;
        }

        if (season === AUTUMN)
        {
            const seasonRatio = Math.max((seasonCount / seasonLength) * 2 - 1, 0);
            crownSize = fullCrownSize - (fullCrownSize - minCrownSize) * seasonRatio;
            crownOpacity = fullOpacity - (fullOpacity - minOpacity) * seasonRatio;
        }

        if (season === SPRING)
        {
            const seasonRatio = 1 - Math.min((seasonCount / seasonLength) * 2, 1);
            crownSize = fullCrownSize - (fullCrownSize - minCrownSize) * seasonRatio;
            crownOpacity = fullOpacity - (fullOpacity - minOpacity) * seasonRatio;
        }

        ctx.fillStyle = "rgba(10,160,60," + crownOpacity + ")";
        for (let i = 0; i < tips.length; i++)
        {
            const tip = tips[i];

            ctx.beginPath();
            ctx.moveTo(tip.x, tip.y);

            const factor = noise.noise2D(tip.x * 0.001 + time * 0.0005, tip.y * 0.001) * windStrength;

            ctx.arc((tip.x + windX * factor), (tip.y + windY * factor), crownSize, 0, TAU, false);
            ctx.fill();
        }
    }

    bgContext.fillStyle = ctx.fillStyle = "rgba(255,255,255,0.9)";

    if (season !== SUMMER)
    {
        const particlesPerSeason = config.numLeafs[season] * LEAF_SIZE;
        for (let i = 0; i < particlesPerSeason; i += LEAF_SIZE)
        {
            let x = leafs[i] + windX * leafWindFactor;
            let y = leafs[i + 1] + windY * leafWindFactor;
            let z = leafs[i + 2];
            let code = leafs[i + 3];

            if (code === LOCKED)
            {
                if (season === AUTUMN)
                {
                    code = leafs[i + 3] = LEAF;
                }
                else
                {
                    continue;
                }
            }

            const isLeaf = code === LEAF;

            y += gravity;

            if (x < -64)
            {
                x += width + 128;
            }


            if (x > width + 64)
            {
                x -= width + 128;
            }
            if (y > height + 64)
            {
                y -= height + 192;
            }

            leafs[i] = x;
            leafs[i + 1] = y;

            if (y > -64)
            {
                const horizonY = height * horizon;
                const didHitGround = y > horizonY + (height - horizonY) * z;

                const context = didHitGround ? bgContext : ctx;
                drawLeafOrSnow(context, x, y, z, i, isLeaf, didHitGround);

                if (didHitGround)
                {
                    leafs[i] = Math.random() * width;

                    if (season === WINTER)
                    {
                        // give a little extra space when switching to snow
                        leafs[i + 1] = isLeaf  ? Math.random() * -height - height : -32;
                        leafs[i + 3] = SNOW;

                        if (!isLeaf && frost < config.frostLimit)
                        {
                            frost++;
                        }
                    }
                    else if (season === AUTUMN)
                    {
                        leafs[i + 1] = -32;
                        leafs[i + 3] = LEAF;
                    }
                    else
                    {
                        leafs[i + 1] = Math.random() * -height - height;
                        leafs[i + 3] = LOCKED;
                    }
                }
            }
        }
    }

    // ctx.beginPath();
    // ctx.moveTo(0,config.horizon * height);
    // ctx.lineTo(width,config.horizon * height);
    // ctx.stroke();

    if (season === AUTUMN)
    {
        for (let i = 0; i < config.decayRate; i++)
        {
            decayBackground();
        }
        frost = 0;
    }

    if (season === WINTER && frost >= config.frostLimit)
    {
        bgContext.fillStyle = "rgba(255,255,255,0.006)";
        bgContext.fillRect(0,32,width,background.height - 32);
    }

    if (season === SPRING)
    {
        if (frost <= 0)
        {
            bgContext.strokeWidth = 2;
            drawGrass();
        }
        else
        {
            frost -= 0.3;
        }
    }


    windStrength += (config.windStrength[season] - windStrength) * 0.05;
    leafWindFactor += (config.leafWindFactor[season] - leafWindFactor) * 0.05;

    raf(render)
}


const resizeCanvasToScreen = debounce(() => {
    width = (window.innerWidth - 1) | 0;
    height = (window.innerHeight - 1) | 0;

    initLeafs();

    canvas.width = width;
    canvas.height = height;

    // reset our decay line to the current horizon plus safety
    decayStart = (height * config.horizon - 32) | 0;

    console.log("size: ", width, "x", height, "decayStart", decayStart);

    background.width = width;
    background.height = height - decayStart;

    background.style.top = decayStart + "px";

    bgContext.fillStyle = "rgba(53, 104, 45, 0.9)";
    bgContext.fillRect(0, 40, width, background.height);

    config.start[0] = width / 2;
    config.start[1] = height * 0.75;

    tree = new Tree(config);

    seasonCount = 0;
    season = config.initialSeason;

    if (season !== SPRING)
    {
        for (let i = 0; i < config.seasonLength; i++)
        {
            drawGrass();
        }
    }
    else
    {
        bgContext.fillStyle = "rgba(255,255,255,0.95)";
        bgContext.fillRect(0,32,width,background.height - 32);

        frost = config.frostLimit;
    }


}, 150, true);

window.onload = () => {
    updateSeason();

    canvas = document.getElementById("screen");
    leaf = document.getElementById("leaf");
    grassPalette = loadGrassPalette(document.getElementById("grass"));

    console.log({grassPalette})

    ctx = canvas.getContext("2d");

    background = document.createElement("canvas");
    background.id = "bg";

    bgContext = background.getContext("2d");

    resizeCanvasToScreen();


    document.body.appendChild(background);

    window.addEventListener("resize", resizeCanvasToScreen, true);

    start = Date.now();
    raf(render)
};

