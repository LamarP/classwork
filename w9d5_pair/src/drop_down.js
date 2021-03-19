
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};


const dogLinkCreator = (dogs) => {
  const dogLinks = [];
  const dogNames = Object.keys(dogs);
  dogNames.forEach(dog=>{
    const dogLi = document.createElement("li");
    const dogA = document.createElement("a");
    dogA.innerHTML = dog;
    dogA.href = dogs[dog];
    dogLi.classList.add("dog-link");
    dogLi.appendChild(dogA);
    dogLinks.push(dogLi);
  })
  return dogLinks;
}

const attachDogLinks = function(){
  const dogLinks = dogLinkCreator(dogs);
  const dropDownList = document.querySelector(".drop-down-dog-list");

  dogLinks.forEach(li=>{
    dropDownList.appendChild(li);
  });



}


const handleEnter = function(event){
  // console.log("handleenter")
  const dogLinks = document.querySelectorAll(".dog-link")
  dogLinks.forEach(link=>{
    link.classList.remove("dog-link");
  });

}

const handleLeave = function(event){
  // console.log("handleenter")
  const dogLinks = document.querySelectorAll(".drop-down-dog-list li")
  dogLinks.forEach(link=>{
    link.classList.add("dog-link");
  });

}

const dogHeader = document.querySelector(".drop-down-dog-nav");
dogHeader.addEventListener("mouseenter",handleEnter);
dogHeader.addEventListener("mouseleave",handleLeave);

attachDogLinks();

