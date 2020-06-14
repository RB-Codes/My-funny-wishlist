'use strict'


var wishesarray = [];

function Wish() {
    this.want = want;
    this.year = year;
    wishesarray.push(this);
}

//  

var table = document.getElementById('Table')
var wishhead = document.getElementById('wishcol')
var yearhead = document.getElementById('yearcol')

var wishForm = document.getElementById('wishForm');
addEventListener('submit', addWishtoArray);

var wishInput = wishForm.tar


// creating wishes from form input and add them to wishes empty array
function addWishtoArray () {
    // alert("Hello");
    var randomWish = new Wish (wishInput, yearInput);
    wishesarray.push(randomWish);
    // console.log(wishesarray)
}

// rendering td in rows
function addwishestowishrow() {
    for (var i = 0; i < wishesarray.length; i++) {
        var wishinrow = document.createElement('td');
        wishhead.appendChild(wishinrow);
        var yearinrow = document.createElement('td');
        yearhead.appendChild(yearinrow);
    }
}


// Local storage data from array 

var sonstring = JSON.stringify('wishesarray');
var setinlocal = localStorage.setItem('thefullarray', 'setinlocal');

var getfromlocal = localStorage.getItem('thefullarray');
var parselocal = JSON.parse('wishesarray');




