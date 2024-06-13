import PythonLogo from "../../../assets/python.svg";
import JavaLogo from "../../../assets/java.svg";
import JavascriptLogo from "../../../assets/js.svg";
import CppLogo from "../../../assets/cpp.svg";

const javascriptCode = `/* This implementation only demonstrates how
keys are distributed into their respective
buckets using a hash function. It uses
separate chaining to handle collisions. Scroll
down for language hash map syntax. */

/************ CUSTOM HASH TABLE ************/

// Create hash table
const hashTable = 
    [[], [], [], [], [], [], [], [], [], []];

// Hash function
const hash = (key) => key % hashTable.length;

// Insert key
const key = 1;
const index = hash(key);
hashTable[index].push(key);

// Delete key
const index = hash(key);    
hashTable[index] = hashTable[index]
    .filter(item => item !== key);

// Search for key
const index = hash(key);
if (hashTable[index].includes(key))
    console.log("Key found");
else
    console.log("Key not found");
    
/************ BUILT IN HASH MAP ************/

// Create hash map
const map = new Map();

// Insert key-value
const key = 1;
const value = 10;
map.set(key, value);

// Access
if (map.has(key))
    console.log("Value: " + map.get(key));
else
    console.log("Key not found in map");

// Delete
map.delete(key);

// Search 
if (map.has(key))
    console.log("Key exists");
else
    console.log("Key not found in map");`;

const pythonCode = `############# CUSTOM HASH TABLE #############

# Create hash table
hash_table = [[] for _ in range(10)]

# Hash function
def hash(key):
    return key % len(hash_table)

# Insert key
key = 1
index = hash(key)
hash_table[index].append(key)

# Delete key
index = hash(key)
hash_table[index] =
    [i for i in hash_table[index] if i != key]

# Search for key
index = hash(key)
if key in hash_table[index]:
    print("Key found")
else:
    print("Key not found")

############# BUILT-IN HASH MAP #############

# Create hash map
hash_map = {}

# Insert key-value
key = 1
value = 10
hash_map[key] = value

# Access
if key in hash_map:
    print("Value:", hash_map[key])
else:
    print("Key not found in map")

# Delete
del hash_map[key]

# Search 
if key in hash_map:
    print("Key exists")
else:
    print("Key not found in map")`;

const javaCode = `/************ CUSTOM HASH TABLE ************/

// Create hash table
List<List<Integer>> hashTable = new ArrayList<>();

for (int i = 0; i < 10; i++) {
    hashTable.add(new ArrayList<>());
}

// Hash function
int hash(int key) {
    return key % hashTable.size();
}

// Insert key
int key = 1;
int index = hash(key);
hashTable.get(index).add(key);

// Delete key
int index = hash(key);
hashTable.get(index).remove((Integer) key);

// Search for key
int index = hash(key);
if (hashTable.get(index).contains(key)) {
    System.out.println("Key found");
} else {
    System.out.println("Key not found");
}

/************ BUILT-IN HASH MAP ************/

// Create hash map
Map<Integer, Integer> map = new HashMap<>();

// Insert key-value
int key = 1;
int value = 10;
map.put(key, value);

// Access
if (map.containsKey(key)) {
    System.out.println("Value: " + map.get(key));
} else {
    System.out.println("Key not found in map");
}

// Delete
map.remove(key);

// Search
if (map.containsKey(key)) {
    System.out.println("Key exists");
} else {
    System.out.println("Key not found in map");
}`;

const cppCode = `/************ CUSTOM HASH TABLE ************/

// Create hash table
vector<vector<int>> hashTable(10);

// Hash function
int hash(int key) {
    return key % hashTable.size();
}

// Insert key
int key = 1;
int index = hash(key);
hashTable[index].push_back(key);

// Delete key

int index = hash(key);
auto& bucket = hashTable[index];
bucket.erase(remove(bucket.begin(),
    bucket.end(), key), bucket.end());

// Search for key
int index = hash(key);
auto& b = hashTable[index];
if (find(b.begin(), b.end(), key) != b.end()) {
    cout << "Key found" << endl;
} else {
    cout << "Key not found" << endl;
}

/************ BUILT-IN HASH MAP ************/

// Create hash map
unordered_map<int, int> map;

// Insert key-value
int key = 1;
int value = 10;
map[key] = value;

// Access
if (map.find(key) != map.end()) {
    cout << "Value: " << map[key] << endl;
} else {
    cout << "Key not found in map" << endl;
}

// Delete
map.erase(key);

// Search
if (map.find(key) != map.end()) {
    cout << "Key exists" << endl;
} else {
    cout << "Key not found in map" << endl;
}`;

export const hashTableFiles = [
	{
		file: "hash.js",
		language: "javascript",
		code: javascriptCode,
		icon: JavascriptLogo,
	},
	{
		file: "hash.py",
		language: "python",
		code: pythonCode,
		icon: PythonLogo,
	},
	{
		file: "hash.java",
		language: "java",
		code: javaCode,
		icon: JavaLogo,
	},
	{
		file: "hash.cpp",
		language: "cpp",
		code: cppCode,
		icon: CppLogo,
	},
];
