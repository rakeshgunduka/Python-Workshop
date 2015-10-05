
class myfunc(object):
	def fact(self,n):
		fact = 1
		for i in range(n,1,-1):
			fact = fact*i
		print fact	

	def factorial(self,n):
		if n <= 1:
			return 1
		else:
			return n*self.factorial(n-1)

	def fib(self,n):
		if n <= 1:
			return 1
		else:
			return self.fib(n-1) + self.fib(n-2)	

	


if __name__ == "__main__":
	m = myfunc()
	n = int(raw_input("Enter the number : "))
	m.fact(n)
	val  = m.factorial(n)
	print val
	
	for i in range(1,n):
		print m.fib(i),
	