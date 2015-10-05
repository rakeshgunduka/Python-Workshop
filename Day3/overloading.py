class overload:
	def printstatement(self,a=0,b = 0):
		print "first value : %d Second value : %d"%(a,b)


c = overload()
c.printstatement()
c.printstatement(10) 
c.printstatement(10,20)