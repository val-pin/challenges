//Accessing Interactive Fields: event.target.elements and the name Attribute

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  console.log(formElements.question);
  console.log(formElements.question.value);
});

//Using Input Values

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
});
