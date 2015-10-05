
def add(m,n):
	print m+n

def sub(m,n):
	print m-n

def mul(m,n):
	print m*n

def div(m,n):
	print m/n

if __name__ == "__main__":
	a = int(raw_input("Enter first no :",))
	b = int(raw_input("Enter second no :",))
	add(a,b)
	sub(a,b)
	mul(a,b)
	a = float(a)
	div(a,b)