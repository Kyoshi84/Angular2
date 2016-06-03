"use strict";
var Hero2 = (function () {
    function Hero2(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Hero2.prototype.consoleHero2 = function () {
        console.log(this.id);
        console.log(this.name);
        console.log(this.age);
    };
    return Hero2;
}());
exports.Hero2 = Hero2;
//# sourceMappingURL=hero2.js.map