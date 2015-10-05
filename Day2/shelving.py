#!/usr/bin/python

import shelve
from sys import argv

script,file_name = argv

dc = {'key1':'val1','key2':'val2'}
ls = [1,2,3,5,4]
tp = (10,20,30)

def load_objs_to_shelve(fname):
	sv = shelve.open(fname) 
	sv['key1'] = dc
	sv['key2'] = ls
	sv['key3'] = tp
	sv.close()

def retrieve_objs_from_shelve(fname):
	sv = shelve.open(file_name) 
	print "my first value :",sv['key1'] 
	print "my second value :",sv['key2'] 
	print "my third value :",sv['key3'] 
	sv.close()

if __name__ == '__main__':
	load_objs_to_shelve(file_name)
	retrieve_objs_from_shelve(file_name)
