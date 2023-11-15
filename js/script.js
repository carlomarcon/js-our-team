const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
console.log(wrapper);
const Body = document.querySelector("body");
Body.prepend(wrapper);
const Container = document.createElement("div");
Container.classList.add("container");
wrapper.prepend(Container);
const Button = document.querySelector("button");

// ARRAY OBJECT

const team = [
  {
    Name: "Wayne Barnett",
    Role: "Founder and CEO",
    Image: "img/wayne-barnett-founder-ceo.jpg",
  },
  {
    Name: "Angela Caroll",
    Role: "Chief Editor",
    Image: "img/angela-caroll-chief-editor.jpg",
  },
  {
    Name: "Walter Gordon",
    Role: "Office Manager",
    Image: "img/walter-gordon-office-manager.jpg",
  },
  {
    Name: "Angela Lopez",
    Role: "Social media Manager",
    Image: "img/angela-lopez-social-media-manager.jpg",
  },
  {
    Name: "Scott Estrada",
    Role: "Developer",
    Image: "img/scott-estrada-developer.jpg",
  },
  {
    Name: "Barbara Ramos",
    Role: "Graphic Designer",
    Image: "img/barbara-ramos-graphic-designer.jpg",
  },
];

// FUNZIONE

function createTeam() {
  team.forEach((element) => {
    const Card = document.createElement("div");
    Card.classList.add("card");
    Container.append(Card);
    Card.innerHTML =
      "    <img src='" +
      element.Image +
      "'><h2>" +
      element.Name +
      "</h2><p>" +
      element.Role +
      "</p>";
  });
}

// createTeam();

Button.addEventListener("click", function () {
  Button.style.display = "none";
  createTeam();
});
