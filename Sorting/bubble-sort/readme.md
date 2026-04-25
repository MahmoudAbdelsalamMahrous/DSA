.

🫧 Bubble Sort
<p align="center"> <b>Simple comparison-based sorting algorithm</b><br/> Repeated swapping until array becomes sorted </p> <p align="center"> <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif" width="420"/> </p>
🧠 Concept

Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order.

After each full pass:

The largest element “bubbles up” to the end of the array.
⚙️ How It Works
Compare adjacent elements
Swap if left > right
Move one step forward
Repeat for entire array
After each pass, ignore last sorted element
⏱ Complexity Analysis
Best Case    → O(n)      (already sorted + optimized version)
Average Case → O(n²)
Worst Case   → O(n²)
Space        → O(1)
``` id="bubble-complexity"

---

## 📊 Growth Behavior

<p align="center">
  <img src="https://quickchart.io/chart?c={type:'line',data:{labels:['1','2','3','4','5','6','7','8','9','10'],datasets:[{label:'O(n²) Growth',data:[1,4,9,16,25,36,49,64,81,100]}]}}"/>
</p>

---

## 📌 Key Insight

Bubble Sort is inefficient because:
- It performs many unnecessary comparisons
- It has repeated passes even when nearly sorted

But it is useful for:
- Understanding sorting fundamentals
- Teaching comparison-based logic

---

## 🧠 Optimization Trick

If no swaps happen in a full pass → array is sorted → stop early.

---

## 📈 Visualization Idea


Pass 1 → largest element moves to end
Pass 2 → second largest settles
Pass 3 → array becomes more stable
...


---

## ❌ When NOT to Use

- Large datasets
- Performance-critical systems
- Production environments

---

## 📌 Summary

Bubble Sort is:
- Simple 🫧
- Intuitive 🧠
- Slow at scale 🐢
- Great for learning DSA fundamentals 📚

---

## ⭐ Big Picture

Bubble Sort teaches the core idea of:
> “Repeated local correction leads to global order”