function mainFunction(){
    let allNpm = document.forms[0];
    let npmText= "";
    for(let i = 0; i <allNpm.length; i++){
        if(allNpm[i].checked){
            npmText = npmText + allNpm[i].value + " ";
        }
    }
    document.getElementById("list").innerHTML = ""+ npmText;
}