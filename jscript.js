var n=new Array();
n[0]="Henerry";
n[1]="jason";
n[2]="kevin";
n[3]="Jhon";
n[4]="Jenny";
n[5]="jonny";
n[6]="Britny";
n[7]="Steffen";
n[8]="jammy";
n[9]="Lora";

for(var i=0;i<n.length; i++){
	if(n[i].charAt(0)=="J"||n[i].charAt(0)=="j"){
		console.log("Goodbye"+" "+ n[i])

}
   else{
   	console.log("Hello"+" "+ n[i])
   }
}