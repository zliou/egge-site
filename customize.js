/*
 * File: test.js
 * Author: Zachary Liou
 * Date created: 2016 July 18
 */



var target = "google.com";

(function() {
    "use strict";

    /*
     * Set custom data
     */

    var data = {
        "app": "Egge",
        "company": "Egge",
        "slogan": "Bringing people together.",
        "rating": 0,
        "downloads": 0,
        "features": [
            "Instantaneous. Create events here and now.",
            "Social. Invite entire groups of friends with one tap.",
            "Visual. See the events nearest to you on a map",
            "Rating system, so you know you'll have a good time.",
            "Comment system for chatting.",
            "Organized. Never lose track of an event in a newsfeed.",
            "Guest list for easy tracking",
            "Personalizable.",
            "Push notifications.",
        ],
        "email": "support@eggeapp.com",
        "phone": "(626) 214-8668",
        "icon": "egge.png",
    };

    var generic = {
        "images": [
            "images/1.jpg",
            "images/2.jpg",
            "images/3.jpg",
        ],
    }


    /*
     * Set constants and vars
     */

    // Contants
    var FEATURES_PER_SECTION = 3;   // How many features will each picture have?

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

    // Import and generate content
    // Script.load("detect.js");

    // Generate content
    makeBanner();
    makeSlogan();
    makeFeatures();
    showContactInfo();



    /*
     * Functions
     */

    function makeBanner() {
        pageTitle.innerHTML = data.app + " - " + data.slogan;
        for (var i = 0; i < appNames.length; ++i) {
            appNames[i].innerHTML = data.app;
        }
        authorHeader.innerHTML = "by " + data.company;
        
        icon.setAttribute("src", data.icon);
    }


    function makeSlogan() {
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
    }


    function makeFeatures() {
        var featureIndex = 0;
        var sectionIndex = 0;

        while (featureIndex < data.features.length && sectionIndex < featuresText.length) {
            featuresText[sectionIndex].innerHTML += "<p class='feature-entry'>" 
                + data.features[featureIndex] + "</p>";
            ++featureIndex;
            
            if (featureIndex % FEATURES_PER_SECTION == 0) {
                ++sectionIndex;
            }
        }

        for (var i = 0; i < featuresImage.length && i < generic.images.length; ++i) {
            featuresImage[i].innerHTML += "<img src=\"" + generic.images[i] + "\""
                + " class=\"feature-image\"" + "/>";
        }
    }


    function showContactInfo() {
        contactName.innerHTML = data.company;
        contactInfo.innerHTML = "<p>" + data.email + "</p><p>" + data.phone + "</p>";
    }

})();
