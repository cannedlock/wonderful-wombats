// document.querySelector('html').addEventListener('click', function() {
//     alert('Ouch! Stop poking me!');
// });

// Image handling
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let imgsrc = myImage.getAttribute('src');
    if(imgsrc === 'images/wombat.jpeg') {
        myImage.setAttribute('src','images/wombat2.jpeg');
        myImage.setAttribute('title', "Second Wombat Image!")
    }
    else {
        myImage.setAttribute('src','images/wombat.jpeg');
        myImage.setAttribute('title', "First Wombat Image!")
    }
}

//"Fun fact" Button handling
const facts = [
    "There Are Actually Three Sub-species Of Wombat",
    "The Heaviest Wombat Was 38kg",
    "They Can Run As Fast As A Human",
    "Their Teeth Don't Stop Growing",
    "They Are The Second Largest of All Marsupials",
    "A Group of Wombats is Known As a Wisdom"
];
let factButton = document.querySelector('button');
function GenerateAndDisplayFact () {
    const random = Math.floor(Math.random() * facts.length);
    if (facts.length > 0) {
        let fact = facts[random]
        alert(fact)
        // remove items so they don't repeat. might be a better way to do this but I don't care
        const index = facts.indexOf(fact);
        facts.splice(index, 1)
    }
    else {
        alert("Oops! That's all the facts. Refreash the page to see them again.")
    }
}
factButton.onclick = function () {
    GenerateAndDisplayFact();
}
