var addBtn = document.getElementById('add-btn')!;
addBtn.addEventListener('click', displayAddForm, false);

var sumnitBtn = document.getElementById('add-submit')!;
sumnitBtn.addEventListener('click', addPig, false);

function displayAddForm(){
  const addForm = document.getElementById('add-form');

  if(addForm != null){
    addForm.style.display = 'block';
  }
}

function addPig(){
  var name = (document.getElementById('name') as HTMLInputElement).value;
  var height = (document.getElementById('height') as HTMLInputElement).value;
  var weight = (document.getElementById('weight') as HTMLInputElement).value;
  var personality = (document.getElementById('personality') as HTMLInputElement).value;
  var category = (document.getElementById('category') as HTMLOptionElement).value;
  var formBody = document.querySelector('select') as HTMLSelectElement;

  if(category == "grey"){
    formBody.innerHTML += `
      <
    `;

  }


}

