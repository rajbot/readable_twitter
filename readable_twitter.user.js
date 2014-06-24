// ==UserScript==
// @name           Readable Twitter
// @version        1.1
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

        //nav bar
        ".Icon--bird:before {color: #66757f}",
        ".tweet-btn, .tweet-btn:focus {background: none repeat scroll 0 0 rgba(102, 117, 127, 0.8)}",

        //mute the blue around the "Compose new Tweet" / "Reply to" box
        ".home-tweet-box, .dm-tweetbox, .WebToast-box--altColor, .content-main .conversations-enabled .expansion-container .inline-reply-tweetbox {background-color: #eeeeee}",
        ".u-bgUserColorLightest {background-color: #eeeeee !important}",

        //handle expand + view media links
        ".expand-stream-item {color: #8899a6}",
        ".details > .Icon:before {color: #8899a6}",

        //put main content on left of the dashboard
        ".dashboard {float: right}",
        ".content-main {float: left}",
    ].join("");
    GM_addStyle(css);
})();
