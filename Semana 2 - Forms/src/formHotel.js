showExtraInputs = (checkbox, showValue) => {
    let elementToShow = document.getElementById(showValue);
    if(checkbox.checked){
        elementToShow.style.display = "block";
    }else{
        elementToShow.style.display = "none";
    }
}