class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.root = null;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left == null || this.right == null) {
			if (this.left == null) {
				this.left = node;
			}
			else {
				this.right = node;
			}
		}
		node.parent = this;
	}

	removeChild(node) {
		if (this.left == node) {
			this.left = null;
			node.parent = null;
			return;
		}
		if (this.right == node) {
			this.right = null;
			node.parent = null;
			return;
		}
		if (this.right != node & this.left != node) {
			throw error;
		}

	}

	remove() {
		if (this.parent != null) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {

	}

}
module.exports = Node;
