const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 1000);
});

User.find()
  .then(dbResult => {
    res.render("user", { users: dbResult });
  })
  .catch();
