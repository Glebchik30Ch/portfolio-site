// Перевірка форми перед відправкою
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Забороняємо стандартне відправлення форми для перевірки

    // Отримуємо значення полів форми
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    let formValid = true;

    // Перевірка поля "Ваше ім'я"
    if (name.trim() === "") {
      document.querySelector('input[name="name"]').style.borderColor = "red";
      formValid = false;
    } else {
      document.querySelector('input[name="name"]').style.borderColor = "#444";
    }

    // Перевірка поля "Електронна пошта"
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      document.querySelector('input[name="email"]').style.borderColor = "red";
      formValid = false;
    } else {
      document.querySelector('input[name="email"]').style.borderColor = "#444";
    }

    // Перевірка поля "Повідомлення"
    if (message.trim() === "") {
      document.querySelector('textarea[name="message"]').style.borderColor =
        "red";
      formValid = false;
    } else {
      document.querySelector('textarea[name="message"]').style.borderColor =
        "#444";
    }

    // Якщо форма валідна, показуємо повідомлення
    if (formValid) {
      alert("Your message has been sent successfully!");
      // Можна також очистити поля після відправки:
      document.querySelector(".contact-form").reset();
    } else {
      alert("Please fill in all fields correctly.");
    }
  });
