
'''
If you pass a mutable object into a method, 
the method gets a reference to that same object 
and you can mutate it to your heart's delight, 
but if you rebind the reference in the method,
the outer scope will know nothing about it,
and after you're done, the outer reference will 
still point at the original object. 

If you pass an immutable object to a method,
you still can't rebind the outer reference,
and you can't even mutate the object.

'''
#List - a mutable type 
outer_list = ['one', 'two', 'three']

#Tuple - a immutable type
outer_tuple = ('larry', 'page', 'google')

#Dictionary - a mutable mapping type
dictn = {"car":"vehicle",
		"lion":"animal",
		"tiger" : "animal",
		"parrot": "bird",
		"peacock" : "bird"}
 
def try_to_change_list_contents(the_list):
	print 'got list', the_list
	the_list.append('four')
	print 'changed to',the_list

def try_to_change_list_reference(the_list):
    print 'got', the_list
    the_list = ['ten','twenty','thirty']
    print 'set to', the_list

def try_to_change_tuple_contents(the_tuple):
	print 'got tuple', the_tuple
	try:
		the_tuple.append('four')
		print 'changed to', the_tuple
	except Exception as e:
		print e

def replace_value_in_dict_at_key(k,val):
	for key in dictn.keys():
		if key == k:
			dictn[key] = val
	
if __name__ == '__main__':
	print "List changing contents"
	print 'before, outer_list =', outer_list
	try_to_change_list_contents(outer_list)
	print 'after, outer_list =', outer_list
	print

	print "\nList changing reference"
	print 'before, outer_list =', outer_list
	try_to_change_list_reference(outer_list)
	print 'after, outer_list =', outer_list
	print

	print "\nTuple changing Contents"
	print 'before, outer_tuple =', outer_tuple
	try_to_change_tuple_contents(outer_tuple)
	print 'after, outer_tuple =', outer_tuple
	print

	print "\nDictionary changing reference"
	print 'before, outer_dict =', dictn
	key = raw_input("Enter the key: ")
	value = raw_input("Enter the value to be replaced: ")
	replace_value_in_dict_at_key(key,value)
	print 'after, outer_dict =', dictn
	print
