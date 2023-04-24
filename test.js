const sass = require('node-sass');

const result = sass.renderSync({file: "style.scss"});
console.log(result.css.toString());