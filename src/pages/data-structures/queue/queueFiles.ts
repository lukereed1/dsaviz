import PythonLogo from "../../../assets/python.svg";
import JavaLogo from "../../../assets/java.svg";
import JavascriptLogo from "../../../assets/js.svg";
import CppLogo from "../../../assets/cpp.svg";

const javascriptCode = `// Queue operations using array
let queue = [];

// Enqueue to queue
queue.push(1);
queue.push(2);
queue.push(3);

// Dequeue from queue
let firstElement = queue.shift();

// Peek front element
let frontElement = queue[0];

// Check if queue is empty
let isEmpty = queue.length === 0;
`;

const pythonCode = `# Queue operations using deque
from collections import deque
queue = deque()

# Enqueue to queue
queue.append(1)
queue.append(2)
queue.append(3)

# Dequeue from queue
first_element = queue.popleft()

# Peek front element
front_element = queue[0]

# Check if queue is empty
is_empty = len(queue) == 0
`;

const javaCode = `// Queue operations using LinkedList
Queue<Integer> queue = new LinkedList<>();

// Enqueue to queue
queue.add(1);
queue.add(2);
queue.add(3);

// Dequeue from queue
int firstElement = queue.remove();

// Peek front element
int frontElement = queue.peek();

// Check if queue is empty
boolean isEmpty = queue.isEmpty();
`;

const cppCode = `// Queue operations using deque
std::deque<int> queue;

// Enqueue to queue
queue.push_back(1);
queue.push_back(2);
queue.push_back(3);

// Dequeue from queue
int firstElement = queue.front();
queue.pop_front();

// Peek front element
int frontElement = queue.front();

// Check if queue is empty
bool isEmpty = queue.empty();
`;

export const queueFiles = [
	{
		file: "queue.js",
		language: "javascript",
		code: javascriptCode,
		icon: JavascriptLogo,
	},
	{
		file: "queue.py",
		language: "python",
		code: pythonCode,
		icon: PythonLogo,
	},
	{
		file: "queue.java",
		language: "java",
		code: javaCode,
		icon: JavaLogo,
	},
	{
		file: "queue.cpp",
		language: "cpp",
		code: cppCode,
		icon: CppLogo,
	},
];
