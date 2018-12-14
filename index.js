function concatString() {
  if (!arguments.length) return '';
  const args = [];
  for (let i = 0; arguments.length > i; i++) {
    const elm = arguments[i];
    if (Array.isArray(elm)) {
      args.push(concatString.apply(null, elm));
    } else if (typeof elm === 'string') {
      args.push(elm);
    }
  }
  return args
    .join(' ')
    .replace(/\s{2,}/, ' ')
    .replace(/^\s+|\s+$/, '');
}
module.exports = concatString;
