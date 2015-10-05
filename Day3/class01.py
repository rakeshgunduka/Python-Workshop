from math import pi

class calc(object):
	def cal_circum_of_circle(self,rad):
		circum = 2*pi*rad
		print circum
	
	def cal_area_of_circle(self,rad):
		area = pi*rad*rad
		print area

	def cal_area_of_triangle(self,length,base):
		area = 0.5*length*base
		print area
		

if __name__ == "__main__":
	obj = calc()
	obj.cal_circum_of_circle(10)
	obj.cal_area_of_circle(10)
	obj.cal_area_of_triangle(10,20)
	