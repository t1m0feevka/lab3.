// Shipping Cost Calculator
function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    const message = `Shipping to ${country} will cost ${totalPrice} credits`;

    alert(message);

    console.log(message);

    const shippingResult = document.getElementById("shippingResult");
    if (shippingResult) {
        shippingResult.textContent = message;
    }
}

document.getElementById("shippingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const country = document.getElementById("country").value.trim();
    const price = parseFloat(document.getElementById("price").value);
    const deliveryFee = parseFloat(document.getElementById("deliveryFee").value);

    if (price < 0 || deliveryFee < 0) {
        alert("Price and delivery fee must be non-negative values.");
        return;
    }

    const countryPattern = /^[a-zA-Z\s]+$/;
    if (!country || !countryPattern.test(country)) {
        alert("Please enter a valid country name (letters and spaces only).");
        return;
    }

    getShippingMessage(country, price, deliveryFee);
});

// Transaction Form
function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = quantity * pricePerDroid;

    if (totalPrice > customerCredits) {
        return "Insufficient funds!";
    } else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
}

document.getElementById("transactionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const quantity = parseInt(document.getElementById("quantity").value);
    const pricePerDroid = parseFloat(document.getElementById("pricePerDroid").value);
    const customerCredits = parseFloat(document.getElementById("customerCredits").value);

    if (quantity <= 0 || pricePerDroid <= 0 || customerCredits < 0) {
        alert("All values must be positive numbers, and credits cannot be negative.");
        return;
    }

    const transactionMessage = makeTransaction(quantity, pricePerDroid, customerCredits);

    alert(transactionMessage);

    console.log(transactionMessage);
});

// Make Array Example
function makeArray(firstArray, secondArray, maxLength) {
    const firstArr = firstArray.split(',').map(item => item.trim());
    const secondArr = secondArray.split(',').map(item => item.trim());

    const newArray = firstArr.concat(secondArr);

    if (newArray.length > maxLength) {
        return newArray.slice(0, maxLength);
    }

    return newArray;
}

document.getElementById("arrayForm1").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstArray = document.getElementById("firstArray").value.trim();
    const secondArray = document.getElementById("secondArray").value.trim();
    const maxLength = parseInt(document.getElementById("maxLength").value);

    if (firstArray === "" || secondArray === "" || isNaN(maxLength)) {
        alert("Please fill in all fields with valid data.");
        return;
    }

    const result = makeArray(firstArray, secondArray, maxLength);

    document.getElementById("arrayForm1Result").textContent = "Resulting Array: " + JSON.stringify(result);

    console.log("Generated Array:", result);
});

function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
}

// Функція для знаходження суми елементів з парними індексами
function sumEvenIndices(arr) {
    return arr.filter((_, index) => index % 2 === 0).reduce((sum, num) => sum + num, 0);
}

// Функція для знаходження максимального елемента серед непарних індексів та його індексу
function findMaxOddIndex(arr) {
    const oddIndexElements = arr.filter((_, index) => index % 2 !== 0);
    const maxOddIndexElement = Math.max(...oddIndexElements);
    const maxOddIndex = arr.indexOf(maxOddIndexElement);
    return { maxOddIndexElement, maxOddIndex };
}

// Функція для знаходження мінімального елемента серед непарних індексів та його індексу
function findMinOddIndex(arr) {
    const oddIndexElements = arr.filter((_, index) => index % 2 !== 0);
    const minOddIndexElement = Math.min(...oddIndexElements);
    const minOddIndex = arr.indexOf(minOddIndexElement);
    return { minOddIndexElement, minOddIndex };
}

// Обробка події для форми генерування випадкового масиву та виконання операцій
document.getElementById("arrayForm2").addEventListener("submit", function(event) {
    event.preventDefault();

    // Отримуємо розмір масиву
    const size = parseInt(document.getElementById("arraySize").value);

    // Перевірка на коректність введених даних
    if (isNaN(size) || size <= 0) {
        alert("Please enter a valid size for the array.");
        return;
    }

    // Створюємо масив випадкових чисел
    const arr = generateRandomArray(size);

    // Обчислюємо результати
    const sumEven = sumEvenIndices(arr);
    const { maxOddIndexElement, maxOddIndex } = findMaxOddIndex(arr);
    const { minOddIndexElement, minOddIndex } = findMinOddIndex(arr);

    // Виведення результатів
    const resultText = `
        Generated Array: ${JSON.stringify(arr)} <br>
        Sum of elements with even indices: ${sumEven} <br>
        Maximum element at odd index: ${maxOddIndexElement} (Index: ${maxOddIndex}) <br>
        Minimum element at odd index: ${minOddIndexElement} (Index: ${minOddIndex})
    `;

    document.getElementById("arrayForm2Result").innerHTML = resultText;
    console.log("Array Operations Result:", { arr, sumEven, maxOddIndexElement, maxOddIndex, minOddIndexElement, minOddIndex });
});


// Масив меню
const menuItems = [
    {
      name: "Home",
      url: "index.html",
      subMenu: []
    },
    {
      name: "About Us",
      url: "about.html",
      subMenu: [
        { name: "Team", url: "team.html" },
        { name: "History", url: "history.html" }
      ]
    },
    {
      name: "Services",
      url: "services.html",
      subMenu: [
        { name: "Web Development", url: "webdev.html" },
        { name: "Design", url: "design.html" },
        { name: "SEO", url: "seo.html" }
      ]
    },
    {
      name: "Contact",
      url: "contact.html",
      subMenu: []
    }
  ];
  
  function generateMenu(menuItems, containerId) {
    const menuContainer = document.getElementById(containerId);
    
    const mainMenu = document.createElement('ul');
    mainMenu.classList.add('menu');
  
    menuItems.forEach(item => {
      const menuItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = item.url;
      link.textContent = item.name;
      menuItem.appendChild(link);

      if (item.subMenu && item.subMenu.length > 0) {
        const subMenu = document.createElement('ul');
        item.subMenu.forEach(subItem => {
          const subMenuItem = document.createElement('li');
          const subLink = document.createElement('a');
          subLink.href = subItem.url;
          subLink.textContent = subItem.name;
          subMenuItem.appendChild(subLink);
          subMenu.appendChild(subMenuItem);
        });
        menuItem.appendChild(subMenu);
      }
      
      mainMenu.appendChild(menuItem);
    });
    
    menuContainer.appendChild(mainMenu);
  }
  generateMenu(menuItems, 'menu');
  