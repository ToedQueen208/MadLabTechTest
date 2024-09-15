# MadLabTechTest
 This is the repository for the Madlab Junior Developer Role technical test

In this code each task that was set has been put into a function
To run a specfic function, for example searchForBook you comment the console log in the function getdata.
IF you dont want multiple functions running comment out the console logs in lines 31 - 34

I have explained below what each function does and how it relates to one of the tasks set.


Function get data
This peforms an asynchonous fetch to the API given. 
Once the data is fetch and the response is ok it will then call one of the functions listed below and output the respons


function searchForBook
This function searches through each page 1 of the index and compares the title to the title given as the test.
IF the title doesnt appear on that page this function call the getdata to search the next page
this keeps going until either the page is found or there is no longer any pages (i.e an errors comes through on reqwest)


function sortJSON
This sorts the IDs of the page given into ascending order using a javascript comparitor

function filterage
this checks the current page and compares the birthyear of the author to the current year. if the number is less than 200 then the data is stored in an array
the array is then outputed showing the authors who existed within the 200 years


function subjectsUpperCase
This checks the subjects on the current pages and uses the map() functiom to capitalise the subjects.
The new subjects aare stored in a new array and then outputed.

