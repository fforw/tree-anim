import { TAU } from "./math";
import { SPRING, SUMMER, AUTUMN, WINTER, getCurrentSeason } from "./seasons";

const r = (1+Math.sqrt(5))/2;
const r2 = r*r;
const r3 = r*r*r;
const r4 = r*r*r*r;
const r5 = r*r*r*r*r;

const LEN = 200;
const WIDTH = 40;

export  default {

    // trees are drawn inside [0,0 ... 1000,1000], this renders it a bit higher for design reasons
    viewBox: "0 15 1000 1000",

    start: [500,1000, -TAU / 4],

    angle: TAU * 0.125,

    segments: [ LEN, LEN /r, LEN / r2, LEN / r3, LEN/ r4, LEN/r5],
    radiuses: [ WIDTH, WIDTH /r, WIDTH / r2, WIDTH / r3, WIDTH/ r4, WIDTH/r5],

    gravity: 4,
    
    numLeafs: [500,100, 100, 500],
    leafWindFactor: [0.01,0.01,0.05,0.02],

    windStrength: [ 0.2, 0.1, 0.5, 0.01],
    horizon: 0.61,

    frostLimit: 80,
    
    // setting this higher might slow the simulation down
    decayRate: 8,

    decaySize: 38,
    
    seasonLength: 60 * 45,

    fullCrownSize: 75,
    fullOpacity: 0.4,
    minCrownSize: 8,
    minOpacity: 0.3,

    initialSeason: getCurrentSeason(),

    grassCount: 100,
    grassLength: 50,

    grassColors: [
        "#60bc51",
        "#5db64e",
        "#5ab04c",
        "#57ab49",
        "#54a547",
        "#51a045",
        "#4e9a42",
        "#4b9440",
        "#498f3d",
        "#46893b",
        "#438439",
        "#407e36",
        "#3d7834",
        "#3a7331",
        "#376d2f",
        "#35682d",
        "#35682d",
        "#3f6e2f",
        "#497532",
        "#547c35",
        "#5e8338",
        "#688a3b",
        "#72913e",
        "#7d9841",
        "#879e44",
        "#92a547",
        "#9cac4a",
        "#a6b34d",
        "#b1ba50",
        "#bbc153",
        "#c5c856",
        "#cfcf59"
    ]
}
