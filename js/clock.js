const myNode = document.createElement("div");
digitalClock.appendChild(myNode);

const secondHand = document.getElementById("secondHand");
const minHand = document.getElementById("minHand");
const hrHand = document.getElementById("hrHand");

const updateTime = () => {
    const myDate = new Date();
    myNode.innerHTML = myDate.toLocaleTimeString("en-GB", {timeStyle: "medium"});

    const seconds = myDate.getSeconds();
    const rotSeconds = seconds * 6 - 90;
    secondHand.style.transform = `rotate(${rotSeconds}deg)`;


    const minutes = myDate.getMinutes();
    const rotMinutes = minutes * 6 - 90;
    minHand.style.transform = `rotate(${rotMinutes}deg)`;



    const hours = myDate.getHours();
    const rotHr = hours * 30 - 90 + (rotMinutes/9);

    hrHand.style.transform = `rotate(${rotHr}deg)`;


}

setInterval(updateTime, 1000);
updateTime();

