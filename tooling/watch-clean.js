const fs = require("fs");
const path = require("path");

function endsWith(s,suffix)
{
    const pos = s.indexOf(suffix);
    return pos === s.length - suffix.length;
}

/**
 * @module WebpackOnBuildPlugin
 */

function onBuildDone(stats)
{
    const buildDir = this.buildDir;
    const opts = this.opts;
    const suffixes = opts.suffixes;

    const newlyCreatedAssets = stats.compilation.assets;

    const unlinked = [];
    fs.readdir(path.resolve(buildDir), (err, files) => {

        if (err)
        {
            throw err;
        }

        files.forEach(file => {

            var i;

            for (i = 0; i < suffixes.length; i++)
            {
                const suffix = suffixes[i];
                if (endsWith(file,suffix) && !newlyCreatedAssets[file])
                {
                    fs.unlinkSync(path.resolve(buildDir + file));
                    unlinked.push(file);
                    break;
                }
            }
        });

        if (opts.debug && unlinked.length > 0)
        {
            console.log('Removed old assets: ', unlinked);
        }
    })
}

const DEFAULT_OPTS = {
    /** file name endings to clean.*/
    suffixes: [ ".js", ".js.map" ],

    /** if true, print report on deletion */
    debug: false
};

function WatchCleanPlugin(opts)
{
    this.opts = Object.assign({}, DEFAULT_OPTS, opts);
    this.onBuildDone = onBuildDone.bind(this);
}

WatchCleanPlugin.prototype.apply = function (compiler) {
    this.buildDir = compiler.options.output.path;

    compiler.plugin('done', this.onBuildDone);
};

module.exports = WatchCleanPlugin;
