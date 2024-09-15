
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
let correctTitle = "Short Stories";
let correctAuth = "Dostoyevsky, Theodor";
getData(pagenum);

function getData(p) {
  fetch("http://gutendex.com/books/?page=" + p)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response not ok');

      }
      return response.json();
    })
    .then((json) => {
      console.log("Searching page " + pagenum + " of the index");
      //console.log(subjectsUpperCase(json));
      console.log(sortJSON(json));
      // console.log(filterage(json));
      // console.log(searchForBook(json));
    });

}

function searchForBook(json) {
  //results is an array
  let results = json.results;
  for (let element of results) {
    if (element.title == correctTitle) {
      return element;
    }
  }
  //&& element.author == correctAuth didnt work :(


  pagenum += 1;
  getData(pagenum);
  return ("unable to find book on page " + (pagenum - 1));
}

function sortJSON(json) {
  let results = json.results;
  let answers = [];
  //let sorted = results.sort(function(a, b){return a.id - b.id})
  let sorted = results.sort(bookIDComparator)

  sorted.forEach(element => {
    answers.push(element.id)
  });
  return answers;
}

function bookIDComparator(a, b) {
  return a.id - b.id;
}


function filterage(json) {
  //
  let results = json.results;
  let answer = [];
  let currentYear = new Date().getFullYear();
  results.forEach((item) => {
    //console.log(item.authors)
    let filtered = item.authors.filter(autherYear => {
      return currentYear - autherYear.birth_year <= 200
    });
    answer.push(...filtered);
    return answer;
  })

  // answer.push(item.subjects)

  //console.log(item.subjects)


}


function subjectsUpperCase(json) {
  let results = json.results;
  let answer = [];
  results.forEach(item => {
    item.subjects = item.subjects.map(i => {
      return i.toUpperCase();
    })
    answer.push(item.subjects)

    return answer;

  })
  /*
  results.forEach(element => {
    console.log(element)
  });
  */
  //console.log(results);
  //let newResults = results.map(upperCase);
  //console.log(newResults) 

}
/*
function upperCase(element){

  return element.upperCase();
}
*/
