# Tree Anim

Canvas Tree animation.

[Demo](https://fforw.github.io/tree-anim/)

## Setup

The current version uses two canvases, one for the tree and the particles and a background canvas starting round the horizon that isn't cleared and into which stuff is drawn over time. Grass, Leaves, Snow splotches. It is drawn over white in winter etc pp.

Also the rgb gun based "withering" is done in that background buffer. red first goes to up the green value and then both go down over time.

## 2D random

Some randomness is just Math.random(), but a lot of randomness combines 2D noise at different scales to produce its artifacts -- to
have controlled, "local" random values with a good feature size and slow transitioning between values. 

## Next steps

I think I will keep this as it is now and do more elaborate setups for a next version in a fork. Stay tuned.
