let userForm = document.getElementById("user-form");
let generateBtn = document.getElementById("generate");

userForm.addEventListener('submit', function(event){
    event.preventDefault()
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;

    setDetails(name,email)
    setImage(gender)
    
    let card = document.getElementById('card');
    card.style.display = "flex";
});

function setImage(gender){
    let image = document.getElementById('image');
    boyImages = ["boy1.jfif","boy2.jfif","boy3.jfif","boy4.jfif","boy5.jfif","boy6.jpg","boy7.jpg"];
    girlImages = ["girl1.jfif","girl2.jfif","girl3.jfif","girl4.jfif","girl5.jfif","girl6.jfif","girl7.jfif"];
    randomNumber = Math.round(Math.random()*6);
    if(gender=="male"){
        image.src = `images/${boyImages[randomNumber]}`;
    } else{
        image.src = `images/${girlImages[randomNumber]}`;
    }
}

const setDetails = (name,email) => {
    document.getElementById('card-name').textContent = name;
    document.getElementById('card-email').textContent = email;
}