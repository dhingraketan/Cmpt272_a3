"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BlackPig = exports.WhitePig = exports.ChestnutPig = exports.GreyPig = exports.Pig = exports.Personality = exports.Category = void 0;
var Category;
(function (Category) {
    Category[Category["grey"] = 0] = "grey";
    Category[Category["chestnut"] = 1] = "chestnut";
    Category[Category["white"] = 2] = "white";
    Category[Category["black"] = 3] = "black";
})(Category = exports.Category || (exports.Category = {}));
var Personality;
(function (Personality) {
    Personality[Personality["bad"] = 0] = "bad";
    Personality[Personality["fair"] = 1] = "fair";
    Personality[Personality["good"] = 2] = "good";
    Personality[Personality["excellent"] = 3] = "excellent";
})(Personality = exports.Personality || (exports.Personality = {}));
var Pig = /** @class */ (function () {
    function Pig(name, category, breed, height, weight, personality) {
        this.name = name;
        this.category = category;
        this.breed = breed;
        this.height = height;
        this.weight = weight;
        this.personality = personality;
    }
    return Pig;
}());
exports.Pig = Pig;
var GreyPig = /** @class */ (function (_super) {
    __extends(GreyPig, _super);
    function GreyPig(name, breed, height, weight, personality, swim_ab) {
        var _this = _super.call(this, name, Category.grey, breed, height, weight, personality) || this;
        _this.swim_ab = swim_ab;
        return _this;
    }
    return GreyPig;
}(Pig));
exports.GreyPig = GreyPig;
var ChestnutPig = /** @class */ (function (_super) {
    __extends(ChestnutPig, _super);
    function ChestnutPig(name, breed, height, weight, personality, lang) {
        var _this = _super.call(this, name, Category.chestnut, breed, height, weight, personality) || this;
        _this.lang = lang;
        return _this;
    }
    return ChestnutPig;
}(Pig));
exports.ChestnutPig = ChestnutPig;
var WhitePig = /** @class */ (function (_super) {
    __extends(WhitePig, _super);
    function WhitePig(name, breed, height, weight, personality, run_ab) {
        var _this = _super.call(this, name, Category.white, breed, height, weight, personality) || this;
        _this.run_ab = run_ab;
        return _this;
    }
    return WhitePig;
}(Pig));
exports.WhitePig = WhitePig;
var BlackPig = /** @class */ (function (_super) {
    __extends(BlackPig, _super);
    function BlackPig(name, breed, height, weight, personality, strenght) {
        var _this = _super.call(this, name, Category.black, breed, height, weight, personality) || this;
        _this.strenght = strenght;
        return _this;
    }
    return BlackPig;
}(Pig));
exports.BlackPig = BlackPig;
