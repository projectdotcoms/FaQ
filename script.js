const container = document.querySelectorAll('.container');

for(let i=0;i< container.length ;i++) {
container[i].addEventListener('click',function(){
   this.classList.toggle('active');
})
};