def calc(choice,a,b):
	return {	1 : a+b,
			2 : a-b,
			3 : a*b,
			4 : a/b,
		}[choice]

if __name__ == "__main__":
	a = int(raw_input("Enter first no :\t",))
	b = int(raw_input("Enter second no :\t",))
	ch = int(raw_input("1: Add\n2: Sub\n3: Mul\n4: Div\nYour Choice : "))
	rval = calc(ch,a,b)
	print "Return value is : ",rval