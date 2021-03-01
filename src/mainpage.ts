
/*
*       Your FromWorkJS App
*
*       Filename:   samplepage.ts
*       Pathname:   src/routes/samplepage.ts
*       Language:   TypeScript
*       Content:    Example page component
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

import { Component, DOM, get, html, setRuntime } from "../fromworkjs/fromwork";


class Props {

    titleText: string = '';

}

let helloMsg: boolean = false;

export const Samplepage = (props: Props): Component => {

    setRuntime(() => {

        DOM.id('title').innerText += props.titleText;
        DOM.id('alertButton').addEventListener('click', () => {
            if(helloMsg) {
                DOM.id('helloMessage').innerText = '';
                helloMsg = false;
            } else {
                DOM.id('helloMessage').innerText = 'Hello There';
                helloMsg = true;
            }
        });


    });

    // 
    return html(/*html*/`

        <h1 id="title">Example page with text:&nbsp</h1>

        

        <button id="alertButton">Press Me</button>

        <h1 id="helloMessage"></h1>

    `)

}
