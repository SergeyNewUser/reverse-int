module.exports = function reverse(n) {
   if (n < 0) n = n * -1;
   n = n.toString();
   return c = n.split('').reverse().join('');

}
