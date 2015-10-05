#function for finding a value in the list or a tuple

ls = [10,20,30]
tp = (50,70,90)
dictn = {"car":"vehicle",
		"lion":"animal",
		"tiger" : "animal",
		"parrot": "bird",
		"peacock" : "bird"}


def printlist():
	print "List :",ls

def printtuple():
	print "Tuple : ",tp

def searchvalue(val):
	if val in ls:
		print "Value Found in List"
	elif val in tp:
		print "Value Found in Tuples"
	else:
		print "Value doesnt exist in List and Tuple"

def appendval(ds,val):
	if ds is "list":
		try:
			ls.append(val)
			print "After appending List Contents are :",ls
		except:
			print "Cannot be appended in list"
	elif ds is "tuple":
		try:
			tp.append(val)
			print "After appending List Contents are :",tp
		except:
			print "Cannot be appended in Tuples"

def printdict():
	print dictn

def search_in_dict(n):
	return dictn[n]


if __name__ == "__main__":
	printlist()
	printtuple()
	value = int(raw_input("Value for searching : "))
	searchvalue(value)
	mxl = max(ls)
	mnl = min(ls)
	print "List >> Maximum : %d and Minimum : %d"%(mxl,mnl)
	mxt = max(tp)
	mnt = min(tp)
	print "Tuple >> Maximum : %d and Minimum : %d"%(mxt,mnt)
	appendval("list",50)
	appendval("tuple",50)
	printdict()
	#mapping animal and bird and vehicle
	search = raw_input("Enter a living being : ")
	val = search_in_dict(search)
	print "Its a ",val
	