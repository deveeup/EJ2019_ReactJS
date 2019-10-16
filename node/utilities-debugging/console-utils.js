// console.log("un %s y un %s", "doggito", "cattsito");
// console.info('nej');
// console.warn("hi error")
// console.assert(42 == '42')
// console.trace("aquí fue!")

const util = require("util");
const debuglog = util.debuglog("foo");
debuglog("hi from foo");