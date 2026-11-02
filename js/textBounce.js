(() =>{
const myHeading = document.getElementById("myHeading");
var headingText = myHeading.innerHTML;

for (let i =0; i <headingText.length; i++){
    
    setTimeout(() =>{
        headingText.charAt[i].animate(letterBounce, bounceTiming);
        console.dir(headingText);
    }, 500)
 
}

})();



const letterBounce =[
    { transform: "translateY(-20px)"},
    { transform: "translateY(0px)"},
];

const bounceTiming ={
    duration: 500,
    iterations: 1,
};

const myHeading = document.getElementById("myHeading");

myHeading.addEventListener("click", () => {
    myHeading.animate(letterBounce, bounceTiming);
})