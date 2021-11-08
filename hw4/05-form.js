let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // Add your code here
  event.preventDefault();
  let Name = document.querySelector("#uname");
  let Email = document.querySelector("#ename");
  let Date = document.querySelector("#date");
  let Newsletter = document.getElementsByName("signup");
  if (Name.value == "") {
    console.warn("You must enter some name to submit this form");
    return;
  }
  console.log("==========Form Submission=========");
  console.log("Username:", Name.value);
  console.log("Email:", Email.value);
  if (Newsletter[0].checked == true) {
    console.log("Newsletter:", "Yes");
  } else {
    console.log("Newsletter:", "no submission");
  }
  if (Date.value == "") {
    console.log("Date:", "no submission");
  } else {
    console.log("Date:", Date.value);
  }
}
