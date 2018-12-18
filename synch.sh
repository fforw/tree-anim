#!/bin/bash
yarn run build
rsync -rvIz --rsh=ssh --delete --exclude=.git --exclude=*.blend ./docs/ newweb:/var/www/static/demo/tree-leafs
