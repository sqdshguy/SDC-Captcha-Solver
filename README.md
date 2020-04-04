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
```
$ npm i github:sqdshcom/SDC-Captcha-Solver
```

# Special thanks to
@D3rise - Idea: rewrite script to a library<br>
@vladciphersky - Whole project idea