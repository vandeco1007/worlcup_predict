let end = document.querySelectorAll('.end');
let choices = document.querySelectorAll('.choices')

end.forEach((item)=>{
    item.disabled = true;
    item.style.filter = "grayscale(100%)"
})

choices.forEach((choice)=>{
    choice.disabled=true
})