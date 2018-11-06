'use strict';

// Use d3 to load the csv file using a *relative path*
d3.csv("data/websites.csv").then(function(data) {
    console.log(data);

    // Iterate through the data and append a new <li> for each item
    // The <li> should contain a link (<a>) to the website and 
    // a <span> with the description about the website
    data.map(function(d){
        let li = $('<li>');
        let a = $(`<a href="${d.url}">${d.title}</a>`);
        li.append(a);
        li.append(`<span>: ${d.description}</span>`);
        $('ul').append(li);
    })
});