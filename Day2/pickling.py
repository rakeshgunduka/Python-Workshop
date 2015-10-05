#!/usr/bin/python

import pickle
from sys import argv

script,file_name = argv

dc = {'key1':'val1','key2':'val2'}
ls = [1,2,3,5,4]
tp = (10,20,30)


'''
def dump_into_pickle_file(fname):
	f = open(fname,'wb')
	pickle.dump(dc,f)
	f.close()

def load_from_pickle_file(fname):
	f = open(file_name,'rb')
	dc = pickle.load(f)
	f.close()
	return dc
'''
'''
def dump_another_way(fname):
	with open(fname,'wb') as fh:
		pickle.dump(dc,fh)
		pickle.dump(ls,fh)
		pickle.dump(tp,fh)

def load_another_way(fname):
	with open(fname,'r') as fh:
		gotval1 = pickle.load(fh)
		gotval2 = pickle.load(fh)
		gotval3 = pickle.load(fh)
	print gotval1
	print gotval2
	print gotval3
'''

'''
def dump_using_pickler(fname):
	fh = open(fname, 'w') 
	pickler = pickle.Pickler(fh)
	pickler.dump(dc)
	pickler.dump(ls)
	pickler.dump(tp)
	fh.close()

def load_using_pickler(fname):
	fh = open(fname, 'r') 
	unpickler = pickle.Unpickler(fh)
	gotval1 = unpickler.load()
	gotval2 = unpickler.load()
	gotval3 = unpickler.load()
	fh.close()
	print gotval1
	print gotval2
	print gotval3
'''	
if __name__ == "__main__":
	'''
	dump_into_pickle_file(file_name)
	tmpdc = load_from_pickle_file(file_name)
	print "Printing from pickle file : ",tmpdc
	'''
	'''
	dictn = {'a':1,'b':2,'c':3}
	dump_using_pickler(file_name)
	load_using_pickler(file_name)
	'''
	dump_another_way(file_name)
	load_another_way(file_name)

