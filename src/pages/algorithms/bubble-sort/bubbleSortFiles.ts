import PythonLogo from "../../../assets/python.svg";
import JavaLogo from "../../../assets/java.svg";
import JavascriptLogo from "../../../assets/js.svg";
import CppLogo from "../../../assets/cpp.svg";

const javascriptCode = `// Bubble sort JavaScript implementation
function bubbleSort(arr) {
  let n = arr.length - 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

let arr = [10, 7, 8, 9, 1, 5];
bubbleSort(arr);
console.log("Sorted array:");
console.log(arr.join(" "));`;

const pythonCode = `# Bubble sort Python implementation
def bubble_sort(arr):
    n = len(arr) - 1
    for i in range(n):
        for j in range(0, n - i):
            if arr[j] > arr[j + 1]:
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

if __name__ == '__main__':
    arr = [10, 7, 8, 9, 1, 5]
    bubble_sort(arr)
    print('Sorted array:')
    for x in arr:
        print(x, end=" ")`;

const javaCode = `// Bubble sort Java implementation
public class BubbleSort {
    static void bubbleSort(int[] arr) {
        int n = arr.length - 1;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {10, 7, 8, 9, 1, 5};
        bubbleSort(arr);
        System.out.println("Sorted array:");
        printArray(arr);
    }
}`;

const cppCode = `// Bubble sort C++ implementation
#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    n = n - 1;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
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
    bubbleSort(arr, n);
    cout << "Sorted array:" << endl;
    printArray(arr, n);
    return 0;
}`;

export const bubbleSortFiles = [
	{
		file: "bblsort.js",
		language: "javascript",
		code: javascriptCode,
		icon: JavascriptLogo,
	},
	{
		file: "bblsort.py",
		language: "python",
		code: pythonCode,
		icon: PythonLogo,
	},
	{
		file: "bblsort.java",
		language: "java",
		code: javaCode,
		icon: JavaLogo,
	},
	{
		file: "bblsort.cpp",
		language: "cpp",
		code: cppCode,
		icon: CppLogo,
	},
];
