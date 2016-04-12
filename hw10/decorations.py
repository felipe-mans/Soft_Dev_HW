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

@function_time
@print_function
def hello(*arg):
    time.sleep(1)
    return "hello world"


@function_time
@print_function
def qsort(L):
    if len(L) <= 1:
        return L
    pivot = random.choice(L)
    lh = [ x for x in L if x < pivot ]
    uh = [ x for x in L if x > pivot ]
    return qsort(lh) + ([pivot] * L.count(pivot)) +  qsort(uh)
