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
        "features": [
            "No ads. Free to download and free to use.",
            "Unlimited free calls and messages to other Gratis users.",
            "Cheap international calls.",
            "Translate incoming messages into a language you understand.",
            "Personalizable.",
            "Chat groups for all your friends. Free and unlimited.",
            "Minimum bandwidth and battery usage.",
            "Push notifications. Never miss an important call.",
        ],
        "email": "app@gratislabs.com",
        "phone": "858-585-8585",
    };

    var generic = {
        "images": [
            "images/1.jpg",
        ],
    }

    // Get DOM elements
    var appNames = document.getElementsByClassName("app");
    var authorHeader = document.getElementById("author");
    var slogan = document.getElementById("slogan");
    var icon = document.getElementById("app-icon");
    var featuresText = document.getElementsByClassName("feature-text");
    var featuresImage = document.getElementsByClassName("feature-images");

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
        slogan.innerHTML += "Over ten million downloads. ";
    } else if (data.downloads > 1000000) {
        slogan.innerHTML += "Over one million downloads. ";
    } else if (data.downloads > 100000) {
        slogan.innerHTML += "Over 100,000 downloads. ";
    } else if (data.downloads > 10000) {
        slogan.innerHTML += "Over ten thousand downloads. ";
    }

    slogan.innerHTML += data.slogan;



    /*
     * Generate features
     */
    var j = 0;
    for (var i = 0; i < featuresText.length && i < data.features.length; ++i) {
        featuresText[i].innerHTML += "<p>" + data.features[j++];
        featuresText[i].innerHTML += "</p><p>" + data.features[j++];
        featuresText[i].innerHTML += "</p>";
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


})();
