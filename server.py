from flask import Flask, jsonify, render_template, request
app = Flask(__name__)
from module import play,play2,print2
w, h = 3, 3

tic = [[0 for x in range(w)] for y in range(h)] 

for i in range(w):
	for j in range(h):
		tic[i][j]=" "


@app.route('/_add_numbers')
def add_numbers():
    i = request.args.get('i', 0, type=int)
    j = request.args.get('j', 0, type=int)
    full = request.args.get('full', 0, type=int)
    if(full==1):
        cclear(tic)
    """flag=1
    for m in xrange(3):
        for n in xrange(3):
            if(tic[m][n]!=" "):
                flag=0
            elif tic[m][n]==" ":
                 flag=1
                 break
    if flag==0:
        cclear(tic)"""
    #print flag," flag"
    play(tic,i,j)
    s=play2(tic)
    print2(tic)
    print (s[0],s[1])
    return jsonify(result=s)
@app.route('/receiver', methods=[ 'POST'])
def receiver():
    if(request.method == 'POST'):
		
		 data = request.get_json(force=True)
		 # a = request.args.get('a', 0, type=int)
		 #b = request.args.get('b', 0, type=int)
		 #jsonify(result=5)
		 #print json.dumps(5)
		 print( data)
		 
    return " as"

@app.route('/')
def index():
    return render_template('index.html')
def cclear(tic):
    for i in xrange(3):
        for j in xrange(3):
            tic[i][j]=" "

if __name__ == '__main__':
	# run!
	app.run()