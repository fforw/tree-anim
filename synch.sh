#!/bin/bash
yarn run build
rsync -rvIz --rsh=ssh --delete --exclude=.git --exclude=*.blend ./dist/ newweb:/var/www/static/demo/tree-anim
