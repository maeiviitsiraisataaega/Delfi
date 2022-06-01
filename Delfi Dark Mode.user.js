// ==UserScript==
// @name         Delfi Dark Mode
// @namespace    https://github.com/maeiviitsiraisataaega/Delfi/
// @version      0.1
// @description  Dark mode Delfi jaoks
// @author       AHVIPEA
// @match        homepage
// @match        https://www.delfi.ee*
// @resource   IMPORTED_CSS https://github.com/maeiviitsiraisataaega/Delfi/css.css
// @grant      GM_getResourceText
// @grant      GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    const my_css = GM_getResourceText("IMPORTED_CSS");
    GM_addStyle(my_css);
