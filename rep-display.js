// ==UserScript==
// @name         Fixed Stack Overflow Rep
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Shows the reputation of a user in green next to their comments
// @author       Keatinge
// @match        http://stackoverflow.com/*
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    $("#mainbar").find(".comment-user").not(".owner").each( function(index) {
        var username = $(this).html();
        var karma = this.title.replace("reputation", "");
        var karma = '<font color="green"><strong>' + karma + '</strong></font>';
        $(this).html(username + " " + karma);
    });
})();