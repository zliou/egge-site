/*
 * File: test.js
 * Author: Zachary Liou
 * Date created: 2016 July 18
 */

(function() {

    "use strict";

    console.log("Hello world!");

    var data = {
        "app": "Gratis",
        "company": "Gratis Labs",
        "slogan": "Your favorite messaging apps, all in one.",
        "rating": 5,
        "downloads": 12345,
        "icon": "./gratis.jpg",
        "screens": [
            "screens/screen1.jpg",
            "screens/screen2.jpg",
        ],
    };

    // Get DOM elements
    var appNames = document.getElementsByClassName("app");
    var authorHeader = document.getElementById("author");
    var slogan = document.getElementById("slogan");
    var icon = document.getElementById("app-icon");

    // Set element values
    for (var i = 0; i < appNames.length; ++i) {
        appNames[i].innerHTML = data.app;
    }
    authorHeader.innerHTML = "by " + data.company;
    
    icon.setAttribute("src", data.icon);

    if (data.rating > 3.5) {
        slogan.innerHTML += data.rating + " stars. ";
    }

    if (data.downloads > 10000000) {
        slogan.innerHTML += "Ove ten million downloads. ";
    } else if (data.downloads > 1000000) {
        slogan.innerHTML += "Over one million downloads. ";
    } else if (data.downloads > 100000) {
        slogan.innerHTML += "Over 100,000 downloads. ";
    } else if (data.downloads > 10000) {
        slogan.innerHTML += "Over ten thousand downloads. ";
    }

    slogan.innerHTML += data.slogan;







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


})();
