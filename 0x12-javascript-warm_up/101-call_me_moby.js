#!/usr/bin/node
exports.callMeMoby = function (x, theFunction) {
  while (x > 0 && x--) {
    theFunction();
  }
};
