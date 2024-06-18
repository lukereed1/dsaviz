import PythonLogo from "../../../assets/python.svg";
import JavaLogo from "../../../assets/java.svg";
import JavascriptLogo from "../../../assets/js.svg";
import CppLogo from "../../../assets/cpp.svg";

const javascriptCode = `class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add to end
  append(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Add to beginning
  prepend(value) {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  // Insert at index
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const newNode = new ListNode(value);
    let current = this.head;
    let currentIndex = 0;
    while (current && current.next && currentIndex < index - 1) {
      current = current.next;
      currentIndex++;
    }
    if (current) {
      newNode.next = current.next;
      current.next = newNode;
      if (!newNode.next) {
        this.tail = newNode;
      }
    }
  }

  // Delete at index
  deleteAt(index) {
    if (index === 0 && this.head) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return;
    }
    let current = this.head;
    let currentIndex = 0;
    while (current.next && currentIndex < index - 1) {
      current = current.next;
      currentIndex++;
    }
    if (current && current.next) {
      if (current.next === this.tail) {
        this.tail = current;
      }
      current.next = current.next.next;
    }
  }
}`;

const pythonCode = `class ListNode:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    # Add to end
    def append(self, value):
        new_node = ListNode(value)
        if not self.head:
            self.head = new_node
            self.tail = new_node
            return
        if self.tail:
            self.tail.next = new_node
            self.tail = new_node

    # Add to beginning
    def prepend(self, value):
        new_node = ListNode(value)
        new_node.next = self.head
        self.head = new_node
        if not self.tail:
            self.tail = new_node

    # Insert at index
    def insert_at(self, value, index):
        if index == 0:
            self.prepend(value)
            return
        new_node = ListNode(value)
        current = self.head
        current_index = 0
        while current and current.next and current_index < index - 1:
            current = current.next
            current_index += 1
        if current:
            new_node.next = current.next
            current.next = new_node
            if not new_node.next:
                self.tail = new_node

    # Delete at index
    def delete_at(self, index):
        if index == 0 and self.head:
            self.head = self.head.next
            if not self.head:
                self.tail = None
            return
        current = self.head
        current_index = 0
        while current and current.next and current_index < index - 1:
            current = current.next
            current_index += 1
        if current and current.next:
            if current.next == self.tail:
                self.tail = current
            current.next = current.next.next
`;

const javaCode = `// LinkedList operations
class Node {
    int value;
    Node next;

    Node(int value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    Node head;
    Node tail;

    LinkedList() {
        this.head = null;
        this.tail = null;
    }

    // Add to end
    void append(int value) {
        Node newNode = new Node(value);
        if (head == null) {
            head = newNode;
            tail = newNode;
            return;
        }
        tail.next = newNode;
        tail = newNode;
    }

    // Add to beginning
    void prepend(int value) {
        Node newNode = new Node(value);
        newNode.next = head;
        head = newNode;
        if (tail == null) {
            tail = newNode;
        }
    }

    // Insert at index
    void insertAt(int value, int index) {
        if (index == 0) {
            prepend(value);
            return;
        }
        Node newNode = new Node(value);
        Node current = head;
        int currentIndex = 0;
        while (current != null && current.next != null && currentIndex < index - 1) {
            current = current.next;
            currentIndex++;
        }
        if (current != null) {
            newNode.next = current.next;
            current.next = newNode;
            if (newNode.next == null) {
                tail = newNode;
            }
        }
    }

    // Delete at index
    void deleteAt(int index) {
        if (index == 0 && head != null) {
            head = head.next;
            if (head == null) {
                tail = null;
            }
            return;
        }
        Node current = head;
        int currentIndex = 0;
        while (current != null && current.next != null && currentIndex < index - 1) {
            current = current.next;
            currentIndex++;
        }
        if (current != null && current.next != null) {
            if (current.next == tail) {
                tail = current;
            }
            current.next = current.next.next;
        }
    }
}`;

const cppCode = `// LinkedList operations
#include <iostream>

struct ListNode {
    int value;
    Node* next;
    Node(int val) : value(val), next(nullptr) {}
};

class LinkedList {
public:
    LinkedList() : head(nullptr), tail(nullptr) {}

    // Add to end
    void append(int value) {
        Node* newNode = new Node(value);
        if (!head) {
            head = newNode;
            tail = newNode;
            return;
        }
        tail->next = newNode;
        tail = newNode;
    }

    // Add to beginning
    void prepend(int value) {
        Node* newNode = new Node(value);
        newNode->next = head;
        head = newNode;
        if (!tail) {
            tail = newNode;
        }
    }

    // Insert at index
    void insertAt(int value, int index) {
        if (index == 0) {
            prepend(value);
            return;
        }
        Node* newNode = new Node(value);
        Node* current = head;
        int currentIndex = 0;
        while (current && current->next && currentIndex < index - 1) {
            current = current->next;
            currentIndex++;
        }
        if (current) {
            newNode->next = current->next;
            current->next = newNode;
            if (!newNode->next) {
                tail = newNode;
            }
        }
    }

    // Delete at index
    void deleteAt(int index) {
        if (index == 0 && head) {
            Node* temp = head;
            head = head->next;
            delete temp;
            if (!head) {
                tail = nullptr;
            }
            return;
        }
        Node* current = head;
        int currentIndex = 0;
        while (current && current->next && currentIndex < index - 1) {
            current = current->next;
            currentIndex++;
        }
        if (current && current->next) {
            Node* temp = current->next;
            if (current->next == tail) {
                tail = current;
            }
            current->next = current->next->next;
            delete temp;
        }
    }

private:
    Node* head;
    Node* tail;
};`;

export const linkedListFiles = [
	{
		file: "llist.js",
		language: "javascript",
		code: javascriptCode,
		icon: JavascriptLogo,
	},
	{
		file: "llist.py",
		language: "python",
		code: pythonCode,
		icon: PythonLogo,
	},
	{
		file: "llist.java",
		language: "java",
		code: javaCode,
		icon: JavaLogo,
	},
	{
		file: "llist.cpp",
		language: "cpp",
		code: cppCode,
		icon: CppLogo,
	},
];
