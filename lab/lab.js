/*
 * File: lab.js
 * Author: Zachary Liou
 * Date created: 2016 July 13
 */

(function() {

    "use strict";


    console.log("Hello world!");

    var input = {
        "header": "Hello!",
        "test": "return",
        "desc": "This is a test!",
    };

    // Get DOM elements
    var header = document.getElementById("header");
    var test = document.getElementById("test");

    // Set element values
    header.innerHTML = input.header;
    test.innerHTML = input.test;


    
    /*
     * Testing procedures go here
     */
    var elems = [];
    var getId;
    var i = 0;
    var idBase = "mult";

    getId = document.getElementById(idBase + i);
    while (getId) {
        console.log(getId);
        //elems.push(getId);
        getId.innerHTML = input.desc + " " + i + "0"; 
        ++i;
        getId = document.getElementById(idBase + i);
    }

    var hello = document.getElementsByClassName("hello ");
    console.log(hello);
    for (i = 0; i < hello.length; ++i) {
        hello[i].innerHTML = input.desc + " " + i;
    }
    







    //
    //
    //
    //
    //
    // TODO: test "sections" in input JSON object
    //
    //
    //
    //
    //

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
