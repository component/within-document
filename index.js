
/**
 * Module dependencies.
 */

var withinElement = require('within-element');

/**
 * Check if the DOM element `child` is within the page global `document`.
 *
 * @param {DOMElement} child - the element to check if it with within `document`
 * @return {Boolean} True if `child` is within the `document`. False otherwise.
 * @public
 */

module.exports = function within (child) {
  return withinElement(child, document);
};
