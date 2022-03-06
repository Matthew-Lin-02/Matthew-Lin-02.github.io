// works based on clicks
const currentbodyTheme = localStorage.getItem("body-theme");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var div5 = document.getElementById("div5");
// var divs = [div1, div2, div3, div4, div5];
const colors = document.getElementsByClassName('colors');
const currentTheme = localStorage.getItem("theme");
document.documentElement.style.setProperty('--color',currentTheme);
if (currentbodyTheme == "default") {
    Default.call()
}
document.documentElement.style.setProperty('--color',currentTheme);
$(window).on('load', function(){
    $("body").removeClass("preload");
    $(".preload").removeClass("preload");
});
let i;
for (i=0;i<colors.length;i++)(
    colors[i].addEventListener('click',changecolor)

)
if (currentbodyTheme == "ocean") {
    Ocean.call();
}
if (currentbodyTheme == "dark") {
    Dark.call();
}

// function OpenPalette(){
//     if(document.getElementById("palette").style. = "transparent")
// }

// var paletteOpen = '0';
// function togglePalette(){
    
        // alert("functin called");
        // if(             document.getElementById("palette").style.display === "none";){
        //     alert("palette open pending");
        //     document.getElementById("palette").style.display = "block"; 
        //     alert("middle");
        //     paletteOpen = '1';
        //     alert("palette opened");
        // }
        // else{
        //     alert("palette closed pending");
        //     document.getElementById("palette").style.display = "none";
        //     paletteOpen = '0';
        //     alert("palette closed done");
        // };

    
// };

           
// function togglePalette(){        
// if(             document.getElementById("palette").style.display === "none"){
          
//     document.getElementById("palette").style.display = "block"; 
    
// }else{
   
//     document.getElementById("palette").style.display = "none";
   
  
// };
// };


function changecolor(){
    let color= this.getAttribute('data-color');
    document.documentElement.style.setProperty('--color',color);
    localStorage.setItem("theme", color);
}



function Ocean(){
// document.body.style.backgroundColor = 'green';
if(div1){
    document.getElementById("div1").style.backgroundColor = "transparent";

}
if(div2){
    document.getElementById("div2").style.backgroundColor = "transparent";

}
if(div3){
    document.getElementById("div3").style.backgroundColor = "transparent";
}
if(div4){
    document.getElementById("div4").style.backgroundColor = "transparent";

}
if(div5){
    document.getElementById("div5").style.backgroundColor = "transparent";
}
document.body.style.background = "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)";
document.body.style.animation="gradient 15s ease infinite";
document.body.style.backgroundSize="400% 400%";
document.body.style.color="white";
localStorage.setItem("body-theme", "ocean");
}

function Default(){
if(div1){
    document.getElementById("div1").style.backgroundColor = "transparent";

}
if(div2){
    document.getElementById("div2").style.backgroundColor = "transparent";

}
if(div3){
    document.getElementById("div3").style.backgroundColor = "transparent";

}
if(div4){
    document.getElementById("div4").style.backgroundColor = "transparent";

}
if(div5){
    document.getElementById("div5").style.backgroundColor = "transparent";

}
document.body.style.background = "white";
document.body.style.color="black";
if(div2){
    document.getElementById("div2").style.backgroundColor = "#f2f2f2";
}
if(div4){
    document.getElementById("div4").style.backgroundColor = "#f2f2f2";
}
document.body.style.animation = "none";
localStorage.setItem("body-theme", "default");
}
function Dark(){

    document.body.style.background = "0";
    document.body.style.animation = "none";
    if(div1){
        document.getElementById("div1").style.backgroundColor = "transparent";
    }
    if(div2){
        document.getElementById("div2").style.backgroundColor = "transparent";
    }
    if(div3){
        document.getElementById("div3").style.backgroundColor = "transparent";
    }
    if(div4){
        document.getElementById("div4").style.backgroundColor = "transparent";
    }
    if(div5){
        document.getElementById("div5").style.backgroundColor = "transparent";
    }
    document.body.style.backgroundColor = "#1e1e1e";
    document.body.style.color="#EEEEEE";
    localStorage.setItem("body-theme", "dark");
    document.body.style.animation = "none";
}




