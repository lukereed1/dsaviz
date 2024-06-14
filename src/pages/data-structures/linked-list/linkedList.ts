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

	constructor() {
		this.head = null;
	}

	append(value: number) {
		const newNode = new ListNode(value);
		if (!this.head) {
			this.head = newNode;
			return;
		}
		let current = this.head;
		while (current.next) {
			current = current.next;
		}
		current = newNode;
	}

	prepend(value: number) {
		const newNode = new ListNode(value);
		newNode.next = this.head;
		this.head = newNode;
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
		}
	}

	deleteAt(index: number) {
		if (index === 0 && this.head) {
			this.head = this.head.next;
			return;
		}
		let current = this.head;
		let currentIndex = 0;
		while (current && currentIndex < index - 1) {
			current = current.next;
			currentIndex++;
		}
		if (current && current.next) {
			current = current.next.next;
		}
	}
}
