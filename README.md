# mml
Library to manage small modules in javascript.

**Example:**

```javascript
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
```


**[See more](/example)**