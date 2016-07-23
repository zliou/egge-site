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
        "features": [
            "No ads. Free to download and free to use.",
            "Unlimited free calls and messages to other Gratis users.",
            "Unlimited free photo and video sharing with other Gratis users.",
            "Cheap international calls.",
            "Translate incoming messages into a language you understand.",
            "Chat groups for all your friends. Free and unlimited.",
            "Personalizable.",
            "Push notifications. Never miss an important call.",
            "Minimum bandwidth and battery usage.",
        ],
        "email": "app@your-email-here.com",
        "phone": "858-585-8585",
        "icon": "./gratis.webp",
    };

    var generic = {
        "images": [
            "images/1.jpg",
            "images/2.jpg",
            "images/3.jpg",
        ],
    }

    // Get DOM elements
    var pageTitle = document.getElementById("page-title");
    var appNames = document.getElementsByClassName("app");
    var authorHeader = document.getElementById("author");
    var slogan = document.getElementById("slogan");
    var icon = document.getElementById("app-icon");
    var featuresText = document.getElementsByClassName("feature-text");
    var featuresImage = document.getElementsByClassName("feature-image-container");
    var contactName = document.getElementById("contact-name");
    var contactInfo = document.getElementById("contact-info");

    // Set element values

    pageTitle.innerHTML = data.app + " - " + data.slogan;
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

    var j = 0;
    for (var i = 0; i < featuresText.length && i < data.features.length; ++i) {
        featuresText[i].innerHTML += "<p class='feature-entry'>" + data.features[j++];
        featuresText[i].innerHTML += "</p><p class='feature-entry'>" 
            + data.features[j++];
        featuresText[i].innerHTML += "</p><p class='feature-entry'>" 
            + data.features[j++];
        featuresText[i].innerHTML += "</p>";
    }

    for (var i = 0; i < featuresImage.length && i < generic.images.length; ++i) {
        featuresImage[i].innerHTML += "<img src=\"" + generic.images[i] + "\""
            + " class=\"feature-image\"" + "/>";
    }

    contactName.innerHTML = data.company;
    contactInfo.innerHTML = "<p>" + data.email + "</p><p>" + data.phone + "</p>";


})();
