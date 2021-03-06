import currencies from './currencies.js';
import locales from "../locales";
import pages from "./pages.js";

function createPaths(first, arr) {
  var returnArray = [];
  first.forEach(function(item) {
    returnArray = returnArray.concat(arr.map(function(key) {
      return item + key;
    }));
  });
  return returnArray;
}

var paths = Object.keys(pages);
paths = paths.concat(createPaths(['/sequential-', '/thank-you-'], locales));
paths = paths.concat(createPaths(['/paypal-donate-'], Object.keys(currencies)));

module.exports = paths;
