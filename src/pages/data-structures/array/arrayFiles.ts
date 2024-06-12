const javascriptCode = `// Initialising array
let array = [1, 2, 3, 4, 5];

// Read from array
let firstElement = array[0];
let secondElement = array[1];

// Append to array
array.push(6);

// Insert at index
array.splice(3, 0, 'newElement');

// Remove from array by index
array.splice(2, 1);

// Remove last element
array.pop();

// Remove first element
array.shift();

// Find index of element
let index = array.indexOf(3);

// Check if element exists
let exists = array.includes(4);

// Sort array
array.sort((a, b) => a - b);

// Reverse array
array.reverse();

// Iterate through array
array.forEach((element, index) => {
  console.log('Element:', element,
              'at index:', index);
});

// Find element
let foundElement = array.find(element =>
  element === 3);

// Find index of element
let foundIndex = array.findIndex(element =>
  element === 3);

// Slice array (extract subarray)
let subArray = array.slice(1, 4);

// Concat arrays
let concatenatedArray = array.concat([6, 7, 8]);

// Join array elements into a string
let arrayString = array.join(', ');

// Split string into array
let string = '1,2,3,4,5';
let splitArray = string.split(',');

// Convert array to string
let arrayToString = array.toString();`;

const pythonCode = `# Initialising array
array = [1, 2, 3, 4, 5]

# Read from array
first_element = array[0]
second_element = array[1]

# Append to array
array.append(6)

# Insert at index
array.insert(3, 'new_element')

# Remove from array by index
array.pop(index)

# Remove last element
array.pop()

# Remove first element
array.pop(0)

# Find index of element
index = array.index(3)

# Check if element exists
exists = 4 in array

# Sort array
array.sort()

# Reverse array
array.reverse()

# Iterate through array
for i in range(len(array)):
    print(array[i])

# Slice array (extract subarray)
sub_array = array[1:4]

# Concat arrays
concatenated_array = array + [6, 7, 8]

# Join array elements into a string
array_string = ', '.join(map(str, array))

# Split string into array
string = '1,2,3,4,5';
split_array = '1,2,3,4,5'.split(',')

# Convert array to string
array_to_string = str(array)`;

const javaCode = `// Arrays in Java
int[] array = {1, 2, 3, 4, 5};

// Read from array
int firstElement = array[0];
int secondElement = array[1];

// Append to array (Java arrays are fixed size, so we use ArrayList)
ArrayList<Integer> arrayList = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
arrayList.add(6);

// Insert at index
arrayList.add(3, "newElement");

// Remove from array by index
arrayList.remove(2);

// Remove last element
arrayList.remove(arrayList.size() - 1);

// Remove first element
arrayList.remove(0);

// Find index of element
int index = arrayList.indexOf(3);

// Check if element exists
boolean exists = arrayList.contains(4);

// Sort array
Collections.sort(arrayList);

// Reverse array
Collections.reverse(arrayList);

// Iterate through array
for (int i = 0; i < arrayList.size(); i++) {
    System.out.println(arrayList.get(i));
}

// Slice array (extract subarray)
List<Integer> subArray = arrayList.subList(1, 4);

// Concat arrays
ArrayList<Integer> concatenatedArray = new ArrayList<>(arrayList);
concatenatedArray.addAll(Arrays.asList(6, 7, 8));

// Join array elements into a string
String arrayString = arrayList.stream()
                              .map(String::valueOf)
                              .collect(Collectors.joining(", "));

// Split string into array
String[] splitArray = "1,2,3,4,5".split(",");

// Convert array to string
String arrayToString = arrayList.toString();
`;

const cppCode = `// Arrays in C++
#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
#include <sstream>

using namespace std;

vector<int> array = {1, 2, 3, 4, 5};

// Read from array
int firstElement = array[0];
int secondElement = array[1];

// Append to array
array.push_back(6);

// Insert at index
array.insert(array.begin() + 3, 100);

// Remove from array by index
array.erase(array.begin() + 2);

// Remove last element
array.pop_back();

// Remove first element
array.erase(array.begin());

// Find index of element
auto it = find(array.begin(), array.end(), 3);
int index = (it != array.end()) ? distance(array.begin(), it) : -1;

// Check if element exists
bool exists = find(array.begin(), array.end(), 4) != array.end();

// Sort array
sort(array.begin(), array.end());

// Reverse array
reverse(array.begin(), array.end());

// Iterate through array
for(size_t i = 0; i < array.size(); ++i) {
    cout << array[i] << endl;
}

// Slice array (extract subarray)
vector<int> subArray(array.begin() + 1, array.begin() + 4);

// Concat arrays
vector<int> anotherArray = {6, 7, 8};
array.insert(array.end(), anotherArray.begin(), anotherArray.end());

// Join array elements into a string
ostringstream oss;
for (const auto& item : array) {
    oss << item << ", ";
}
string arrayString = oss.str();
arrayString = arrayString.substr(0, arrayString.length() - 2); // Remove the last ", "

// Split string into array
string str = "1,2,3,4,5";
vector<int> splitArray;
istringstream ss(str);
string token;
while (getline(ss, token, ',')) {
    splitArray.push_back(stoi(token));
}

// Convert array to string
ostringstream oss2;
copy(array.begin(), array.end(), ostream_iterator<int>(oss2, " "));
string arrayToString = oss2.str();
arrayToString = arrayToString.substr(0, arrayToString.length() - 1); // Remove the last space
`;

export const arrayFiles = [
	{ file: "code.js", language: "javascript", code: javascriptCode },
	{ file: "code.py", language: "python", code: pythonCode },
	{ file: "code.java", language: "java", code: javaCode },
	{ file: "code.cpp", language: "cpp", code: cppCode },
];
