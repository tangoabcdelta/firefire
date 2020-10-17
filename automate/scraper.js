const { JSDOM } = require('jsdom');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '../crawl/aprilia.sr.160.html');
const options = {
    encoding: 'utf8',
    flag:'r'
};

console.log(`reading:${filePath}`);



(async() => {
    try {
        const html = await fs.readFileSync(filePath, options);
        let $ = cheerio.load(html);
        
        /////////////////////////////
        ///////////////////////////// INSERT SCRAPER HERE
        
        /////////////////////////////
        let output = {
            title: $('h1.inline-block.margin-right15').text(), 
            decription: $('#modelAboutContent div.js-content').text(),
            colors
        };
        console.log('done', output);
    } catch(err) {
        console.log(err);
    }
})();

