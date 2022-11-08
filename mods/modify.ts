import{Category, Personality,Pig, GreyPig, ChestnutPig, WhitePig, BlackPig} from './Pig';

function displayAddForm(){
  const addForm = document.getElementById('add-form');

  if(addForm != null){
    addForm.style.display = 'block';
  }
}

var numPigs: number =  localStorage.length;
var addBtn = document.getElementById('add-btn')!;
addBtn.addEventListener('click', displayAddForm, false);

var sumnitBtn = document.getElementById('add-submit')!;
sumnitBtn.addEventListener('click', addPig, false);



var pigName = (document.getElementById('name') as HTMLInputElement).value;
var height = (document.getElementById('height') as HTMLInputElement).value;
var weight = (document.getElementById('weight') as HTMLInputElement).value;
var breed = (document.getElementById('breed') as HTMLInputElement).value;
var personality = (document.getElementById('personality') as HTMLInputElement).value;
var category = (document.getElementById('category') as HTMLInputElement);
category.addEventListener('change', showDynamicOpts, false);
var clickedOnce:boolean = false;

function addPig(){
  var pers: Personality = Personality.bad;
  var p:Pig = new Pig(pigName, Category.grey, breed, +height, +weight, pers);
  if(personality == 'bad'){
    pers = Personality.bad;
  } else if(personality == 'fair'){
    pers = Personality.fair;
  } else if(personality == 'good'){
    pers = Personality.good;
  } else if(personality == 'excellent'){
    pers = Personality.excellent;
  }

  if(category.value == 'grey'){
    var swimAb = (document.getElementById('swimming-ability') as HTMLInputElement).value;
    p = new GreyPig(pigName, breed, +height, +weight, pers, +swimAb);
  } else if(category.value == 'chestnut'){
    var lang = (document.getElementById('language') as HTMLInputElement).value;
    p = new ChestnutPig(pigName, breed, +height, +weight, pers, lang);
  } else if(category.value == 'white'){
    var runAb = (document.getElementById('running-ability') as HTMLInputElement).value;
    p = new WhitePig(pigName, breed, +height, +weight, pers, +runAb);
  } else if( category.value == 'black'){
    var strenght = (document.getElementById('strenght') as HTMLInputElement).value;
    p = new BlackPig(pigName, breed, +height, +weight, pers, +strenght);
  }

  let serPig = JSON.stringify(p);

  localStorage.setItem(String(numPigs), serPig);
}

function showDynamicOpts(){
  var formBody = document.querySelector('form') as HTMLFormElement;
  var cat = category.value;
  
  if(clickedOnce){
    var lbl = formBody.getElementsByClassName('dynamic-opt')!;
    var lblLen = lbl.length;
    for (let i = 0; i < lblLen; i++) {
      formBody.removeChild(lbl[i]);
    }

    var ipt = formBody.getElementsByClassName('dynamic-ipt')!;
    var iptLen = ipt.length;
    for (let i = 0; i < iptLen; i++) {
      formBody.removeChild(ipt[i]);
    }
  }

  if(cat == 'grey'){
    formBody.insertAdjacentHTML('beforeend',
    `<label for="swimming-ability" class="dynamic-opt">Swimming Ability</label>
    <input type="number" class = "dynamic-ipt" id ="swimming-ability">
    `);
  } else if(cat == 'chestnut'){
    formBody.insertAdjacentHTML('beforeend', `
    <label for="language" class="dynamic-opt">Language</label>
    <input type="text" class = "dynamic-ipt" id ="language">
    `);
  } else if(cat == 'white'){
    formBody.insertAdjacentHTML('beforeend', `
    <label for="running-ability" class="dynamic-opt">Running Ability</label>
    <input type="number" class = "dynamic-ipt" id ="running-ability">
    `);
  } else if(cat == 'black'){
    formBody.insertAdjacentHTML('beforeend', `
    <label for="strenght" class="dynamic-opt">Strenght</label>
    <input type="number" class = "dynamic-ipt" id ="strenght">
    `);
  }

  clickedOnce = true;

}

