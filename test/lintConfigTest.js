/*
*
* This file is a straight copy of lint config test for the purpose of testing
* the editor config file
*
*/

var a, b; // Lint is set to "intialization"; only error assign a or b
var a, b, c = 0; // This should error

let d,
    e;

let f,
    g = 0;

//this is a bad comment, (no space, no cap)
// this is not a bad (despite no caps) because it's a consecutive comment
// Good comment (space and caps)

console.log('comment test split');
// This is good
console.log('comment test split');
// this is bad
console.log('comment test split');
// still bad

/**
* i am jsdoc
* JS Doc DOES care about your comment caps
*/

/*
* I am good js doc, I capitalize
*/

/*
blockignore block comments are ignored from comment restrictions
when using the 'blockignore' tag as first word
*/

/*
this is not block ignored and will be wrong
*/

console.log(/* inline block comments also do what they want for caps, but need space*/'testing inline comments');

//--

//++

//**

const testConst = 'testConst';
const TEST_CONST = 'real_const';
let someVar = 'someVar';

console.log('no semi ending')

function testFunc(text){
	console.log('sublime auto tab'); // Seems like auto indent from sublime causes issues.
  console.log('dobule space'); // No auto indent from sublime no issues.
}

consoe.log("double quote flag warning");

//+++++++++++++
// wrong uses of camel case
// also note that this comment block doesn't cause errors =]
// ++++++++++++

import { no_camelcased } from "external-module"

var my_favorite_color = "#112C85";

function do_something() {
    // ...
}


obj.do_something = function() {
    // ...
};

var obj = {
    my_pref: 1
};

const MY_AMAZING_CONST = 'zomg';
var some_non_camel = 'wow-so-bad';

//+++++++++++++
// correct uses of camel case
// note the warnings for using double quotes instead of single
// ++++++++++++
import { no_camelcased as camelCased } from "external-module";

var myFavoriteColor   = "#112C85";
var _myFavoriteColor  = "#112C85";
var myFavoriteColor_  = "#112C85";
var MY_FAVORITE_COLOR = "#112C85";
var foo = bar.baz_boom;
var foo = { qux: bar.baz_boom };

obj.do_something();
do_something();
new do_something();

var { category_id: category } = query;