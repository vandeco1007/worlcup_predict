let end = document.querySelectorAll('.end');

end.forEach((item)=>{
    item.disabled = true;
    item.style.filter = "grayscale(100%)"
})