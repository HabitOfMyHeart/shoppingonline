// CLI: npm install crypto --save
// (crypto is built-in in Node.js; no install is actually required)

const crypto = require('crypto');

const CryptoUtil = {
  md5(input) {
    const hash = crypto.createHash('md5').update(input).digest('hex');
    return hash;
  }
};

module.exports = CryptoUtil;
