'use strict';


/**
 * Add Chai's `expect` to the global scope.
 */

var chai = require("chai");
global.expect = chai.expect;


/**
 * We need a DOM to use Enzyme's `mount()`.
 * We load the document into the global scope before React is run.
 * See: https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md
 */

var jsdom = require("jsdom").jsdom;

var exposedProperties = ["window", "navigator", "document"];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === "undefined") {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: "node.js"
};
