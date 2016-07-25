/*
 * File: detect.js
 * Author: Zachary Liou 
 * Date created: 2016 July 11
 * Description: Device detection script.
 */


(function() {
    "use strict";

    /*
     * Init constants
     */
     // Redirect vars
     // var REDIRECT_DESTINATION = "http://imageandcolors.com/";

    // Detection vars
    var TIME_LIMIT  = 300;
    var TIME_LIMIT_IOS = 950;
    var CHECKED     = false;
    var IS_MOBILE   = false;
                        
    // Confidence vars and constants
    var CONFIDENCE  = 0;
    var CONFIDENCE_THRESHOLD = 60;

    var GYRO_CONF       = 70;   // Does the device have a gyro?
    var ROTATE_CONF     = 70;   // Did the gyro's xyz values change?
    var TOUCH_CONF      = 10;   // Was there a touch event?
    var BATTERY_CONF    = 20;   // Does the device have a battery?
    var CHARGING_CONF   = -140; // Is the device plugged in?
    var SCREEN_CONF     = -10;  // Is the screen's aspect ratio NOT (16:9 or 3:2)?
    var PORTRAIT_CONF   = 25;   // Is the screen longer than it is wide?
                        
    // Screen constants
    var RATIO_16_BY_9 = (16.0 / 9.0);
    var RATIO_3_BY_2 = (3.0 / 2.0);

    // UA string keywords
    var KEYWORDS = [
        "Macintosh",
        "Ubuntu"
    ];

    
    /*
     * Init vars, flags, and listeners
     */
    // Detection flags
    var hasKeyword = false;
    var hasGyro = false;
    var hasBattery = false;
    var hasCommonScreenSize = false;
    var portrait = false;
    var isCharging = false;
    var clicked = false;
    var scrolled = false;
    var rotated = false;
    var touched = false;
    var mouseover = false;

    // Other gyro vars
    var gyro = document.querySelector('.gyro');
    var initAlpha = null;
    var initBeta = null;
    var initGamma = null;

    // Add event listeners
    window.addEventListener("deviceorientation", handleOrientation, true);
    document.addEventListener("click", handleClick, false);
    document.addEventListener("wheel", handleWheel);
    document.addEventListener("mouseover", handleMouseover);
    document.addEventListener("touchstart", handleStart, false);

    // Timeout
    var timeLimit = uaContainsIOS() ? TIME_LIMIT_IOS : TIME_LIMIT;
    var timeoutID = window.setTimeout(detectDevice, timeLimit);


    /*
     * Start detection procedure
     */
    navigator.getBattery().then(checkBattery);
    checkUserAgent();
    checkScreenData();

    // detectDevice will then execute after the time limit


////////////////////////////////////////////////////////////////////////


    /*
     * Functions
     */
    function detectDevice() {
        if (!CHECKED) {
            CHECKED = true;
            checkFlags();
            decide();
        }
    }


    function checkFlags() {
        if (hasKeyword || clicked || scrolled || mouseover) {
            CONFIDENCE = -1;
            return;
        }

        if (hasGyro) CONFIDENCE += GYRO_CONF;
        if (rotated) CONFIDENCE += ROTATE_CONF;
        if (touched) CONFIDENCE += TOUCH_CONF;
        if (hasBattery) CONFIDENCE += BATTERY_CONF;
        if (isCharging) CONFIDENCE += CHARGING_CONF;
        if (!hasCommonScreenSize) CONFIDENCE += SCREEN_CONF; // note the !
        if (portrait) CONFIDENCE += PORTRAIT_CONF;

        return;
    }


    function decide() {
        IS_MOBILE = CONFIDENCE >= CONFIDENCE_THRESHOLD;
        if (IS_MOBILE) {
            redirect();
        } else {
            document.getElementById("one").style.display = "none";
            document.getElementById("two").style.display = "block";
        }
    }


    function checkBattery(battery) {
        hasBattery = true;

        // Detect if initially charging
        if (battery.charging) {
            isCharging = true;
        }
    }


    function checkUserAgent() {
        var uaString = navigator.userAgent;

        for (var i = 0; i < KEYWORDS.length; ++i) {
            if (~uaString.indexOf(KEYWORDS[i])) {
                hasKeyword = true;
                return;
            } 
        }   
    }

    function uaContainsIOS() {
        return ~navigator.userAgent.indexOf("iPhone");
    }


    function checkScreenData() {
        if (!screen.width || !screen.height) {
            sizes.innerHTML = "no screen data available.";
            hasCommonScreenSize = true;
            portrait = false;
            return;
        }
    
        // Calculate screen ratio
        var ratio = screen.width / screen.height;

        // Set flags
        hasCommonScreenSize = (
            ratio == RATIO_16_BY_9
            || ratio == (1 / RATIO_16_BY_9)
            || ratio == RATIO_3_BY_2
            || ratio == (1 / RATIO_3_BY_2)
        ); 
        portrait = ratio < 1;
    }



    /*
    * Event handlers
    */
    function handleOrientation(event) {
        
        var absolute = event.absolute;
        var alpha    = event.alpha;
        var beta     = event.beta;
        var gamma    = event.gamma;

        // Check that gyro returns values
        if (alpha && beta && gamma) {
            hasGyro = true;

            // Set init gyro params if not already set
            if (!initAlpha || !initBeta || !initGamma) {
                initAlpha = alpha;
                initBeta = beta;
                initGamma = gamma;
            } else if (alpha != initAlpha || beta != initBeta || gamma != initGamma) {
                rotated = true;
            } // end else if 

        } // end outer if
        detectDevice();
    } // end handleOrientation


    function handleClick(event) {
        if (event.altKey || event.ctrlKey || event.metaKey) {
            // extra computer points
        }

        if (event.which == 2) {
            handleWheel();
        }
        detectDevice();
    }


    function handleWheel(event) {
        scrolled = true;
        detectDevice();
    }


    function handleStart(event) {
        touched = true;
        detectDevice();
    }


    function handleMouseover(event) {
        if (touched) { 
            return;
        } else {
            mouseover = true;
            detectDevice();
        }
    }


    function redirect() {
        window.location = target;
    }

})();
