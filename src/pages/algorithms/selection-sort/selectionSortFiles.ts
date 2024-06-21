import PythonLogo from "../../../assets/python.svg";
import JavaLogo from "../../../assets/java.svg";
import JavascriptLogo from "../../../assets/js.svg";
import CppLogo from "../../../assets/cpp.svg";

const javascriptCode = `// Selection sort JavaScript implementation
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
}

let arr = [10, 7, 8, 9, 1, 5];
selectionSort(arr);
console.log("Sorted array:");
console.log(arr.join(" "));`;

const pythonCode = `# Selection sort Python implementation
def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        if min_index != i:
            temp = arr[min_index]
            arr[min_index] = arr[i]
            arr[i] = temp

if __name__ == '__main__':
    arr = [10, 7, 8, 9, 1, 5]
    selection_sort(arr)
    print('Sorted array:')
    for x in arr:
        print(x, end=" ")`;

const javaCode = `// Selection sort Java implementation
public class SelectionSort {
    static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex != i) {
                int temp = arr[minIndex];
                arr[minIndex] = arr[i];
                arr[i] = temp;
            }
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
        selectionSort(arr);
        System.out.println("Sorted array:");
        printArray(arr);
    }
}`;

const cppCode = `// Selection sort C++ implementation
#include <iostream>
using namespace std;

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
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
    selectionSort(arr, n);
    cout << "Sorted array:" << endl;
    printArray(arr, n);
    return 0;
}`;

export const selectionSortFiles = [
	{
		file: "selsort.js",
		language: "javascript",
		code: javascriptCode,
		icon: JavascriptLogo,
	},
	{
		file: "selsort.py",
		language: "python",
		code: pythonCode,
		icon: PythonLogo,
	},
	{
		file: "selsort.java",
		language: "java",
		code: javaCode,
		icon: JavaLogo,
	},
	{
		file: "selsort.cpp",
		language: "cpp",
		code: cppCode,
		icon: CppLogo,
	},
];
