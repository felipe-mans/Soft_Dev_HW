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
