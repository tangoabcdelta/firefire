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
        let { window: { document } } = new JSDOM(html);
        
        let colors = [];
        document.querySelectorAll('#modelColorsList li').forEach((li) => {
            colors.push(li.querySelector('p').innerHTML);
        });
        
        let specs = [];
        document.querySelectorAll('#model-specs-list li').forEach((li) => {
            let specItem = {};

            
            let specsFeaturesList = [];
            li.querySelectorAll('.specs-features-list p').forEach(p => {
                if(p) {
                    let temp = {};
                    let key = p.querySelector('span.specs-features-item__content.text-light-grey').innerHTML
                    let value = p.querySelector('span.specs-features-item__content.text-light-bold').innerHTML
                    temp[key] = value;
                    specsFeaturesList.push(temp);
                }
            });

            specItem.title = li.querySelector('.model-accordion-tab span.inline-block').innerHTML;
            specItem.specsFeaturesList = specsFeaturesList;
            specs.push(specItem);
        });
        
        
        
        
        
        let output = {
            title: document.querySelector('h1.inline-block.margin-right15').innerHTML,
            decription: document.querySelector('#modelAboutContent div.js-content').innerHTML,
            colors,
            specs,
            body: document.querySelector('body').innerHTML
        }
        
        delete output.body;
        console.log('done', output);
    } catch(err) {
        console.log(err);
    }
}) ()
