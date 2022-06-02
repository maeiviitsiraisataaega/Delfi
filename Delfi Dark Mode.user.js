/// ==UserScript==
// @name         Delfi Dark Mode
// @namespace    https://github.com/maeiviitsiraisataaega/Delfi/
// @version      0.1
// @description  Dark mode Delfi jaoks
// @author       AHVIPEA
// @match        homepage
// @match        https://www.delfi.ee/*
// @resource     REMOTE_CSS https://raw.githubusercontent.com/maeiviitsiraisataaega/Delfi/main/css.css?version=5
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

function addGlobalStyle(css) {
	var head, style;
	head = document.getElementsByTagName('head')[0];
	if (!head) { return; }
	style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild(style);
}

addGlobalStyle('body, .C-block-type-11, .G-col { background-color: #121212 !important; color: #FFFFFF !important; }');
addGlobalStyle('h1, h2, h3, h4, h5, .C-block-type-social-text, a, .C-headline-title, .PILETITASKU-ticket__title, .PILETITASKU-ticket__date, #LB24, .lb24 { color: #FFFFFF !important; }');
addGlobalStyle('.C-headline-title__share, .C-comment-count { display: none !important; }');
addGlobalStyle('.WEATHER-location-search { background: #121212 !important; color: #FFFFFF !important; }');


(function() {
    'use strict';
    // Load remote CSS
    // @see https://github.com/Tampermonkey/tampermonkey/issues/835
    const myCss = GM_getResourceText("REMOTE_CSS");
    GM_addStyle(myCss);



})();


