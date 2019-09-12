// get env keys
const FRAMEPAY_DOCS_ENV_KEYS_LIST = Object.keys(process.env)
    .filter(
        key => key.indexOf('FRAMEPAY_DOCS') === 0,
    );

module.exports = FRAMEPAY_DOCS_ENV_KEYS_LIST;
