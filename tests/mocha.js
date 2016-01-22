"use strict";

var Mocha = require("mocha");
var mocha = new Mocha({
  ui: "bdd",
  reporter: "spec",
  timeout: 100000
});

[
  require.resolve("./filter/test-filter-class.js")
].sort().forEach(filepath => {
  filepath && mocha.addFile(filepath);
})

mocha.run(function (failures) {
  process.exit(failures);
});
