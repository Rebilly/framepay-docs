/**
 * Plugin to update/replace the env variables in the output static fields based on the env configuration
 * @type {module:fs}
 */
const path = require('path');
const replaceInFiles = require('replace-in-files');

const REPLACES = {
    // replace hardcoded urls
    'https://framepay.rebilly.com/rebilly.css': process.env.FRAMEPAY_DOCS_FRAMEPAY_CSS_REMOTE_URL,
    'https://framepay.rebilly.com/rebilly.js': process.env.FRAMEPAY_DOCS_FRAMEPAY_JS_REMOTE_URL,

};
if (process.env.FRAMEPAY_DOCS_BASE_PATH !== '/framepay-docs/') {
    REPLACES['/framepay-docs/'] = process.env.FRAMEPAY_DOCS_BASE_PATH;
}

module.exports = {
    generated() {
        // production build replace
        const options = Object.keys(REPLACES)
            .map(key => ({
                files: path.join(__dirname, '../../dist/**'),
                from: key,
                to: REPLACES[key],
            }));

        options.reduce(
            (promise, config) => promise.then(() => {
                return replaceInFiles(config);
            }),
            Promise.resolve(),
        ).then(() => {
            console.log('Environment update ready');
        });
    },
};
