// Завдання 1: Деталі продукту
const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 200 },
];

function getProductDetails(productId, successCallback, errorCallback) {
    const product = products.find((p) => p.id === productId);
    product ? successCallback(product) : errorCallback(`Product with ID ${productId} not found.`);
}

const handleSuccess = (product) => {
    const output = document.getElementById("productOutput");
    output.innerHTML = `<p>Product Name: ${product.name}</p>
                        <p>Price: $${product.price}</p>`;
};

const handleError = (errorMessage) => {
    const output = document.getElementById("productOutput");
    output.innerHTML = `<p style="color: red;">${errorMessage}</p>`;
};

document.getElementById("getProductButton").addEventListener("click", () => {
    const productId = parseInt(prompt("Enter product ID:"));
    getProductDetails(productId, handleSuccess, handleError);
});

// Завдання 2: Концерти
const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

const currentDate = new Date();

const getUpcomingCities = () =>
    Object.entries(concerts)
        .filter(([, date]) => date > currentDate)
        .sort(([, dateA], [, dateB]) => dateA - dateB)
        .map(([city]) => city);

document.getElementById("showConcerts").addEventListener("click", () => {
    const cityList = document.getElementById("cityList");
    cityList.innerHTML = ""; 
    const upcomingCities = getUpcomingCities();

    upcomingCities.forEach((city) => {
        const listItem = document.createElement("li");
        listItem.textContent = city;
        cityList.appendChild(listItem);
    });
});

// Завдання 3: Знижки на медикаменти
const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

const applyDiscount = (items) =>
    items.map((item, index) => ({
        id: index + 1,
        name: item.name,
        price: item.price > 300 ? (item.price * 0.7).toFixed(2) : item.price,
    }));

document.getElementById("applyDiscountsButton").addEventListener("click", () => {
    const medicinesList = document.getElementById("medicinesList");
    medicinesList.innerHTML = "";
    const discountedMedicines = applyDiscount(medicines);

    discountedMedicines.forEach((medicine) => {
        const listItem = document.createElement("li");
        listItem.textContent = `ID: ${medicine.id}, Name: ${medicine.name}, Price: ${medicine.price} грн`;
        medicinesList.appendChild(listItem);
    });
});

// Завдання 4: Склад товарів
function Storage(initialItems) {
    this.items = initialItems;

    this.getItems = function () {
        return this.items;
    };

    this.addItem = function (item) {
        if (!this.items.includes(item)) {
            this.items.push(item);
        }
    };

    this.removeItem = function (item) {
        const itemIndex = this.items.indexOf(item);
        if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1);
        }
    };
}

const storage = new Storage(["apple", "banana", "mango"]);

document.getElementById("showItemsButton").addEventListener("click", () => {
    const storageList = document.getElementById("storageList");
    storageList.innerHTML = ""; 
    storage.getItems().forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        storageList.appendChild(listItem);
    });
});

document.getElementById("addItemButton").addEventListener("click", () => {
    const newItem = prompt("Enter the name of the item to add:");
    if (newItem) {
        storage.addItem(newItem);
        alert(`${newItem} added to storage.`);
    }
});

document.getElementById("removeItemButton").addEventListener("click", () => {
    const removeItem = prompt("Enter the name of the item to remove:");
    if (removeItem) {
        storage.removeItem(removeItem);
        alert(`${removeItem} removed from storage.`);
    }
});

// Завдання 5: Перевірка дужок

//function test() { return (a + b) * [c - d]; }

function checkBrackets(str) {
    const stack = [];
    const pairs = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    for (const char of str) {
        if (["(", "{", "["].includes(char)) {
            stack.push(char);
        } else if ([")", "}", "]"].includes(char)) {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

document.getElementById("checkBracketsButton").addEventListener("click", () => {
    const inputCode = prompt("Enter JavaScript code to check brackets:");
    const isValid = checkBrackets(inputCode);
    const output = document.getElementById("bracketsOutput");
    output.innerHTML = isValid
        ? "<p style='color: green;'>The code has valid brackets!</p>"
        : "<p style='color: red;'>The code has invalid brackets!</p>";
});