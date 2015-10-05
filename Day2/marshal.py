#!/usr/bin/python

import marshal
from sys import argv
script,file_name = argv

ls = [1,2,3,4]
tp = (
		"this is a string",
		[1,2,3,4],
		("more tuple",10,2,5),
		"this is yet another string"
		)

def marshalizing_into(fname):
	fh = open(fname,'w')
	marshal.dump(tp,fh)
	marshal.dump(ls,fh)
	fh.close()

def demarshalizing_from(fname):
	fh = open(fname,'r')
	gotval1  = marshal.load(fh)
	gotval2  = marshal.load(fh)
	print "Tuple :",gotval1
	print "List : ",gotval2


if __name__ == '__main__':
	marshalizing_into(file_name)
	demarshalizing_from(file_name)