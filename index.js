"use strict";
exports.__esModule = true;
var Clc = /** @class */ (function () {
    function Clc() {
        this.str = '';
    }
    Object.defineProperty(Clc.prototype, "reset", {
        get: function () { this.str += '\x1b[0m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "bright", {
        get: function () { this.str += '\x1b[1m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "dim", {
        get: function () { this.str += '\x1b[2m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "underscore", {
        get: function () { this.str += '\x1b[4m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "blink", {
        get: function () { this.str += '\x1b[5m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "reverse", {
        get: function () { this.str += '\x1b[7m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "hidden", {
        get: function () { this.str += '\x1b[8m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "black", {
        get: function () { this.str += '\x1b[30m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "red", {
        get: function () { this.str += '\x1b[31m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "green", {
        get: function () { this.str += '\x1b[32m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "yellow", {
        get: function () { this.str += '\x1b[33m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "blue", {
        get: function () { this.str += '\x1b[34m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "magenta", {
        get: function () { this.str += '\x1b[35m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "cyan", {
        get: function () { this.str += '\x1b[36m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "white", {
        get: function () { this.str += '\x1b[37m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "bgBlack", {
        get: function () { this.str += '\x1b[40m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "bgRed", {
        get: function () { this.str += '\x1b[41m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "bgGreen", {
        get: function () { this.str += '\x1b[42m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "bgYellow", {
        get: function () { this.str += '\x1b[43m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "bgBlue", {
        get: function () { this.str += '\x1b[44m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "bgMagenta", {
        get: function () { this.str += '\x1b[45m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "bgCyan", {
        get: function () { this.str += '\x1b[46m'; return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clc.prototype, "bgWhite", {
        get: function () { this.str += '\x1b[47m'; return this; },
        enumerable: true,
        configurable: true
    });
    Clc.prototype.text = function (val) {
        var temp = this.str;
        this.str = '';
        return temp + val;
    };
    return Clc;
}());
var clc = new Clc();
exports["default"] = clc;

