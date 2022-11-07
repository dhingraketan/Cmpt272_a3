function displayAddForm() {
    var addForm = document.getElementById('add-form');
    if (addForm != null) {
        addForm.style.display = 'block';
    }
}
var addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', displayAddForm, false);
