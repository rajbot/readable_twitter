(function() {

var retweets_visible = true;

function hide_retweets() {
    $('.js-retweet-text').parent().parent().parent().filter(':visible').hide();
    retweets_visible = false;
}

// select the target node
//var observer_target = document.querySelector('#stream-items-id');
var page_container = document.querySelector('#page-container');

// create an observer instance
var observer = new MutationObserver(function(mutations) {
    //console.log('observer fired, retweets_visible=', retweets_visible);
    if (!retweets_visible) {
        hide_retweets();
    }
});

// configuration of the observer:
var observer_config = { attributes: false, childList: true, characterData: false, subtree:true };
observer.observe(page_container, observer_config);

var hide_rt_div = $('<li><a href="#"><span class="Icon Icon Icon--retweeted Icon--large"></span><span id="hidert_button_txt" class="text">hide</span></a></li>');
$(hide_rt_div).click(function() {
    //console.log('toggling retweets');
    if (retweets_visible) {
        hide_retweets();
        $('#hidert_button_txt').text('show');
        //observer.observe(page_container, observer_config);
    } else {
        //observer.disconnect();
        $('.js-retweet-text').parent().parent().parent().show();
        $('#hidert_button_txt').text('hide');
        retweets_visible = true;

    }
});

var nav_bar = $('#global-nav-home').parent();
$(nav_bar).find('.topics').hide();   //hide the discover button and replace with hide_rt_div
$(nav_bar).append(hide_rt_div);      //show the hide retweets button

})();