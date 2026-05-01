# Smart Shopping Cart Optimizer (Greedy Algorithm)

## Project Overview
This project is a simple web-based application that helps users select the best items within a given budget using a Greedy Algorithm approach.

The system prioritizes items based on their Utility-to-Price ratio, ensuring maximum benefit for the user within limited resources.

## Objective
To demonstrate the working of the Greedy Algorithm in a real-life scenario:
Selecting items that maximize total utility under a fixed budget.

## Technologies Used
- HTML
- CSS
- JavaScript


## Algorithm Used
Greedy Algorithm (Utility/Price Ratio)

Steps:
1. Calculate ratio = Utility / Price
2. Sort items in descending order of ratio
3. Select items one by one while budget allows
4. Skip items if budget is insufficient

---

## Time Complexity
- Sorting: O(n log n)
- Selection: O(n)
- Overall: O(n log n)

---

## How to Run the Project

### Method 1 (Direct)
1. Download all files:
   - index.html
   - script.js
   - style.css
2. Place them in the same folder
3. Open index.html in any browser

---

### Method 2 (VS Code)
1. Open folder in VS Code
2. Install Live Server Extension
3. Right-click index.html
4. Click Open with Live Server

---

## Features
- User-defined budget input
- Displays available items with utility ratios
- Step-by-step greedy selection process
- Final cart summary:
  - Total spent
  - Total utility
  - Remaining budget

## Limitations
- Uses greedy approach (not always globally optimal)
- Does not support fractional item selection
- Fixed dataset (no dynamic input)

## Future Improvements
- Add dynamic item input
- Implement Dynamic Programming (Knapsack) for comparison
- Add charts/visualization
- Support fractional selection

## Learning Outcome
- Understanding of Greedy Algorithms
- Practical application of optimization problems
- Difference between greedy and optimal solutions

by
Harsh Vardhan
AP24110010192
