def repeat(string):
    def amount(y):
        i = 0
        s = ''
        while i < y:
            s += string
            i += 1
        return s
    return amount
