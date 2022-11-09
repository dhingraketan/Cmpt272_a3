"use strict";
exports.__esModule = true;
var Pig_1 = require("./Pig");
localStorage;
window.onload = displayPigs;
var addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', displayAddForm, false);
var sumnitBtn = document.getElementById('add-submit');
sumnitBtn.addEventListener('click', addPig, false);
var contentTbl = document.getElementById('main-table');
contentTbl === null || contentTbl === void 0 ? void 0 : contentTbl.addEventListener('click', onDeleteRow, false);
contentTbl === null || contentTbl === void 0 ? void 0 : contentTbl.addEventListener('click', moreInfo, false);
var tBody = document.getElementById("main-table-body");
function displayPigs() {
    localStorage.removeItem("algoliasearch-client-js");
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = JSON.parse(localStorage.getItem(key));
        var pigNme = key;
        var pigCat = value.category;
        var cat = 'grey';
        if (pigCat == 0) {
            cat = 'Grey';
        }
        else if (pigCat == 1) {
            cat = 'Chestnut';
        }
        else if (pigCat == 2) {
            cat = 'White';
        }
        else if (pigCat == 3) {
            cat = 'Black';
        }
        tBody.insertAdjacentHTML('beforeend', "\n      <tr>\n        <td>".concat(pigNme, "</td>\n        <td>").concat(cat, "</td>\n        <td><button class=\"more-info\">More Info</button></td>\n        <td><button class=\"delete-btn\">Delete</button></td>\n      </tr>\n    "));
    }
}
function displayAddForm() {
    var addForm = document.getElementById('add-form');
    if (addForm != null) {
        addForm.style.display = 'block';
    }
}
var clickedOnce = false;
var category = document.getElementById('category');
category.addEventListener('change', showDynamicOpts, false);
function addPig() {
    var pigName = document.getElementById('name').value;
    var height = document.getElementById('height').valueAsNumber;
    var weight = document.getElementById('weight').valueAsNumber;
    var breed = document.getElementById('breed').value;
    var personality = document.getElementById('personality').value;
    var pers = Pig_1.Personality.bad;
    var p = new Pig_1.Pig(pigName, Pig_1.Category.grey, breed, +height, +weight, pers);
    if (personality == 'bad') {
        pers = Pig_1.Personality.bad;
    }
    else if (personality == 'fair') {
        pers = Pig_1.Personality.fair;
    }
    else if (personality == 'good') {
        pers = Pig_1.Personality.good;
    }
    else if (personality == 'excellent') {
        pers = Pig_1.Personality.excellent;
    }
    pigName = valdateInputforStrings(pigName, "name");
    breed = valdateInputforStrings(breed, "breed");
    height = validateInputforInts(height, "height", 100, 1);
    weight = validateInputforInts(weight, "weight", 1000, 1);
    var catVal = category.value;
    var personalityOptions = ["bad", "fair", "good", "excellent"];
    var categoryOptions = ["grey", "chestnut", "white", "black"];
    personality = validateInputforDropDowns(personality, personalityOptions, "Personality");
    catVal = validateInputforDropDowns(catVal, categoryOptions, "category");
    if (catVal == 'grey') {
        var swimAb = document.getElementById('swimming-ability').valueAsNumber;
        swimAb = validateInputforInts(swimAb, "Swim Ability", 100, 1);
        p = new Pig_1.GreyPig(pigName, breed, +height, +weight, pers, +swimAb);
    }
    else if (catVal == 'chestnut') {
        var lang = document.getElementById('language').value;
        lang = valdateInputforStrings(lang, "language");
        p = new Pig_1.ChestnutPig(pigName, breed, +height, +weight, pers, lang);
    }
    else if (catVal == 'white') {
        var runAb = document.getElementById('running-ability').valueAsNumber;
        runAb = validateInputforInts(runAb, "Running Ability", 100, 1);
        p = new Pig_1.WhitePig(pigName, breed, +height, +weight, pers, +runAb);
    }
    else if (catVal == 'black') {
        var strenght = document.getElementById('strenght').valueAsNumber;
        strenght = validateInputforInts(strenght, "Strenght", 10, 1);
        p = new Pig_1.BlackPig(pigName, breed, +height, +weight, pers, +strenght);
    }
    var serPig = JSON.stringify(p);
    localStorage.setItem(pigName, serPig);
    var addForm = document.getElementById('add-form');
    tBody.insertAdjacentHTML('beforeend', "\n      <tr>\n        <td>".concat(pigName, "</td>\n        <td>").concat(category.value, "</td>\n        <td><button class=\"more-info\">More Info</button></td>\n        <td><button class=\"delete-btn\">Delete</button></td>\n      </tr>\n    "));
    document.getElementById('name').value = '';
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('breed').value = '';
    document.getElementById('personality').value = '';
    category.value = '';
    hideDynamicOpts();
    addForm.style.display = 'none';
}
function hideDynamicOpts() {
    var formBody = document.querySelector('form');
    var lbl = formBody.getElementsByClassName('dynamic-opt');
    var lblLen = lbl.length;
    for (var i = 0; i < lblLen; i++) {
        formBody.removeChild(lbl[i]);
    }
    var ipt = formBody.getElementsByClassName('dynamic-ipt');
    var iptLen = ipt.length;
    for (var i = 0; i < iptLen; i++) {
        formBody.removeChild(ipt[i]);
    }
}
function showDynamicOpts() {
    var formBody = document.querySelector('form');
    var cat = category.value;
    if (clickedOnce) {
        var lbl = formBody.getElementsByClassName('dynamic-opt');
        var lblLen = lbl.length;
        for (var i = 0; i < lblLen; i++) {
            formBody.removeChild(lbl[i]);
        }
        var ipt = formBody.getElementsByClassName('dynamic-ipt');
        var iptLen = ipt.length;
        for (var i = 0; i < iptLen; i++) {
            formBody.removeChild(ipt[i]);
        }
    }
    if (cat == '') {
        return;
    }
    else if (cat == 'grey') {
        formBody.insertAdjacentHTML('beforeend', "<label for=\"swimming-ability\" class=\"dynamic-opt\">Swimming Ability</label>\n    <input type=\"number\" class = \"dynamic-ipt\" id =\"swimming-ability\">\n    ");
    }
    else if (cat == 'chestnut') {
        formBody.insertAdjacentHTML('beforeend', "\n    <label for=\"language\" class=\"dynamic-opt\">Language</label>\n    <input type=\"text\" class = \"dynamic-ipt\" id =\"language\">\n    ");
    }
    else if (cat == 'white') {
        formBody.insertAdjacentHTML('beforeend', "\n    <label for=\"running-ability\" class=\"dynamic-opt\">Running Ability</label>\n    <input type=\"number\" class = \"dynamic-ipt\" id =\"running-ability\">\n    ");
    }
    else if (cat == 'black') {
        formBody.insertAdjacentHTML('beforeend', "\n    <label for=\"strenght\" class=\"dynamic-opt\">Strenght</label>\n    <input type=\"number\" class = \"dynamic-ipt\" id =\"strenght\">\n    ");
    }
    clickedOnce = true;
}
function onDeleteRow(e) {
    var _a, _b, _c;
    if (e.target) {
        if (!e.target.classList.contains('delete-btn')) {
            return;
        }
        var btn = e.target;
        var btnRow = btn.closest("tr");
        var btnParent = btn.parentElement;
        var pigKey = ((_c = (_b = (_a = btnParent.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild) === null || _b === void 0 ? void 0 : _b.nextSibling) === null || _c === void 0 ? void 0 : _c.textContent);
        localStorage.removeItem(pigKey);
        btnRow.remove();
    }
}
function moreInfo(e) {
    var _a, _b, _c;
    if (e.target) {
        if (!e.target.classList.contains('more-info')) {
            return;
        }
        var btn = e.target;
        var btnParent = btn.parentElement;
        var pigKey = ((_c = (_b = (_a = btnParent.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild) === null || _b === void 0 ? void 0 : _b.nextSibling) === null || _c === void 0 ? void 0 : _c.textContent);
        var p = JSON.parse(localStorage.getItem(pigKey));
        var dynamicCat = p.category;
        var dynamicCatName = 'no';
        var dynamicCatOpt = '1';
        var personality = p.personality;
        var personalityOpt = '';
        if (dynamicCat == 0) {
            dynamicCatName = 'Swimming Ability';
            dynamicCatOpt = p.swim_ab;
        }
        else if (dynamicCat == 1) {
            dynamicCatName = 'Language';
            dynamicCatOpt = p.lang;
        }
        else if (dynamicCat == 2) {
            dynamicCatName = 'Running Ability';
            dynamicCatOpt = p.run_ab;
        }
        else if (dynamicCat == 3) {
            dynamicCatName = 'Strength';
            dynamicCatOpt = p.strenght;
        }
        if (personality == '0') {
            personalityOpt = "Bad";
        }
        else if (personality == '1') {
            personalityOpt = "Fair";
        }
        else if (personality == '2') {
            personalityOpt = "Good";
        }
        else if (personality == '3') {
            personalityOpt = "Excellent";
        }
        var infoTable = document.getElementById('info-table');
        infoTable.innerHTML =
            "\n      <thead>\n        <tr>\n          <th>More Info</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Name</td>\n          <td>".concat(p.name, "</td>\n        </tr>\n        <tr>\n          <td>Breed</td>\n          <td>").concat(p.breed, "</td>\n        </tr>\n        <tr>\n          <td>Height(inches)</td>\n          <td>").concat(p.height, "</td>\n        </tr>\n        <tr>\n          <td>Weight(lbs)</td>\n          <td>").concat(p.weight, "</td>\n        </tr>\n        <tr>\n          <td>").concat(dynamicCatName, "</td>\n          <td>").concat(dynamicCatOpt, "</td>\n        </tr>\n        <tr>\n          <td>Personality</td>\n          <td>").concat((personalityOpt), "</td>\n        </tr>\n    ");
    }
}
function valdateInputforStrings(value, typ) {
    if (value.length == 0) {
        while (value.length == 0) {
            var namePrompt = window.prompt("Enter a Valid input for " + typ, "");
            if (namePrompt != null && namePrompt.trim() != "") {
                value = namePrompt;
            }
        }
    }
    return value;
}
function validateInputforInts(value, typ, upperBound, lowerBound) {
    if (value < lowerBound || value > upperBound || !value) {
        while (+value < lowerBound || +value > upperBound || !value) {
            value = +(window.prompt("please a valid input between " + lowerBound + " and " + upperBound + " for " + typ, ""));
        }
    }
    return value;
}
function validateInputforDropDowns(value, tar, typ) {
    while (tar.indexOf(value) == -1) {
        var prompt = (window.prompt("Enter a Valid input for " + typ + " from " + tar.toString(), ""));
        value = (((prompt).toString())).toLowerCase();
    }
    return value;
}
