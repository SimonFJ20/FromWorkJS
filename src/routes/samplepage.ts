
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

import { Component, DOM, get, html, setRuntime } from "../../fromworkjs/fromwork";


class Props {

    titleText: string = '';

}



export const Samplepage = (props: Props): Component => {

    setRuntime(() => {

        DOM.id('title').innerText += props.titleText;
        DOM.id('alertButton').addEventListener('click', () => alert('Hello there'));


        get('http://localhost:4000/', (res, err) => {
            if(err === false) {
                console.log('error', res);
                return;
            }
            console.log(res);
        });


    });

    // 
    return html(/*html*/`

        <button id="alertButton">Press Me</button>
        <h1 id="title">Example page with text:&nbsp</h1>

    `)

}
