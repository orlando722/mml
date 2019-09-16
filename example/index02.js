var cal = mml('cal', [
    {
        name: 'cal',
        logic: function(expose) {
            function sum(a, b) {
                return a + b;
            }

            expose.sum = function(a, b) {
                //call the internal function sum
                return sum(a, b);
            };
        }
    }
]);

console.log(cal.sum(5, 5));