// ==UserScript==
// @name         Delfi Dark Mode
// @namespace    https://github.com/maeiviitsiraisataaega/Delfi/
// @version      0.2
// @description  Dark mode Delfi jaoks
// @author       maeiviitsiraisataaega
// @match        homepage
// @match        https://www.delfi.ee/*
// @match        https://kroonika.delfi.ee/*
// @match        https://forte.delfi.ee/*
// @match        https://ekspress.delfi.ee/*
// @match        https://arileht.delfi.ee/*
// @match        https://sport.delfi.ee/*
// @match        https://naistekas.delfi.ee/*
// @match        https://maaleht.delfi.ee/*
// @match        https://r.muu.ee/*
// @match        https://eekuulutused.delfi.ee/*
// @resource     REMOTE_CSS https://raw.githubusercontent.com/maeiviitsiraisataaega/Delfi/main/css.css
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

addGlobalStyle('body, .C-block-type-11, .G-col, .G-row, .HYPE_element, .lb24-article, .lb24-theme-streamline { background-color: #121212 !important; color: #FFFFFF !important; }');
addGlobalStyle('h1, h2, h3, h4, h5, .C-block-type-social-text, a, .C-headline-title, .PILETITASKU-ticket__title, .PILETITASKU-ticket__date, #LB24, .lb24, .C-fragment-pullout--primary-color, .lb24-article-title, .lb24-article-link, .lb24-component-content, .lb24-list-item-highlight, .lb24-component-content p { color: #FFFFFF !important; }');
addGlobalStyle('.C-headline-title__share, .C-comment-count { display: none !important; }');
addGlobalStyle('.WEATHER-location-search, .C-block-type-14__wrapper--has-bg, .C-headline-icons__icon--text, .C-article-headlines__content-wrapper, .content{ background: #121212 !important; color: #FFFFFF !important; }');
addGlobalStyle('.C-header__logo, .C-block-type-8__logo-secondary, .C-block-type-8__logo { filter: brightness(0) invert(1) !important; }');
addGlobalStyle('.eekuulutused-carousel a, #eekuulutused .rest-offers__link,  { background-color: #323232 !important; color: #FFFFFF !important; }');




(function() {
    'use strict';
    // Load remote CSS
    // @see https://github.com/Tampermonkey/tampermonkey/issues/835
    const myCss = GM_getResourceText("REMOTE_CSS");
    GM_addStyle(myCss);



})();


