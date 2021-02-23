# FromWorkJS Documentation

## Table of content
- [About    // TODO](#about-------todo)
- [Getting Started](#getting-started)
  * [Development](#development)
  * [Deployment](#deployment)
- [Guide](#guide)
  * [Development Enviroment](#development-enviroment)
  * [Installation](#installation)
  * [Enable / Dissable router](#enable---dissable-router)
    + [To **Dissable** the router](#to---dissable---the-router)
    + [To **Enable** the router](#to---enable---the-router)
- [Reference](#reference)
- [Code examples](#code-examples)
  * [Example NodeJS ExpressJS router](#Example-NodeJS-ExpressJS-router)



## About    // TODO




## Getting Started

### Development
1. Install `npm` with `NodeJS` and install `git`
2. Clone this repository `git clone https://github.com/SimonFJ20/FromWorkJS`
3. Install dependencies `npm install`
4. Run `npm run dev` to start development

### Deployment
1. Run `npm run build`
2. Copy `dist/` to server
3. Setup server to point to `dist/index.html`

To update FromWorkJS run `git clone https://github.com/SimonFJ20/FromWorkJSLibrary fromworkjs`






## Guide


### Development Enviroment
You can use all the platforms and editors you like. If you use a fancy editor we recommend installing a plugin that highlights HTML in JavaScript strings. We use `es6-string-html` by **Tobormory** in Visual Studio Code, therefore our example code contains `/*html*/` before HTML strings to indicate it is a HTML string. Though not strictly necessary, it is nice to have highlighted HTML.



### Installation

[Getting Started](#getting-started) describes how to install project template.



### Enable / Dissable router

The FromWorkJS router is a simple implementation of a router.

#### To **Dissable** the router
To dissable the router, your `app.ts` should look something like this:
```typescript
export const App = (): Component => {
    
    /* Your code */
    
    // Same for all trafic regardless of route/URL location 
    return html(/*html*/ `
        ${Samplepage({titleText: `example`})}
    `); 
}
```

#### To **Enable** the router
To enable the router, your `app.ts` should look something like this:
```typescript
export const App = (): Component => {
    
    /* Your code */
    
    switch(window.location.pathname) {      // Get the route/URL location
    
        case '/':               // Check for home route
            return html(/*html*/ `
                ${Samplepage({titleText: `example`})}
            `);
            
        case '/route1':         // Check for /route1 route
            return html(/*html*/ `
                ${Samplepage({titleText: `example`})}
            `);
            
        case '/route2/page1':   // Check for /route2/page1 route
            return html(/*html*/ `
                ${Samplepage({titleText: `example`})}
            `);

        default:    // All routes not specified
            // This can also just redirect or route to home page
            return html(/*html*/ `
                <h1>${window.location.pathname} not found! 404</h1>
            `);

    }
    
}
```
**Note** the router requires a serverside router



## Reference





## Code examples

### Example NodeJS ExpressJS router
To use router, it is required that the server is setup to route all relevant request to dist/index.html.
A simple to route all routes is with this NodeJS/ExpressJS script:
1. Make new folder outsite the `dist/` and call it `devserver/`
2. Navigate to the folder in a Console and run `npm init -y`
3. Install ExpressJS by running `npm install express`
4. Make a new file called `server.js` and type the following

```javascript
const express = require('express');
const path = require('path');
const app = express();


/* All relevant routes used */

//app.get(      '/yourRoute'
, (req, res) => {res.sendFile(path.join(__dirname, '../dist/index.html'))});

app.get(        '/'
, (req, res) => {res.sendFile(path.join(__dirname, '../dist/index.html'))});

app.get(        '/route1'
, (req, res) => {res.sendFile(path.join(__dirname, '../dist/index.html'))});

app.get(        '/route2/page1'
, (req, res) => {res.sendFile(path.join(__dirname, '../dist/index.html'))});



app.use(express.static(path.join(__dirname, '../dist/')));
app.listen(5000);
```

5. Save and close the file
6. To run it use either one
    * Type `node server.js` in a Console
    * Make a script in the `package.json` `"start": "node server.js"`
7. Open a browser and type `//localhost:4000/` in the URL bar and hit enter


