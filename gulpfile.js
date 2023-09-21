/**
* Import uswds-compile
*/
const uswds = require("@uswds/compile");

/**
* USWDS version
* Set the major version of USWDS you're using
* (Current options are the numbers 2 or 3)
*/
uswds.settings.version = 3;

/**
* Path settings
* Set as many as you need
*/
uswds.paths.src.projectSass = './uswds_assets/sass'
uswds.paths.dist.theme = './uswds_assets/sass';
uswds.paths.dist.img = './uswds_assets/images';
uswds.paths.dist.fonts = './uswds_assets/fonts';
uswds.paths.dist.js = './uswds_assets/js';
uswds.paths.dist.css = './uswds_assets/css';



/**
* Exports
* Add as many as you need
*/
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;