
import { TAU } from "./math";

const RIGHT_ANGLE = TAU / 4;

function collectPoints(tree, x, y, angle, depth)
{

    const { angle : angleDelta, segments, radiuses } = tree.config;

    const upX = Math.cos( angle) * segments[depth];
    const upY = Math.sin( angle) * segments[depth];

    const x1 = x + Math.cos( angle - RIGHT_ANGLE) * radiuses[depth];
    const y1 = y + Math.sin( angle - RIGHT_ANGLE) * radiuses[depth];
    const x2 = x + upX + Math.cos( angle - RIGHT_ANGLE) * radiuses[depth + 1];
    const y2 = y + upY + Math.sin( angle - RIGHT_ANGLE) * radiuses[depth + 1];

    const nextDepth = depth + 1;
    tree.points.push(
        x1,y1, depth,
        x2,y2, nextDepth
    );

    if (nextDepth < segments.length - 1)
    {

        const angleLeft = angle - angleDelta * (0.5 + Math.random() * 0.5);
        const angleRight = angle + angleDelta * (0.5 + Math.random() * 0.5);

        collectPoints(tree, x + upX, y + upY, angleLeft, nextDepth);
        collectPoints(tree, x + upX, y + upY, angleRight, nextDepth);
    }


    if (nextDepth === segments.length - 2)
    {
        tree.tips.push(
            {
                x:x + upX,
                y:y + upY
            }
        )
    }

    const x4 = x + Math.cos( angle + RIGHT_ANGLE) * radiuses[depth];
    const y4 = y + Math.sin( angle + RIGHT_ANGLE) * radiuses[depth];
    const x3 = x + upX + Math.cos( angle + RIGHT_ANGLE) * radiuses[depth + 1];
    const y3 = y + upY + Math.sin( angle + RIGHT_ANGLE) * radiuses[depth + 1];

    tree.points.push(
        x3,y3, nextDepth,
        x4,y4, depth
    );

}

export default class Tree
{
    constructor(config)
    {
        this.config = config;


        const { segments, radiuses } = config;

        if (segments.length !== radiuses.length)
        {
            throw new Error("segments and radiuses must have the same number of elements");
        }

        segments.push(segments[segments.length - 1]);
        radiuses.push(1);

        this.points = [];
        this.tips = [];

        const [ x, y, angle] = config.start;

        collectPoints(this, x, y, angle, 0);

    }

}
