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
var Category;
(function (Category) {
    Category[Category["Grey"] = 0] = "Grey";
    Category[Category["Chestnut"] = 1] = "Chestnut";
    Category[Category["White"] = 2] = "White";
    Category[Category["Black"] = 3] = "Black";
})(Category || (Category = {}));
var Personality;
(function (Personality) {
    Personality[Personality["bad"] = 0] = "bad";
    Personality[Personality["fair"] = 1] = "fair";
    Personality[Personality["good"] = 2] = "good";
    Personality[Personality["excellent"] = 3] = "excellent";
})(Personality || (Personality = {}));
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
var GreyPig = /** @class */ (function (_super) {
    __extends(GreyPig, _super);
    function GreyPig(name, breed, height, weight, personality, swim_ab) {
        var _this = _super.call(this, name, Category.Grey, breed, height, weight, personality) || this;
        _this.swim_ab = swim_ab;
        return _this;
    }
    return GreyPig;
}(Pig));
var p1 = new GreyPig("ip", "hu", 10, 50, Personality.good, 20);
console.log(typeof (p1));
