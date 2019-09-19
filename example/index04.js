var cal = mml('cal', [
    {
        name: 'cal',
        logic: function(module, expose, getModule) {
            var helper = getModule('helper');

            function sum(a, b) {
                return helper.sum(a, b);
            }

            expose.sum = function(a, b) {
                //call the internal function sum
                return sum(a, b);
            };

            expose.subtraction = function(a, b) {
                return helper.subtraction(a, b);
            };
        }
    },
    {
        name: 'helper',
        logic: function(module, expose) {
            expose.sum = function(a, b) {
                return a + b;
            };

            expose.subtraction = function(a, b) {
                return a - b;
            };
        }
    }
]);

console.log(cal.sum(5, 5));
console.log(cal.subtraction(5, 5));

// console.log(cal.helper.sum(5, 5));  //Error: the helper module is not exposed.
// console.log(cal.helper.subtraction(5, 5));  //Error: the helper module is not exposed.