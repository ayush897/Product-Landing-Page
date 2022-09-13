// get elements
const img = document.querySelector('.main-img img');
const toggleBtn = document.querySelector('.toggle');
const toggleText = document.querySelectorAll('.toggle-text');

//Toogle variable
let bool = true;
toggleBtn.addEventListener('click',()=>{
    /*change image and the text 
    content with toggle variable*/
    if(bool === true){
        // change image to light
        img.src ="cup-light.png";
        //change text content
        toggleText.forEach(text => {
            text.innerText = "White";
        });
        bool = false;
    }else{
        //change image to dark
        img.src ="cup-dark.png";
        //change text content
        toggleText.forEach(text =>{
            text.innerText = "Blvck";
        });
        bool = true;
    }
    //toggle theme
  document.body.classList.toggle('light-theme');
//toggle ICON
toggleBtn.firstElementChild.classList.toggle('fa-sun');
})
