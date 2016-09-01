/*
 * File: customize.js
 * Author: Zachary Liou
 * Date created: 2016 July 15
 */


(function() {

    "use strict";

    console.log("Hello world!");

    var ci = {      // "Custom input"
        "companyName" : "Gratis",
        "slogan" : "Messaging and Calls",
        "description" : "hello water dolor hipster monopoly julian",
        "features" : [
            "Gratis has no ads and is free to download and free to use.",
            "Your phone number is your user ID. No need to create a username and password.",
            "You can make free calls to other Gratis users that are online. You can make cheap international calls.",
            "You can make charged calls (Gratis Out) that are charged using the lowest possible rates. All international destinations are reachable by Gratis.",
            "EMERGENCY call credits. When you do not have credit and you cannot top up, you can request urgent credit ($2) and it will be immediately credited to your account. Next time you top up, it will be deducted from the top up.",
            "You can persnalize the app by changing app colors and background images.",
            "You can automatically translate received messages to a language you undersand. People who do not speak the same language can chat, each writing and receiving messages in their language. You can also translate chat room messages.",
            "Resent chat as SMS (mobile text message). When you send an urgent message and you notice that it was not read, you can convert the chat message to SMS and send it in one click. SMS is received even if the receiver is not online.",
            "More privacy. 'Last seen', 'Online', and 'Message read' statuses can be enabled or disabled for one or more contacts in your address book by a simple click.",
            "More security. You can recall a message that was sent by mistake to another user any time. The sender is always the owner of the message and can delete it on any device remotely.",
            "Unlimited free calls to other Gratis users via WiFi, 4G, and 3G.",
            "Unlimited free chat to other Gratis users via WiFi, 4G, 3G, and 2G.",
            "Gratis allows you to create chat groups and share your messages with several freinds at any time. Chats to a agroup are free and unlimited. Group owners and admins manage their chat groups: add and delete members.",
            "Unlimited free photos and video sharing with other Gratis users.",
            "Gratis allows you to share the contacts from your address book in chat messages.",
            "Use VOIP to make local, long-distance, and international calls.",
            "Gratis VOIP calls, SMS, and chat messages use minimum battery and bandwidth.",
            "Gratis sends you push notifications, so you'll always be notified of important calls and messages.",
        ],
    };

    // Get DOM elements
    var title = document.getElementById("title");
    var name = document.getElementById("company-name");
    var features = document.getElementsByClassName("about-text");
    document.getElement
    console.log(features);

    // Set element values
    title.innerHTML = ci.companyName;
    name.innerHTML += "<a href='index.html'>" + ci.companyName + "</a>";


    for (var i = 0; i < features.length && i < ci.features.length; ++i) {
        features[i].innerHTML = "<p>" + ci.features[i] + "</p>";
    }


    /*
     * Functions
     */



})();
