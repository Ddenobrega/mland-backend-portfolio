const rateLimit = require("express-rate-limit")

    const quoteRate15min= rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 30 // 5 requests per window ms
    });

    const quoteRate = rateLimit({
        windowMs: 30000, //30 Seconds
        max: 3 // 1 request per window ms
    });

const rates = {
    quoteRate,
    quoteRate15min
}

module.exports = rates