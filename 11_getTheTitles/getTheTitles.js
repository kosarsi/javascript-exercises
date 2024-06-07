const getTheTitles = function(books) {
    let output = []; 
    for (let i = 0; i < books.length; i++) {
        if (Object.hasOwn(books[i], "title")) {
            output.push(books[i].title); 
        }
    }
    return output; 
};

// Do not edit below this line
module.exports = getTheTitles;
