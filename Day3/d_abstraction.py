class data_abstraction:
	def __init__(self,a,b,c):
		self.fv,self.sv,self.tv = a,b,c

	def print_values(self):
		print self.fv
		print self.sv
		print self.tv

da = data_abstraction(10,20,30)
da.print_values()