
class Parent:
	parentAttr = 100
	def __init__(self):
		print "Calling parent construction"

	def parentMethod(self):
		print "Calling parent Method"

	def setAttr(self,attr):
		Parent.parentAttr = attr

	def getAttr(self):
		print "Parent attribute : ",Parent.parentAttr


class Child(Parent):
	def __init__(self):
		print "Calling child constructor"

	def childMethod(self):
		print "Calling child method"

if __name__ == "__main__":
	c = Child()
	c.parentMethod()
	c.setAttr(200)
	c.getAttr()