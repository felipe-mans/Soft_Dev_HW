UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

LC_LETTERS = "abcdefghijklmnopqrstuvwxyz"

SPECIAL_CHAR = ".?!&#,;:-_*"

NUMS = "1234567890"


def check_pass(password):
    uc = [ x for x in p if x in UC_LETTERS ]
    lc = [ x for x in p if x in LC_LETTERS ]
    char = [ x for x in p if x in SPECIAL_CHAR ]
    nums = [ x for x in p if x in NUMS ]

    if len(uc) > 0 and len(lc) > 0 and len(nums) > 0:
        print "Password meets requirements...good to go!\n"
        return 1
    
    else:
        if len(uc) == 0:
            print "Error: password requires use of an upper case letter\n"
        elif len(lc) == 0:
            print "Error: password requires use of a lower case letter\n"
        elif len(nums) == 0:
            print "Error: password requires use of at least one number\n"
        return 0

def strength_pass(password):
    if check_pass(password) == 1:
        uc = [ x for x in p if x in UC_LETTERS ]
        lc = [ x for x in p if x in LC_LETTERS ]
        char = [ x for x in p if x in SPECIAL_CHAR ]
        nums = [ x for x in p if x in NUMS ]
        print "Password meets requirements...checking strength now\n"
        length = len(password)
        strength = (len(uc)/2.1 * length) + (len(lc)/2.1 * length) + (len(nums)/2.1 * length) + (len(char) * length)
        strength = int(strength / 10)
        if strength < 5:
            print "Password strength: WEAK\n"
            print "Rating: " + str(strength)
        elif strength < 8:
            print "Password strength: GOOD\n"
            print "Rating: " + str(strength)
        else:
            if len(char) == 0:
                    strength = 8
            print "Password strength: STRONG\n"
            if strength > 10:
                strength = 10
            print "Rating: " + str(strength)
    
    else:
        print "Error: password does not meet requirements\n"
        check_pass(password)

#Mr Brown's code

def strength_check(p):
    l = [1 if x in UC_LETTERS else
         2 if x in LC_LETTERS else
         3 if x in NUMS else
         0 for x in p]
    return 1 in l and 2 in l and 3 in l

def strength_rate(p):
    l = [1 if x in UC_LETTERS else
         2 if x in LC_LETTERS else
         3 if x in NUMS else
         4 if x in SPECIAL_CHAR else
         0 for x in p]

    uc = len(p) - l.count(1)
    lc = len(p) - l.count(2)
    nums = len(p) - l.count(3)
    chars = len(p) - l.count(4)

    strength = (uc + lc + nums + chars)
    return strength

p = "mynoobpassaqwe"

print str(strength_rate(p))

#check_pass(p)

#strength_pass(p)
