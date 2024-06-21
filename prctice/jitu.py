a=int(input("enter 1st number:"))
b=int(input("enter 2nd number:"))
c=int(input("enter 3rd number:"))

if a>b:
    if a>c:
        print("a big")
    else:
        print("c big")
elif b>c:
    print("b big")
else:
    print("c big")