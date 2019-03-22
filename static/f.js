tic=[[" "," "," "],[" "," "," "],[" "," "," "]];
	var cels=["cel1","cel2","cel3","cel4","cel5","cel6","cel7","cel8","cel9"];
	var all=[];
	var p=document.getElementById('sc');
  var state=1;
  var size=0
  //alert("as")
for(var i=0;i<9;i++){
  all.push(document.getElementById(cels[i]))  
  //console.log(cels[i])
}

if(state==1){
all[0].addEventListener("click", function (){     myFunction(0) });
all[1].addEventListener("click", function (){     myFunction(1) });
all[2].addEventListener("click", function (){     myFunction(2) });
all[3].addEventListener("click", function (){     myFunction(3) });
all[4].addEventListener("click", function (){     myFunction(4) });
all[5].addEventListener("click", function (){     myFunction(5) });
all[6].addEventListener("click", function (){     myFunction(6) });
all[7].addEventListener("click", function (){     myFunction(7) });
all[8].addEventListener("click", function (){     myFunction(8) });
}
function myFunction(x){
	if(state==1){
		c=check(tic)
		if(c=="it's tie"||c=="AI won"||c=="you won"){
			
			state=0;
			
			//alert(c);
		}else{
			//do nothing;
		
	
	var i1=Math.floor(x/3);
	var j1=x%3
	
    $.getJSON($SCRIPT_ROOT+'/_add_numbers', {
        i:i1 ,
		j:j1,
		full:size /// 0 mean not full
        
      }, function(data) {
		//alert("i1 "+i1+" j1 "+j1);
		if(size==1){
			size=0;
		}
		  change(data.result[0],data.result[1],"AI");
		  
		 // alert(data.result[0])
       // $("#result").text(data.result[0]);
	  });
	  change(Math.floor(x/3),Math.floor(x%3),"HUm");
	}
}// if ends

}
function change(i,j,whoPlaying){
	if(whoPlaying=="AI"&&state==1){
		document.getElementById(cels[(i*3)+j]).innerHTML="X";
		tic[i][j]="X";
		c=check(tic)
		if(c=="it's tie"||c=="AI won"||c=="you won"){
			
			state=0;
			
			//alert(c);
		}
		
	}else if(state==1){
		
		document.getElementById(cels[(i*3)+j]).innerHTML="O";
		tic[i][j]="O";
		c=check(tic)
		if(c=="it's tie"||c=="AI won"||c=="you won"){
			
			state=0;
			
			//alert(c);
		}
		
	}
}
function check(b){
   
   // Checking for Rows for X or O victory.
   for(var row=0;row<3;row++){
	   if ((b[row][0]==b[row][1]) &&(b[row][1]==b[row][2])){
		   if (b[row][0]=="X"){
			all[(row*3)+0].style.color="green";
			all[(row*3)+1].style.color="green";
			all[(row*3)+2].style.color="green";
			p.innerHTML="AI WON";
			p.style.display="block";
			p.style.color="green"
			   return "AI won";
		   }
		   else if (b[row][0]=="O"){
			   return "you won";
		   }
	  }

	}
   // Checking for Columns for X or O victory.
   for (var col=0;col<3;col++){
	   if ((b[0][col]==b[1][col]) &&(b[1][col]==b[2][col])){
		   if (b[0][col]=="X"){
			all[(0*3)+col].style.color="green";
			all[(1*3)+col].style.color="green";
			all[(2*3)+col].style.color="green";
			p.style.color="green"
			p.innerHTML="AI WON";
			p.style.display="block";
			   return "AI won";
		   }

		   else if (b[0][col]=="O"){
			   return "you won";
		   }
		  }
   }

   //Checking for Diagonals for X or O victory.
   if ((b[0][0]==b[1][1])&&(b[1][1]==b[2][2])){
	   if (b[0][0]=="X"){
		all[(0*3)+0].style.color="green";
		all[(1*3)+1].style.color="green";
		all[(2*3)+2].style.color="green";
		p.style.color="green"
		p.innerHTML="AI WON";
			p.style.display="block";
		   return "AI won";
	   }
	   else if (b[0][0]=="O"){
		   return "you won";
	   }
	}

   if ((b[0][2]==b[1][1])&&(b[1][1]==b[2][0])){
	   if (b[0][2]=="X"){
		all[(0*3)+2].style.color="green";
		all[(1*3)+1].style.color="green";
		all[(2*3)+0].style.color="green";
		p.style.color="green"
		p.innerHTML="AI WON";
			p.style.display="block";
		   return "AI won";
	   }
	   else if (b[0][2]=="O"){
		   return "you won"
		   }
	   }
   for (var i=0;i<3;i++){
	   for (var j=0;j<3;j++){
		   if (b[i][j]==" "){
			   return 0;
		   }
	   }
   }
   // Else if none of them have won then return 0
   for(i=0;i<9;i++){
	   all[i].style.color="red";
   }
   p.innerHTML="it's tie";
			p.style.display="block";
			p.style.color="red"
   return "it's tie";
}
function replay(){
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			tic[i][j]=" ";
		}
	}
	for(var i=0;i<9;i++){
		all[i].style.color="black";
		all[i].innerHTML=" ";
	}
	state=1;
	size=1;
			
			p.style.display="none";
}
