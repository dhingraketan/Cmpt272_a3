import{Category, Personality,Pig, GreyPig, ChestnutPig, WhitePig, BlackPig} from './Pig';

localStorage;

window.onload = displayPigs;

var addBtn = document.getElementById('add-btn')!;
addBtn.addEventListener('click', displayAddForm, false);

var sumnitBtn = document.getElementById('add-submit')!;
sumnitBtn.addEventListener('click', addPig, false);

var contentTbl = document.getElementById('main-table');
contentTbl?.addEventListener('click', onDeleteRow, false);
contentTbl?.addEventListener('click', moreInfo, false);

var tBody = document.getElementById("main-table-body")! as HTMLElement;

function displayPigs(){

  localStorage.removeItem("algoliasearch-client-js");
  for(let i = 0; i < localStorage.length; i++){

    var key = localStorage.key(i)!;
    var value = JSON.parse(localStorage.getItem(key)!);

    var pigNme = key;
    var pigCat = value.category;
    var cat: string = 'grey';
    if(pigCat == 0){
      cat = 'Grey';
    } else if(pigCat == 1){
      cat = 'Chestnut';
    }else if(pigCat == 2){
      cat = 'White';
    } else if(pigCat == 3){
      cat = 'Black';
    }

    tBody.insertAdjacentHTML('beforeend', 
    `
      <tr>
        <td>${pigNme}</td>
        <td>${cat}</td>
        <td><button class="more-info">More Info</button></td>
        <td><button class="delete-btn">Delete</button></td>
      </tr>
    `);
  }
}

function displayAddForm(){
  const addForm = document.getElementById('add-form');

  if(addForm != null){
    addForm.style.display = 'block';
  }
}

var clickedOnce:boolean = false;


var category = (document.getElementById('category') as HTMLInputElement);
category.addEventListener('change', showDynamicOpts, false);

function addPig(){
  var pigName = (document.getElementById('name') as HTMLInputElement).value;
  var height = (document.getElementById('height') as HTMLInputElement).value;
  var weight = (document.getElementById('weight') as HTMLInputElement).value;
  var breed = (document.getElementById('breed') as HTMLInputElement).value;
  var personality = (document.getElementById('personality') as HTMLInputElement).value;
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
  localStorage.setItem(pigName, serPig);
  const addForm = document.getElementById('add-form')! as HTMLDivElement;


  tBody.insertAdjacentHTML('beforeend', 
  `
    <tr>
      <td>${pigName}</td>
      <td>${category.value}</td>
      <td><button class="more-info">More Info</button></td>
      <td><button class="delete-btn">Delete</button></td>
    </tr>
  `);

  (document.getElementById('name') as HTMLInputElement).value = '';
  (document.getElementById('height') as HTMLInputElement).value = '';
  (document.getElementById('weight') as HTMLInputElement).value = '';
  (document.getElementById('breed') as HTMLInputElement).value = '';
  (document.getElementById('personality') as HTMLInputElement).value = '';
  category.value = '';
  hideDynamicOpts;
  addForm.style.display = 'none';
}

function hideDynamicOpts(){
  var formBody = document.querySelector('form') as HTMLFormElement;
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

  if(cat == ''){
    return;
  }else if(cat == 'grey'){
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

function onDeleteRow(e: Event){
  if(e.target){
   
    if(!(e.target as Element).classList.contains('delete-btn')){
      return;
    }
    
    var btn = (e.target as Element)!;
    var btnRow = btn.closest("tr")!;
    var btnParent = btn.parentElement!;
    var pigKey = (btnParent.parentElement?.firstChild?.nextSibling?.textContent)!;
    localStorage.removeItem(pigKey);
    btnRow.remove();
  }
}

function moreInfo(e: Event){

  if(e.target){
   
    if(!(e.target as Element).classList.contains('more-info')){
      return;
    }
    
    var btn = (e.target as Element)!;
    var btnParent = btn.parentElement!;
    var pigKey = (btnParent.parentElement?.firstChild?.nextSibling?.textContent)!;
    var p =  JSON.parse(localStorage.getItem(pigKey)!);
    var dynamicCat = p.category;
    var dynamicCatName = 'no';
    var dynamicCatOpt = '1';
    var personality = p.personality;
    var personalityOpt = '';

    if(dynamicCat == 0){
      dynamicCatName = 'Swimming Ability';
      dynamicCatOpt = p.swim_ab;
    } else if(dynamicCat == 1){
      dynamicCatName = 'Language';
      dynamicCatOpt = p.lang;
    } else if(dynamicCat == 2){
      dynamicCatName = 'Running Ability';
      dynamicCatOpt = p.run_ab; 
    } else if(dynamicCat == 3){
      dynamicCatName = 'Strength';
      dynamicCatOpt = p.strenght;
    }

    if(personality == '0'){
      personalityOpt = "Bad";
    } else if(personality == '1'){
      personalityOpt = "Fair";
    } else if(personality == '2'){
      personalityOpt = "Good";
    } else if(personality == '3'){
      personalityOpt = "Excellent";
    }
    
    var infoTable = document.getElementById('info-table')! as HTMLTableElement;
    infoTable.innerHTML = 
    `
      <div>More Info:</<div>
      <tbody>
        <tr>
          <td>Name</td>
          <td>${p.name}</td>
        </tr>
        <tr>
          <td>Breed</td>
          <td>${p.breed}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td>${p.height}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>${p.weight}</td>
        </tr>
        <tr>
          <td>${dynamicCatName}</td>
          <td>${dynamicCatOpt}</td>
        </tr>
        <tr>
          <td>Personality</td>
          <td>${(personalityOpt)}</td>
        </tr>
    `;
  }

}