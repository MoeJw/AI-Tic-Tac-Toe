import os
from bestMove import bestMove
from check import check
os.system("cls")
w, h = 3, 3
#tic = [[0 for x in range(w)] for y in range(h)] 
"""for i in range(w):
	for j in range(h):
		tic[i][j]=" """


 
def print2(m):
	i=0
	print ("   ",0,"  ",1,"  ",2)
	for x in m:
		print(i,x)
		i+=1	

	print ("\n")


def play(tic,i,j):
	
	tic[i][j]="O"
def play2(tic):
	return bestMove(tic)


#######################




