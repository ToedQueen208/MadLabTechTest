
let pagenum = 1;
console.log("Searching page " + pagenum + " of the index")

fetch("http://gutendex.com/books/?page=" + pagenum)
  .then((response) => response.json())

  .then((json) => { 
      console.log(json)
    });

