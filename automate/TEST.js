
$(function() {

console.clear();

let colors = [];
$('#modelColorsList li').each(function() {
    let color = $(this).find('p').text();
    color && colors.push(color) || color;
});



let specs = [];
$('#model-specs-list li').each(function() {
    let specItem = {};
    let specsFeaturesList = [];
    specItem.title = $(this).find('.model-accordion-tab span.inline-block').text();
    
    console.log(`-------------${specItem.title}-----------------`);
    $(this).find('.specs-features-list p').each(function() {
        let temp = {};
        let key = $(this).find('span.specs-features-item__content.text-light-grey').contents().filter(function() {
            return this.nodeType === 3;
        }).text().trim();
        let value = $(this).find('span.specs-features-item__content.text-bold').text();
        console.log(`${key}::${value}`);
        temp[key] = value;
        specsFeaturesList.push(temp);
        
    });
    
    
    specItem.specsFeaturesList = specsFeaturesList;
    specs.push(specItem);
});


let output = {
    title: $('h1.inline-block.margin-right15').text(), 
    decription: $('#modelAboutContent div.js-content').text(),
    colors,
    specs
};

console.log(output);


});
