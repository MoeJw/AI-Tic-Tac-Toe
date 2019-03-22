def check(b):
    #print countt
    # Checking for Rows for X or O victory.
    for row in range(3):
        if (b[row][0]==b[row][1]) &(b[row][1]==b[row][2]):
            if (b[row][0]=="X"):
                return +10;
            elif (b[row][0]=="O"):
                return -10;
       
 
    # Checking for Columns for X or O victory.
    for col in range(3):
        if (b[0][col]==b[1][col]) &(b[1][col]==b[2][col]):
            if (b[0][col]=="X"):
                return +10;
 
            elif (b[0][col]=="O"):
                return -10;
 
    #Checking for Diagonals for X or O victory.
    if (b[0][0]==b[1][1])&(b[1][1]==b[2][2]):
        if (b[0][0]=="X"):
            return +10;
        elif (b[0][0]=="O"):
            return -10;
 
    if (b[0][2]==b[1][1])&(b[1][1]==b[2][0]):
        if (b[0][2]=="X"):
            return +10;
        elif (b[0][2]=="O"):
            return -10;

    for i in range(3):
        for j in range(3):
            if b[i][j]==" ":
                return 0
    # Else if none of them have won then return 0
    return 2;


def print2(m):
    i=0
    print ("   ",0,"  ",1,"  ",2)
    for x in m:
        print (i,x)
        i+=1    

    print ("\n")
