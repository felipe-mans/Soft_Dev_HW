import math

def union(s1, s2):
    a = [x for x in s1 if x in s1 and x not in s2]
    return a + s2

def intersection(s1, s2):
    return [x for x in s1 if x in s1 and x in s2]

def set_diff(s1, s2):
    return [x for x in s1 if x in s1 and x not in s2]

def symmetric_diff(s1, s2):
    return set_diff(s1,s2) + set_diff(s2,s1)

def cartesian_prod(s1, s2):
    result = []
    for x in s1:
        hold = [(x,a) for a in s2]
        result += hold
    return result

s1 = [1,2,3]
s2 = [2,3,4]

print "set A: " + str(s1)
print "set B: " + str(s2)
print "\nUnion of A and B: " + str(union(s1, s2))
print "\nIntersection of A and B: " + str(intersection(s1, s2))
print "\nSet Difference of A and B: " + str(set_diff(s1, s2))
print "\nSet Difference of B and A: " + str(set_diff(s2, s1))
print "\nSymmetric Difference of A and B: " + str(symmetric_diff(s1, s2))
print "\nCartesian Product of A and B: " + str(cartesian_prod(s1, s2))
