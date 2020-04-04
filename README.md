# SDC Captcha Solver
Library to solve SD.C captchas using OCR.

# Example usage
```js
const solve = require("sdc-captcha-solver");

const url = "", // Url to SD.C captcha
    apikey = ""; // Your API key on ocr.space

solve(url, apikey)
    .then(r => {
        console.log(r)
    });
```

# Install
```js
$ npm i sdc-captcha-solver
```

# Special thanks to
[@D3rise](https://github.com/D3rise) | Idea: rewrite script to a library<br>
[@vladciphersky](https://github.com/vladciphersky) |  Whole project idea
