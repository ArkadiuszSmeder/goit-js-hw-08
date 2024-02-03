import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");

const localStorageKey = "feedback-form-state";

form.addEventListener("input", throttle((event) => {
    let formData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
}), 500);

const storedFormData = localStorage.getItem(localStorageKey);
if (storedFormData) {
    const parsedFormData = JSON.parse(storedFormData);
    form.elements.email.value = parsedFormData.email ?? "";
    form.elements.message.value = parsedFormData.message ?? "";
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
});