const fs = require("fs");
const path = require("path");
const babel = require("babel-core");
const origJs = require.extensions[".js"];

/*
 * We need to mock React Native because it is difficult to simulate
 * React Native components. We mock React Native with our custom mock to have
 * control over the spec of native components in case they change.
 */
require.extensions[".js"] = function (module, fileName) {
  let output;
  if (fileName.indexOf("node_modules/react-native/Libraries/react-native/react-native.js") >= 0) {
    fileName = path.resolve("./test/mocks/react-native.js");
  }

  if (fileName.indexOf("node_modules/") >= 0) {
    return (origJs || require.extensions[".js"])(module, fileName);
  }
  const src = fs.readFileSync(fileName, "utf8");
  output = babel.transform(src, {
    filename: fileName,
    sourceFileName: fileName,
    presets: ["react-native"]
  }).code;

  return module._compile(output, fileName);
};
