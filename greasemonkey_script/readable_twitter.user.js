// ==UserScript==
// @name           Readable Twitter
// @version        1.2
// @author         rajbot
// @description    Make twitter timelines more readable by muting bright colors and moving the content to the left.
// @grant          GM_addStyle
// @include        http://twitter.com/*
// @include        https://twitter.com/*
// ==/UserScript==

// This script was generated programatically by chromeext_to_greasemonkey.py

(function() {
    GM_addStyle('body{background-image:none!important;background-color:#fff!important}.twitter-timeline-link{color:#8899a6!important}.twitter-atreply>b{color:#8899a6!important}.twitter-atreply>s{display:none!important}.twitter-hashtag>b{color:#8899a6!important}.twitter-hashtag>s{display:none!important}.expand-stream-item{color:#8899a6}.details>.Icon:before{color:#8899a6}.Icon--bird:before{display:none!important}.tweet-btn,.tweet-btn:focus{background:none repeat scroll 0 0 rgba(102,117,127,0.8)!important}#global-new-tweet-button.tweet-btn,#global-new-tweet-button.tweet-btn:focus{background:none repeat scroll 0 0 rgba(102,117,127,0.8)!important}.home-tweet-box,.dm-tweetbox,.WebToast-box--altColor,.content-main .conversations-enabled .expansion-container .inline-reply-tweetbox{background-color:#eee!important}.u-bgUserColorLightest{background-color:#eee!important}.u-bgUserColorLightest.home-tweet-box{background-color:#eee!important}.wtf-module{display:none!important}.trends{display:none!important}.dashboard{float:right!important}.content-main{float:left!important}');

})();
