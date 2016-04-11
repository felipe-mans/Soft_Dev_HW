import time

def print_function(f):
    def inside(*arg):
        print f.func_name + str(arg)
        return f(*arg)
    return inside

def function_time(f):
    def inside(*arg):
        tiempo = time.time()
        result = f(*arg)
        print "Execution time: " + str(time.time() - tiempo) + " seconds"
        return result
    return inside

@timeFunc
@printArgs
def hello(*arg):
    time.sleep(1)
    return "hello world"

# Mr. Brown's code

def randList(n, lower = -100, upper = 100):
    l = []
    for i in range(n):
        l.append(


@timer
@name_log
def qsort(L):
    if len(L) <= 1:
        return L
    pivot = random.choice(L)
    lh = [ x for x in L if x < pivot ]
    uh = [ x for x in L if x > pivot ]
    return qsort(lh) + ([pivot] * L.count(pivot)) +  qsort(uh)
