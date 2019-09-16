# Minimum module load | mml
Library to create small and manage modules in javascript.

**Example:**

    var cal = mml('cal', [
        {
            name: 'cal',
            logic: function(expose) {
                expose.sum = function(a, b) {
                    return a + b;
                };
            }
        }
    ]);

    console.log(cal.sum(5, 5));


**[See more](/example)**