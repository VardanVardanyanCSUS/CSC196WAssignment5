//Increases the font-size of text area to "24px"
function alertPrompt(){
    //alert("Hello, World!");
    let textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24px";


}

//if FancySchmancy radio button is toggled apply styles
//if boringBettey radio button is toggeled, remove all applied styles
function radioButton(){
    let fancySchmancy = document.getElementById("fancySchmancy");
    let boringBetty = document.getElementById("boringBetty");
    let textArea = document.getElementById("textArea");
    

    if (fancySchmancy.checked == true) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
      } 
      if (boringBetty.checked == true) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
      }
}

//Change text value to Uppercase
//add "-Moo" at the end of each sentence
function Moo(){
    let textArea = document.getElementById("textArea");
    let parts = textArea.value.split(".");

    textArea.value = parts.join("-Moo");
    textArea.value = textArea.value.toUpperCase();
    
    

}

