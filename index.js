// Знаходимо елементи за класом
const productsContainer = document.querySelector(".products");
const categoriesList = document.querySelector(".categories");
const productInfo = document.querySelector(".product-info");
const productName = document.querySelector(".product-name");
const buyButton = document.querySelector(".buy-button");

// Дані про товари
const listOfGoods = {
  Оздоблювальні: ["Гіпсокартонні системи", "Будівельна хімія", "Клейові суміші"],
  Загальнобудівельні: ["Сітка металева", "Цемент, пісок, щебінь", "Газоблок"],
  Покрівля: ["Бітумна черепиця", "Металочерепиця", "Водостічні системи"],
};

// Додаємо обробник подій клік до списку категорій
categoriesList.addEventListener("click", (event) => {
  const target = event.target;
  // Перевіряємо, чи клікнуто на елемент з класом "categories_link"
  if (target.matches(".categories_link")) {
    // Отримуємо текст категорії, яка була клікнута, та присвоюємо його змінній category
    const category = target.innerText;
    // Отримуємо список товарів для вибраної категорії
    const products = listOfGoods[category];
    // Генеруємо розмітку для кожного товару у вибраній категорії та виводимо її у контейнер .products
    productsContainer.innerHTML = products
      .map((product) => `<p>${product}</p>`)
      .join("");
  }
});

// ІНФОРМАЦІЯ ПРО ТОВАР

// Додаємо обробник подій клік до контейнера товарів
productsContainer.addEventListener("click", (event) => {
  const target = event.target;
  // Перевіряємо, чи клікнуто на елемент <p>
  if (target.matches("p")) {
    // Отримуємо текст обраного товару та виводимо його в елемент з назвою товару
    productName.textContent = target.textContent;
    // Відображаємо блок інформації про товар та кнопку "Купити"
    productInfo.style.display = "block";
    buyButton.style.display = "block";
  }
});

// Додаємо обробник подій клік до кнопки "Купити"
buyButton.addEventListener("click", () => {
  // Отримуємо назву обраного товару
  const product = productName.textContent;
  // Виводимо повідомлення про покупку обраного товару
  alert(`Товар "${product}" куплений.`);
  // Очищуємо контейнер товарів та ховаємо блок інформації про товар та кнопку "Купити"
  productsContainer.innerHTML = "";
  productInfo.style.display = "none";
  buyButton.style.display = "none";
});