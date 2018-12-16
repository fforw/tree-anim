import { TAU } from "./math";


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
    radiuses: [ WIDTH, WIDTH /r, WIDTH / r2, WIDTH / r3, WIDTH/ r4, WIDTH/r5]
}
