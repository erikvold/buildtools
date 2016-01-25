"use strict";

var Mocha = require("mocha");
var mocha = new Mocha({
  ui: "bdd",
  reporter: "spec",
  timeout: 100000
});

[
  require.resolve("./prefs/test-prefs.js")
].sort().forEach(filepath => {
  filepath && mocha.addFile(filepath);
})

mocha.run(failures => {
  process.exit(failures);
});
