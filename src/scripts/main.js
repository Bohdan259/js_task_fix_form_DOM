'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const fields = document.querySelectorAll('.field');

  function addLabel(parentInput) {
    const inputs = Array.from(parentInput.querySelectorAll('input'));
    const label = document.createElement('label');

    label.classList.add('field-label');

    inputs.forEach((input) => {
      label.htmlFor = input.id;
      label.textContent = input.name;
      parentInput.prepend(label);
    });
  }

  function addPlaceholderToInputs(parentInput) {
    const inputs = Array.from(parentInput.querySelectorAll('input'));

    inputs.forEach((input) => {
      const inputName = input.name;
      const UpperFirstLetter =
        inputName.charAt(0).toUpperCase() + inputName.slice(1);

      input.setAttribute('placeholder', UpperFirstLetter);
    });
  }

  fields.forEach((field) => addLabel(field));
  fields.forEach((field) => addPlaceholderToInputs(field));
});
