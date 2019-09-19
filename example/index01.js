var cal = mml('cal', [
    {
        name: 'cal',
        logic: function(module, expose) {
            expose.sum = function(a, b) {
                return a + b;
            };
        }
    }
]);

console.log(cal.sum(5, 5));