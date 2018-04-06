const db = require('../models');
const scraper = require('../scripts/scraper');

module.exports = {
    scrapedTitle: (req, res) => {
        return scraper()
            .then((articles) => {
                return db.Title.create(articles);
            })
            .then((dbTitle) => {
                if (dbTitle.length === 0) {
                    res.json({
                        message: 'No new articles today. Check back tomorrow!'
                    });
                } else {
                    res.json({
                        message: `Added ${dbTitle.length} new articles!`
                    });
                }
            })
            .catch((err) => {
                res.json({
                    message: 'Scraper complete!'
                });
            });
    }
};