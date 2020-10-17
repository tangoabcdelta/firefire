let colors = [];
$('#modelColorsList li').each( (index) => {
    let color = $(this).find('p');
    // console.log(`this:: ${$(this).find}`);
    //console.log(`this:: ${this}`);
    console.log(`p:: ${color.length}`);
    console.log(`p:: ${color}`);
    color = color.text();
    //console.log(`color:: ${color}`);
    if (color) {
        colors.push(color);
    }
});
let output = {
    title: $('h1.inline-block.margin-right15').text(), 
    decription: $('#modelAboutContent div.js-content').text(),
    colors
};
