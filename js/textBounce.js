(() =>{
const myHeading = document.getElementById("myHeading");
const headingChildren = myHeading.children;

for (let i =0; i <headingChildren.length; i++){
    animateElement(headingChildren[i]);
}

})();

const myHeading = document.getElementById("myHeading");
const headingChildren = myHeading.children;
console.dir(headingChildren.length);

for (let i =0; i <headingChildren.length; i++){
    console.dir("upo");
}


myHeading.addEventListener("click", () => {
    for (let i =0; i <headingChildren.length; i++){
    
    setTimeout(() =>{
        animateElement(headingChildren[i]);
    }, 500)
 
}
})


function animateElement(element){
    element.style.transform = `translateY(-5px)`;
}