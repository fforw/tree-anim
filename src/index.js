import Tree from "./Tree";
import debounce from "debounce";
import raf from "raf";

import config from "./config.js"

let canvas, ctx, tree, start, width, height;

import SimplexNoise from "./noise"
import { TAU } from "./math";

const noise = new SimplexNoise();

// noinspection ES6UnusedImports
import STYLE from "./style.css"

function render()
{

    const numTips = tree.tips.length;

    const { points, tips } = tree;


    const time = Date.now() - start;

    ctx.clearRect(0,0, width, height);

    ctx.fillStyle = "#90482a";
    ctx.beginPath();

    const windX = Math.cos(time * 0.0003) * 100;
    const windY = Math.cos(time * 0.0007) * 50;

    ctx.moveTo(points[0], points[1]);

    for (let i = 3; i < points.length; i+=3)
    {

        const x = points[i];
        const y = points[i + 1];
        const depth = points[i + 2];

        const factor = noise.noise2D(x  * 0.001 + time * 0.0005, y * 0.001) * ( depth * 0.12);

        ctx.lineTo( ( x + windX * factor) , ( y + windY * factor));
    }

    ctx.fill();
    ctx.fillStyle = "rgba(10,160,60,0.5)";

    for (let i = 0; i < tips.length; i++)
    {
        const tip = tips[i];

        ctx.beginPath();
        ctx.moveTo(tip.x, tip.y);

        const factor = noise.noise2D(tip.x  * 0.001 + time * 0.0005, tip.y * 0.001) * 0.8;

        ctx.arc( ( tip.x + windX * factor) , ( tip.y + windY * factor), 75, 0, TAU, false);
        ctx.fill();
    }

    raf(render)
}

const resizeCanvasToScreen = debounce( () =>
{
    width = (window.innerWidth - 1)|0;
    height = (window.innerHeight - 1)|0;

    canvas.width = width;
    canvas.height = height;
}, 150, true);

window.onload = () => {

    canvas = document.getElementById("screen");
    ctx = canvas.getContext("2d");


    console.log(tree);

    resizeCanvasToScreen();

    config.start[0] = width/2;
    config.start[1] = height * 0.75;

    tree = new Tree(config);

    window.addEventListener("resize", resizeCanvasToScreen, true);

    start = Date.now();
    raf(render)
};

