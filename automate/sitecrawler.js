const puppeteer = require('puppeteer');
const { sites } = require('./crawl/crawl.json');
const { JSDOM } = require('jsdom');

const automate = {
    load: (async (sites) => {
        const browser = await puppeteer.launch();
        let promises = sites.map(async site => {
            console.log('visiting::', site);
            try {
                let page = await browser.newPage();
                let name = site.replace(/[^a-zA-Z0-9]/g, ''); //.replace(/(^\w+:|^)\/\//, '')
                await page.setViewport({
                    width: 1338,
                    height: 768,
                    deviceScaleFactor: 3
                });
                await page.goto(site, { waitUntil: 'domcontentloaded' }); // 'networkidle0'
                await page.waitForSelector('body'); // ..or, '#posts'
                
                let html = await page.$eval('html', e => e.outerHTML);
                let { window: { document } } = new JSDOM(html);
                let article = new Readability(document).parse();
                article = {
                    url: site,
                    'author': "Billy the Kid",
                    referrer: '',
                    baseURI: '',
                    href: '',
                    cookies: {},
                    title: article.title,
                    date: '',
                    links: '',
                    tags: '',
                    images: '',
                    annotation: '',
                    'key-words': [],
                    'article-title': article.title,
                    'article-content': article.content,
                    'creation-date': new Date(),
                    'समर्पितवितरक': 'iBR',
                    ...article
                };

                return article;
                //return await page.screenshot({
                //    path: `screenshots/${name}.png`
                //});
            }
            catch(error) {
                console.log(error);
            }
        });
        let value = await Promise.all(promises);
        await browser.close();
        // console.log('Promises in state:', promises);
        
        if (sites.length == 1) {
            console.log('value[0]:::');
            return value[0];
        }
        console.log('value[ALL]:::');
        return value;
    }),
    default: () => {
        this.load(sites);
    }
};

module.exports = automate;
