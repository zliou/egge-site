/*
 * File: lab.js
 * Author: Zachary Liou
 * Date created: 2016 July 13
 */

(function() {

    "use strict";


    console.log("Hello world!");

    var input = {
        "header": "Bananas!",
        "test": "banana",
    };

    // Get DOM elements
    var header = document.getElementById("header");
    var test = document.getElementById("test");

    // Set element values
    header.innerHTML = input.header;
    test.innerHTML = input.test;


    console.log("End of JS reached.");

})();
