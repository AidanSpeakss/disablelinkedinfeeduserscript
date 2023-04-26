// ==UserScript==
// @name         Remove Feed - LinkedIn
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.linkedin.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=linkedin.com
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';
function hideFeed(){
let newStyles = document.createElement('style');
    newStyles.innerText = "main[aria-label='Main Feed'] { display: none;}"
document.head.appendChild(newStyles);
}

hideFeed();
    // Your code here...
})();