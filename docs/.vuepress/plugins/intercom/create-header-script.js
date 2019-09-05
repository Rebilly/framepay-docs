/**
 *
 * Returns inline script body for the Intercom widget
 *
 */

const fs = require('fs');
const path = require('path');

module.exports = function createIntercomScript() {
    const FRAMEPAY_DOCS_INTERCOM_ID = process.env.FRAMEPAY_DOCS_INTERCOM_ID;
    if (!!FRAMEPAY_DOCS_INTERCOM_ID) {
        return `var INTERCOM_ID = "${FRAMEPAY_DOCS_INTERCOM_ID}";
        ${fs.readFileSync(path.join(__dirname, './inline-script.js'), 'utf8')}`;
    }
    return '';
};
