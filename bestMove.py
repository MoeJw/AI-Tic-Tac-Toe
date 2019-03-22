from check import check
from check import print2


global countt
countt=0
global d
d=0

def minimax(borad,depth,WhoPlay):
    global d
    

    c=check(borad)
    if(c==10 or c==-10):
        if(c==10):
            #print depth
            d=d+1
            return 10-depth
        if c==-10:
            d=d+1
            return -10+depth
        
    else:
        if c==2:
            
            return 0

        if WhoPlay=="AI":
            best=-1000
            for i in range(3):
                for j in range(3):
                    if borad[i][j]==" ":
                        borad[i][j]="X"
                        #print i," "," ",j
                        best=max(minimax(borad,depth+1,"HUM"),best)
                        #list.append(minimax(borad,depth+1,"HUn"))
                        #print best,"depth ",depth+1
                        borad[i][j]=" "


            
            return best
        else:
            best=10000
            for i in range(3):
                for j in range(3):
                    if borad[i][j]==" ":
                        borad[i][j]="O"
                        best=min(minimax(borad,depth+1,"AI"),best)
                        ##list.append(minimax(borad,depth+1,"AI"))
                        borad[i][j]=" "
           
            return best

###############################################

def bestMove(tic):
    global countt
    countt=0
    global d
    best=-100000
    best_i=0
    best_j=0
    c=0
    for i in range(3):
        for j in range(3):
            if(tic[i][j]==" "):
                tic[i][j]="X"
                
                c=minimax(tic,0,"HUm")
                #print i," ",j," C ",c," D",d
                countt=d
                d=0
                tic[i][j]=" "
                if(best<=c):
                    best=c
                   ## print i," ",j," C ",c," D",mi
                    best_i=i
                    best_j=j
                


    tic[best_i][best_j]="X"               
    return best_i,best_j





 

