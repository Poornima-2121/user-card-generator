let userForm = document.getElementById("user-form");
let generateBtn = document.getElementById("generate");

userForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let gender = document.getElementById("gender").value;

  createCard(name, email, gender);

});

function createCard(name, email, gender) {
  
  const cardContainer = document.querySelector(".container");
  const card = document.createElement("div");
  card.className = "card";

  const imageblock = document.createElement("div");
  imageblock.className = "img";

  const detailsblock = document.createElement("div");
  detailsblock.className = "details";

  const image = document.createElement("img");
  image.alt = "User";
  image.src = setImageUrl(gender);
  imageblock.appendChild(image);

  const namePara = document.createElement("p");
  namePara.textContent = name;
  namePara.className = "card-name";

  const emailPara = document.createElement("p");
  emailPara.textContent = email;
  emailPara.className = "card-email";

  detailsblock.appendChild(namePara);
  detailsblock.appendChild(emailPara);

  card.appendChild(imageblock);
  card.appendChild(detailsblock);

  cardContainer.appendChild(card);
}

function setImageUrl(gender) {
  boyImages = [
    "boy1.jfif",
    "boy2.jfif",
    "boy3.jfif",
    "boy4.jfif",
    "boy5.jfif",
    "boy6.jpg",
    "boy7.jpg",
  ];
  girlImages = [
    "girl1.jfif",
    "girl2.jfif",
    "girl3.jfif",
    "girl4.jfif",
    "girl5.jfif",
    "girl6.jfif",
    "girl7.jfif",
  ];
  randomNumber = Math.round(Math.random() * 6);
  if (gender == "male") {
    imageSource = `images/${boyImages[randomNumber]}`;
  } else {
    imageSource = `images/${girlImages[randomNumber]}`;
  }
  return imageSource;
}
