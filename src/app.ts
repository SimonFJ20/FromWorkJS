
/*
*       Your FromWorkJS App
*
*       Filename:   app.ts
*       Pathname:   src/app.ts
*       Language:   TypeScript
*       Content:    Main file for app
*
*       License:    MIT (Or your License Here)
*
*       Authors:
*       Your Name Here
*           Email:      your@email.here
*           GitHub:     yourgithub
*
*       Created:    XX-XX-20XX
*       Last Edit:  XX-XX-20XX
*/

import { Component, DOM, html } from "./fromworkjs/fromwork";
import { Samplepage } from "./routes/samplepage";



export const App = (): Component => {

    DOM.setCssImport('global.css');

    // if router is omitted
    //return html(/*html*/`${Samplepage({titleText: `fromwork is terriblen't`})}`);

    // router, can be omitted
    switch(window.location.pathname) {

        case '/':
            return html(/*html*/`${Samplepage({titleText: `fromwork is terriblen't`})}`);

        default:
            return html(/*html*/`<h1>${window.location.pathname} not found! 404</h1>`);

    }

}

