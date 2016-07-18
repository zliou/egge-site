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
        "slogan": "return",
        "desc": "This is a test!",
        "sections": [
            "Home",
            "About",
            "Testimonials",
            "Gallery",
            "Contact",
        ],
    };

    // Get DOM elements
    var header = document.getElementById("header");
    var slogan = document.getElementById("slogan");

    // Set element values
    header.innerHTML = input.header;
    slogan.innerHTML = input.slogan;


    
    /*
     * Testing procedures go here
     */
    var desc = document.getElementsByClassName("desc");
    console.log(desc);
    for (var i = 0; i < desc.length; ++i) {
        desc[i].innerHTML = input.desc + " " + i;
    }
    
    var sections = document.getElementsByClassName("section");
    console.log(sections);
    for (var i = 0; i < sections.length && i < input.sections.length; ++i) {
        sections[i].innerHTML = input.sections[i];
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
