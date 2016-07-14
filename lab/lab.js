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

    // Get file
    //readTextFile("file://input.txt");



    /*
     * Functions
     */

    function readTextFile(file) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    alert(allText);
                }
            }
        }
        rawFile.send(null);
    }


})();
