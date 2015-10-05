
class myfunc(object):
	@staticmethod	
	def fact(n):
		fact = 1
		for i in range(n,1,-1):
			fact = fact*i
		return fact	

	def calculate_fact(self,n):
		val = self.fact(n)
		print "Got fact Value here: ",val
	


if __name__ == "__main__":
	m = myfunc()
	n = int(raw_input("Enter the number : "))
	m.calculate_fact(n)
	