
/**
 * Check if `el` is within the document.
 *
 * @param {Element} el
 * @return {Boolean}
 * @api private
 */

module.exports = function(el) {
  var node = el;

  if ('function' == typeof document.contains)
    return document.contains(el);

  while (node = node.parentNode) {
    if (node == document) return true;
  }
  return false;
};