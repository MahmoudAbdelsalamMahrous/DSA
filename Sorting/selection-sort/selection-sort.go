package main

import "fmt"

func selectionSort(arr []int) {
    n := len(arr)

    for i := 0; i < n-1; i++ {
        minIdx := i

        for j := i + 1; j < n; j++ {
            if arr[j] < arr[minIdx] {
                minIdx = j
            }
        }

        arr[i], arr[minIdx] = arr[minIdx], arr[i]
    }
}

func main() {
    arr := []int{1, 85, 3, 6, 7, 9, 64, 7}

    selectionSort(arr)

    fmt.Println(arr)
}