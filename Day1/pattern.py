def pattern1(n):
	for i in range(n):
		for j in range(i):
			print "*",
		print

def pattern2(n):	
	for i in range(n):
		for j in range(i):
			print chr(97+j),
		print

def pattern3(n):
	for i in range(n):
		for j in range(n-i,1,-1):
			print " ",
		for j in range(i):
			print "*",
		for j in range(i-1):
			print "*",	
		print
	for i in range(n-2):
		for j in range(i+1):
			print " ",
		for j in range(n-2,i,-1):
			print "*",
		for j in range(n-3,i,-1):
			print "*",
		print

if __name__ == "__main__":
	n = int(raw_input("Enter a number : "))
	pattern1(n)
	pattern2(n)
	pattern3(n)
	

