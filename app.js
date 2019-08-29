// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success");
//   }, 1000);
// });

// app.get("/users", (req, res) => {
//   User.find({}, (err, dbResult) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.render("index", { users: dbResult });
//     }
//   });

//   User.find()
//     .then(dbResult => {
//       res.render("index", { users: dbResult });
//     })
//     .catch(err => console.log(err));
// });

//If you want pagination from the front end
// const elements = _(trees).slice((pageNumber -1) * pageSize).take(pageSize).value();

const user = { name: "hello", age: 18, shoes: "nikes" };

// const { age, name } = user;

// console.log(age, name);

displayUserInfo(user);

// function displayUserInfo({ name, age, shoes }) {
//   console.log("User name is ", name);
//   console.log("User age is ", age);
//   console.log("User is wearing  ", shoes);
// }

// function displayUserInfo(user) {
//   console.log("User name is ", user.name);
//   console.log("User age is ", user.age);
//   console.log("User is wearing  ", user.shoes);
// }

const showCase = document.getElementById("users-showcase");

const users = [
  { name: "hello", age: 18, image: "nikes" },
  { name: "Mike", age: 18, image: "nikes" },
  { name: "Toto", age: 9, image: "nikes" }
];

function createUserCard(user) {
  const card = document.createElement("div");
  card.classList.add("user-card");
  //    card.className = "user-card";
  card.innerHTML = `<div class="user-image">
    <img src="${user.image}" </div>
    <div class="user-info">
        Name: ${user.name}    Age:${user.age}
    </div>`;

  return card;
}

axios.get("myapiurlthatgivesmeallmyusers").then(res => {
  const users = res.data;
  const showCase = document.getElementById("users-showcase");
  createUsersCards(showCase, users);
});

function createUsersCards(DOMParent, users) {
  users.forEach(user => {
    // showCase.apppendChild(createUserCard(user));
    const userDOMElement = createUserCard(user);
    DOMParent.appendChild(userDOMElement);
  });
}
