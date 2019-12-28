# mml

[![GitHub license](https://img.shields.io/github/license/orlando722/mml)](https://github.com/orlando722/mml/blob/master/LICENSE)

Library to manage small modules in javascript.

**Example:**

```javascript
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
```
---------------------------------------------

```javascript
var sum = mml('sum', [
    {
        name: 'sum',
        logic: function(module, expose) {
            module.expose = function(a, b) {
                return a + b;
            };
        }
    }
]);

console.log(sum(5, 5));
```

**[See more](/example)**
