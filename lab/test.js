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
        "icon": "../../Desktop/gratis.jpg",

    };

    // Get DOM elements
    var appNames = document.getElementsByClassName("app");
    var authorHeader = document.getElementById("author");
    var slogan = document.getElementById("slogan");

    // Set element values
    for (var i = 0; i < appNames.length; ++i) {
        appNames[i].innerHTML = data.app;
    }
    authorHeader.innerHTML = "by " + data.company;

    if (data.rating > 3.5) {
        slogan.innerHTML += rating + " stars. ";
    }

    if (data.downloads > 10000000) {
        slogan.innerHTML += "Ove ten million downloads. ";
    } else if (data.downloads > 1000000) {
        slogan.innerHTML += "Over one million downloads. ";
    } else if (data.downloads > 100000) {
        slogan.innerHTML += "Over one hundred thousand downloads. ";
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
