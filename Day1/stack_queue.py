from collections import deque
stack = []
queue = deque([])

def stackfunc():
	stack.append("a")
	stack.append("b")
	stack.append("c")
	print stack
	stack.pop()
	print stack

def queuefunc():
	queue.append("a")
	queue.append("b")
	queue.append("c")
	print queue
	queue.popleft()
	print queue


if __name__ == "__main__":
	stackfunc()
	queuefunc()