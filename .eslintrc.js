module.exports = {
  "env": {
    "es6": true, // enable all ECMAScript 6 features except for modules (this automatically sets the ecmaVersion parser option to 6).
    "browser": true, // browser global variables
    "node": true, //# Node.js global variables and Node.js scoping.
  },

  "parser": "babel-eslint", // By default, ESLint expects ECMAScript 5 syntax, specify ES6 instead
  
  "parserOptions": {
    "allowImportExportEverywhere": true,
  },

  "extends": "airbnb", //Use Airbnb style guide

  "rules": {
    "react/jsx-filename-extension": [
      1, 
      { 
        "extensions": [".js", ".jsx"], // Allow both JS and JSx extension
      }
    ],

    "no-console": "off",
  },

  "settings": {
    // Import resolver from Babel module-resolver, avoid "cannot resolve path"
    "import/resolver": {
      "babel-module": {}
    }
  }
};
