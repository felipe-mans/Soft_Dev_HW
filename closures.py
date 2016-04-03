def repeat(string):
    def amount(y):
        i = 0
        s = ''
        while i < y:
            s += string
            i += 1
        return s
    return amount

print repeat('hello')(3)
print repeat('ok')(5)

print "r1 = repeat('goodbye')"
r1 = repeat('goodbye')
print "printing r1(2)..."
print r1(2)
