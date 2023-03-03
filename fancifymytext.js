function alertPrompt(){
    //alert("Hello, World!");
    let textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24px";


}
//think i need to use an event listerner
//test last time
function radioButton(){
    let fancySchmancy = document.getElementById("fancySchmancy");
    let boringBetty = document.getElementById("boringBetty");
    if(fancySchmancy.checked){
        //boringBetty.checked = false;
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
        //boringBetty.checked = false;
    }
     if (boringBetty.checked){
        //fancySchmancy.checked = false;
        document.getElementById("textArea").style.fontWeight = "normal";
        //fancySchmancy.checked = false;
        
    }
    //document.getElementById("textArea").style.fontWeight = "bold";
}

function Moo(){
    
}

