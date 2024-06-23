import PythonLogo from "../../../assets/python.svg";
import JavaLogo from "../../../assets/java.svg";
import JavascriptLogo from "../../../assets/js.svg";
import CppLogo from "../../../assets/cpp.svg";

const javascriptCode = `// Insertion sort JavaScript implementation
function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

let arr = [10, 7, 8, 9, 1, 5];
insertionSort(arr);
console.log("Sorted array:");
console.log(arr.join(" "));`;

const pythonCode = `# Insertion sort Python implementation
def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

if __name__ == '__main__':
    arr = [10, 7, 8, 9, 1, 5]
    insertion_sort(arr)
    print('Sorted array:')
    for x in arr:
        print(x, end=" ")`;

const javaCode = `// Insertion sort Java implementation
public class InsertionSort {
    static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {10, 7, 8, 9, 1, 5};
        insertionSort(arr);
        System.out.println("Sorted array:");
        printArray(arr);
    }
}`;

const cppCode = `// Insertion sort C++ implementation
#include <iostream>
using namespace std;

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
        cout << arr[i] << " ";
    cout << endl;
}

int main() {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    insertionSort(arr, n);
    cout << "Sorted array:" << endl;
    printArray(arr, n);
    return 0;
}`;

export const insertionSortFiles = [
	{
		file: "insort.js",
		language: "javascript",
		code: javascriptCode,
		icon: JavascriptLogo,
	},
	{
		file: "insort.py",
		language: "python",
		code: pythonCode,
		icon: PythonLogo,
	},
	{
		file: "insort.java",
		language: "java",
		code: javaCode,
		icon: JavaLogo,
	},
	{
		file: "insort.cpp",
		language: "cpp",
		code: cppCode,
		icon: CppLogo,
	},
];
