export class ListNode {
	value: number;
	next: ListNode | null;

	constructor(value: number) {
		this.value = value;
		this.next = null;
	}
}

export class LinkedList {
	head: ListNode | null;
	tail: ListNode | null;

	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(value: number) {
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

	prepend(value: number) {
		const newNode = new ListNode(value);
		newNode.next = this.head;
		this.head = newNode;
		if (!this.tail) {
			this.tail = newNode;
		}
	}

	insertAt(value: number, index: number) {
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

	deleteAt(index: number) {
		if (index === 0 && this.head) {
			this.head = this.head.next;
			if (!this.head) {
				this.tail = null;
			}
			return;
		}
		let current = this.head;
		let currentIndex = 0;
		while (current && current.next && currentIndex < index - 1) {
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

	getLength() {
		let count = 0;
		let current = this.head;
		while (current) {
			count++;
			current = current.next;
		}
		return count;
	}

	toArray() {
		const nodes = [];
		let current = this.head;
		while (current) {
			nodes.push(current.value);
			current = current.next;
		}
		return nodes;
	}
}
