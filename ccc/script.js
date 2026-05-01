const items = [
  { name: "Rice (5kg)", price: 280, utility: 88 },
  { name: "Milk (1L)", price: 55, utility: 25 },
  { name: "Eggs (12)", price: 90, utility: 45 },
  { name: "Bread", price: 40, utility: 17 },
  { name: "Oil (1L)", price: 160, utility: 52 },
  { name: "Apples (1kg)", price: 120, utility: 38 },
  { name: "Toothpaste", price: 70, utility: 22 },
  { name: "Soap Pack", price: 60, utility: 20 }
];

const itemsBody = document.getElementById("itemsBody");
const stepsList = document.getElementById("steps");
const cartList = document.getElementById("cart");
const spentSpan = document.getElementById("spent");
const utilitySpan = document.getElementById("utility");
const remainingSpan = document.getElementById("remaining");
const budgetInput = document.getElementById("budget");
const optimizeBtn = document.getElementById("optimizeBtn");

function withRatios(data) {
  return data.map((item) => ({
    ...item,
    ratio: item.utility / item.price
  }));
}

function renderItemsTable() {
  const rows = withRatios(items)
    .sort((a, b) => b.ratio - a.ratio)
    .map(
      (item) => `
      <tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.utility}</td>
        <td>${item.ratio.toFixed(3)}</td>
      </tr>
    `
    )
    .join("");

  itemsBody.innerHTML = rows;
}

function optimizeCart() {
  const budget = Number(budgetInput.value);
  if (!Number.isFinite(budget) || budget <= 0) {
    alert("Please enter a valid budget.");
    return;
  }

  const sorted = withRatios(items).sort((a, b) => b.ratio - a.ratio);
  let remainingBudget = budget;
  let totalSpent = 0;
  let totalUtility = 0;
  const selected = [];
  const steps = [];

  for (const item of sorted) {
    if (item.price <= remainingBudget) {
      selected.push(item);
      remainingBudget -= item.price;
      totalSpent += item.price;
      totalUtility += item.utility;
      steps.push(`Picked ${item.name} (price ${item.price}, ratio ${item.ratio.toFixed(3)})`);
    } else {
      steps.push(`Skipped ${item.name} (needs ${item.price}, remaining ${remainingBudget})`);
    }
  }

  stepsList.innerHTML = steps.map((step) => `<li>${step}</li>`).join("");
  cartList.innerHTML = selected.length
    ? selected.map((item) => `<li>${item.name} - Price: ${item.price}, Utility: ${item.utility}</li>`).join("")
    : "<li>No items selected.</li>";
    
 spentSpan.textContent = String(totalSpent);
  utilitySpan.textContent = String(totalUtility);
  remainingSpan.textContent = String(remainingBudget);
}

optimizeBtn.addEventListener("click", optimizeCart);
renderItemsTable();
optimizeCart();
