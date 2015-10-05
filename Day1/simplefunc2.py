
def calc(choice,a,b):
	if choice is 1:
		print "Add : ",a+b
	elif choice is 2:
		print "Sub : ",a-b
	elif choice is 3:
		print "Mul : ",a*b
	elif choice is 4:
		a = float(a)
		print "Div : ",a/b

if __name__ == "__main__":
	a = int(raw_input("Enter first no :\t",))
	b = int(raw_input("Enter second no :\t",))
	ch = int(raw_input("1: Add\n2: Sub\n3: Mul\n4: Div\nYour Choice : "))
	calc(ch,a,b)