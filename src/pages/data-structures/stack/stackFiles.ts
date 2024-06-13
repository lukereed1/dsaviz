import PythonLogo from "../../../assets/python.svg";
import JavaLogo from "../../../assets/java.svg";
import JavascriptLogo from "../../../assets/js.svg";
import CppLogo from "../../../assets/cpp.svg";

const javascriptCode = `// Stack operations using array
let stack = [];

// Push to stack
stack.push(1);
stack.push(2);
stack.push(3);

// Pop from stack
let lastElement = stack.pop();

// Peek top element
let topElement = stack[stack.length - 1];

// Check if stack is empty
let isEmpty = stack.length === 0;
`;

const pythonCode = `# Stack operations using list
stack = []

# Push to stack
stack.append(1)
stack.append(2)
stack.append(3)

# Pop from stack
last_element = stack.pop()

# Peek top element
top_element = stack[-1]

# Check if stack is empty
is_empty = len(stack) == 0
`;

const javaCode = `// Stack operations using Stack class
Stack<Integer> stack = new Stack<>();

// Push to stack
stack.push(1);
stack.push(2);
stack.push(3);

// Pop from stack
int lastElement = stack.pop();

// Peek top element
int topElement = stack.peek();

// Check if stack is empty
boolean isEmpty = stack.empty();
`;

const cppCode = `// Stack operations using vector
std::vector<int> stack;

// Push to stack
stack.push_back(1);
stack.push_back(2);
stack.push_back(3);

// Pop from stack
int lastElement = stack.back();
stack.pop_back();

// Peek top element
int topElement = stack.back();

// Check if stack is empty
bool isEmpty = stack.empty();
`;

export const stackFiles = [
	{
		file: "stack.js",
		language: "javascript",
		code: javascriptCode,
		icon: JavascriptLogo,
	},
	{
		file: "stack.py",
		language: "python",
		code: pythonCode,
		icon: PythonLogo,
	},
	{
		file: "stack.java",
		language: "java",
		code: javaCode,
		icon: JavaLogo,
	},
	{
		file: "stack.cpp",
		language: "cpp",
		code: cppCode,
		icon: CppLogo,
	},
];
