const form = document.querySelector("form");
const email = document.querySelector(".email2");
// console.log("email", email);

form.onsubmit = (e) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let dem = 0;
  let a = email.value;
  //   console.log("form.onsubmit -> a", a)



  if (a == "" || a == null) {
    email.parentNode.classList.add("active");
    dem++;
  } else if (!a.match(re)) {
    email.parentNode.classList.add("active2");
    dem++;
  }

  if (dem > 0) {
    e.preventDefault();
  }

  
  error(email);
};

error = (set) => {
  set.onclick = () => {
    set.parentNode.classList.remove("active");
    set.parentNode.classList.remove("active2");
  };
};
