const axios = require('axios');
const cheerio = require('cheerio');

const scraper = () => {
    
    return axios.get('http://www.cracked.com/').then((res) => {
        
        const $ = cheerio.load(res.data);
        
        let articles = [];

        $('.content-card-content').each((i, element) => {
            let title = $(this)
                .children('h3')
                .children('a')
                .text()
                .trim();

            let url = $(this)
                .children('a')
                .attr('href');
            
            let summary = $(this)
                .children('p')
                .text()
                .trim();

            if (title && url && summary) {
                let titleNeat = title.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                let summaryNeat = summary.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                let articlesAdd = {
                    title: titleNeat,
                    summary: summaryNeat,
                    url: url
                };

                articles.push(articlesAdd);
            }
        });

        return articles

    });
}

module.exports = scraper;