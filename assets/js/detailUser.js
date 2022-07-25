//Khai báo class vào biến
const showDetailUser = document.querySelector('.js--detailUser');
//Hàm mở modal
function show(){
    showDetailUser.classList.add('open');
}
//Lặp qua từng thể btn và nghe hành vi click và chạy hàm
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showModalbuyTickets);
}
//Hàm đóng modal
function closeModalbuyTickets(){
    showModal.classList.remove('open');
}
//Lắng nghe hành vi click và chạy hàm
    showDetailUser.addEventListener('click',show);
    btnXclose.addEventListener('click',closeModalbuyTickets);
    showModal.addEventListener('click',closeModalbuyTickets);
    containerModal.addEventListener('click',function(event){
        event.stopPropagation();
    });
