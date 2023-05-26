var orderBar = document.querySelector(`.order-bar`);
var modalBg = document.querySelector(`.modal-bg`);
var btnCancel = document.querySelector(`.cancel`);

orderBar.addEventListener (`click`, function(){
    modalBg.classList.add(`bg-active`);
});

btnCancel.addEventListener (`click`, function(){
    modalBg.classList.remove(`bg-active`);
});