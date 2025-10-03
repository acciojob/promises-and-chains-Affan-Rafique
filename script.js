const form = document.getElementById("form");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop form from reloading page

  const nname = nameInput.value.trim();
  const aage = ageInput.value.trim();

  // Validation
  if (!nname || !aage) {
     alert("Please enter valid details");
    return;
  }

  // Promise
  const checkAge = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(aage) > 18) {
        resolve(`Welcome, ${nname}. You can vote.`);
      } else {
        reject(`Oh sorry ${nname}. You aren't old enough.`);
      }
    }, 4000);
  });

  // Handle promise
  checkAge
    .then((msg) => alert(msg))
    .catch((err) => alert(err));
});




	 
