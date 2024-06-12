import PythonLogo from "../../../assets/python.svg";
import JavaLogo from "../../../assets/java.svg";
import JavascriptLogo from "../../../assets/js.svg";
import CppLogo from "../../../assets/cpp.svg";

const javascriptCode = `// Initialising array
let array = [1, 2, 3, 4, 5];

// Read from array
let firstElement = array[0];
let secondElement = array[1];

// Append to array
array.push(6);

// Insert at index
let newElement = 9;
let index = 3;
array.splice(index, 0, newElement);

// Remove from array by index
let indexToRemove = 1;
array.splice(indexToRemove, 1);

// Remove last element
array.pop();

// Remove first element
array.shift();

// Find index of element
let index = array.indexOf(3);

// Sort array
array.sort((a, b) => a - b);

// Reverse array
array.reverse();

// Iterate through array
array.forEach((element) => {
    console.log(element);
});
`;

const pythonCode = `# Initialising array
array = [1, 2, 3, 4, 5]

# Read from array
first_element = array[0]
second_element = array[1]

# Append to array
array.append(6)

# Insert at index
new_element = 9
index = 3
array.insert(index, new_element)

# Remove from array by index
index_to_remove = 1
array.pop(index_to_remove)

# Remove last element
array.pop()

# Remove first element
array.pop(0)

# Find index of element
index = array.index(3)

# Sort array
array.sort()

# Reverse array
array.reverse()

# Iterate through array
for i in range(len(array)):
    print(array[i])`;

const javaCode = `// Initialising array
ArrayList<Integer> array = new ArrayList<>();

// Append to array
array.add(6);

// Read from array
int firstElement = array.get(0);
int secondElement = array.get(1);

// Insert at index
int newElement = 9;
int index = 3;
array.add(index, newElement);

// Remove from array by index
array.remove(2);

// Remove last element
array.remove(array.size() - 1);

// Remove first element
array.remove(0);

// Find index of element
int index = -1;
int elementToFind = 3;
for (int i = 0; i < array.size(); i++) {
    if (array.get(i) == elementToFind) {
        index = i;
        break;
    }
}

// Sort array
Collections.sort(array);

// Reverse array
Collections.reverse(array);

// Iterate through array
for (int i = 0; i < array.size(); i++) {
    System.out.println(array.get(i));
}`;

const cppCode = `// Initialising array
vector<int> array = {1, 2, 3, 4, 5};

// Read from array
int firstElement = array[0];
int secondElement = array[1];

// Append to array
array.push_back(6);

// Insert at index
int valueToInsert = 100;
int index = 3;
array.insert(array.begin()+index, valueToInsert);

// Remove from array by index
array.erase(array.begin() + 2);

// Remove last element
array.pop_back();

// Remove first element
array.erase(array.begin());

// Find index of element
int index = -1;
for (int i = 0; i < array.size(); i++) {
    if (array.get(i) == 3) {
        index = i;
        break;
    }
}

// Sort array
sort(array.begin(), array.end());

// Reverse array
reverse(array.begin(), array.end());

// Iterate through array
for (size_t i = 0; i < array.size(); ++i) {
    cout << array[i] << endl;
}`;

export const arrayFiles = [
	{
		file: "array.js",
		language: "javascript",
		code: javascriptCode,
		icon: JavascriptLogo,
	},
	{
		file: "array.py",
		language: "python",
		code: pythonCode,
		icon: PythonLogo,
	},
	{
		file: "array.java",
		language: "java",
		code: javaCode,
		icon: JavaLogo,
	},
	{
		file: "array.cpp",
		language: "cpp",
		code: cppCode,
		icon: CppLogo,
	},
];
