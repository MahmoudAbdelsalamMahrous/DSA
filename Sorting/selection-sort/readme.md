# 🔽 Selection Sort

<p align="center">
  <b>Simple comparison-based sorting algorithm</b><br/>
  Builds sorted array one element at a time
</p>

---

## 🧠 Concept

Selection Sort is a basic sorting algorithm that works by repeatedly finding the **minimum element** from the unsorted portion and placing it at the correct position.

It divides the array into:
- ✔ Sorted part (left side)
- ❌ Unsorted part (right side)

---

## ⚙️ How It Works

1. Start from index 0
2. Assume current index is the minimum
3. Scan remaining elements
4. Find true minimum
5. Swap with current position
6. Move forward and repeat

---

## ⏱ Complexity Analysis

- Best Case: O(n²)
- Average Case: O(n²)
- Worst Case: O(n²)
- Space Complexity: O(1)

---

## 📌 Key Insight

Selection Sort minimizes **swaps**, not comparisons.

That makes it useful in scenarios where memory writes are expensive.

---

## 📊 Visualization (Step-by-Step)

Example array:


[64, 25, 12, 22, 11]


Steps:


Step 1 → [11, 25, 12, 22, 64]
Step 2 → [11, 12, 25, 22, 64]
Step 3 → [11, 12, 22, 25, 64]
Step 4 → [11, 12, 22, 25, 64]


---

## 📚 When to Use

- Small datasets
- Teaching sorting concepts
- When memory write operations are costly

---

## ❌ When NOT to Use

- Large datasets
- Performance-critical systems
- Real-world backend systems

---

## 🧠 Big Picture

Selection Sort is not used in production systems, but it is extremely important because it teaches:

- Brute-force thinking
- Optimization limits (O(n²))
- Sorting fundamentals

---

## ⭐ Summary

Selection Sort is:
- Simple
- Intuitive
- Inefficient at scale
- Important for learning DSA foundations