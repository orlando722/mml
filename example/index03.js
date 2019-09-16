var cal = mml('cal', [
    {
        name: 'cal',
        logic: function(expose, getModule) {
            var helper = getModule('helper');

            expose.sum = function(a, b) {
                return helper.sum(a, b);
            };
        }
    },
    {
        name: 'helper',
        logic: function(expose) {
            expose.sum = function(a, b) {
                return a + b;
            };
        }
    }
]);

console.log(cal.sum(5, 5));
// console.log(cal.helper.sum(5, 5)); //Error: the helper module is not exposed.