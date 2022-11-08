"use strict";
exports.__esModule = true;
var Pig_1 = require("./Pig");
function displayAddForm() {
    var addForm = document.getElementById('add-form');
    if (addForm != null) {
        addForm.style.display = 'block';
    }
}
var numPigs = localStorage.length;
var addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', displayAddForm, false);
var sumnitBtn = document.getElementById('add-submit');
sumnitBtn.addEventListener('click', addPig, false);
var pigName = document.getElementById('name').value;
var height = document.getElementById('height').value;
var weight = document.getElementById('weight').value;
var breed = document.getElementById('breed').value;
var personality = document.getElementById('personality').value;
var category = document.getElementById('category');
category.addEventListener('change', showDynamicOpts, false);
var clickedOnce = false;
function addPig() {
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
    if (category.value == 'grey') {
        var swimAb = document.getElementById('swimming-ability').value;
        p = new Pig_1.GreyPig(pigName, breed, +height, +weight, pers, +swimAb);
    }
    else if (category.value == 'chestnut') {
        var lang = document.getElementById('language').value;
        p = new Pig_1.ChestnutPig(pigName, breed, +height, +weight, pers, lang);
    }
    else if (category.value == 'white') {
        var runAb = document.getElementById('running-ability').value;
        p = new Pig_1.WhitePig(pigName, breed, +height, +weight, pers, +runAb);
    }
    else if (category.value == 'black') {
        var strenght = document.getElementById('strenght').value;
        p = new Pig_1.BlackPig(pigName, breed, +height, +weight, pers, +strenght);
    }
    var serPig = JSON.stringify(p);
    localStorage.setItem(String(numPigs), serPig);
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
    if (cat == 'grey') {
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
