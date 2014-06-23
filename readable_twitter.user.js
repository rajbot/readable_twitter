// ==UserScript==
// @name           Readable Twitter
// @version        1.0
// @author         rajbot
// @namespace      http://bitstream.io
// @description    Make twitter timelines more readable by muting bright colors and moving the content to the left.
// @include        http://twitter.com/*
// @include        https://twitter.com/*
// @grant          GM_addStyle
// ==/UserScript==

(function() {
    var css = [
        "body {background-image: none !important}",
        "body {background-color: #ffffff !important}",
        ".twitter-timeline-link {color: #8899a6}",
        ".twitter-atreply > b {color: #8899a6}",
        ".twitter-atreply > s {display: none}",
        ".twitter-hashtag > b {color: #8899a6}",
        ".twitter-hashtag > s {display: none}",

        //put main content on left of the dashboard
        ".dashboard {float: right}",
        ".content-main {float: left}",
    ].join("");
    GM_addStyle(css);
})();
