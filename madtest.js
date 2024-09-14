
/*List of things to do
Fetch from each page
search page for  title “Short Stories” by the author “Dostoyevsky, Theodor”
if not there go to next page

output book

USE THESE IN CODE
using the array.sort method 
Using array.map, modify each item’s item.subjects[] entries to be uppercase.
Using array.filter, remove all entries whose author didn’t exist within the last 200 years.
*/

let pagenum = 1;
console.log("Searching page " + pagenum + " of the index")

fetch("http://gutendex.com/books/?page=" + pagenum)
  .then((response) => response.json())

  .then((json) => { 
      console.log(parseJSON(json))
    });

    
function parseJSON(json)
{
  //results is an array
  let results = json.results;
  results.forEach(element => {
    console.log(element.title)
  });
}

