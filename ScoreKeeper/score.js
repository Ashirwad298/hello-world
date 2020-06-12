var1=0;
var2=0;
var n=5;
function dom(){
var m=document.getElementById("number").value;
n=m;
var k1=document.getElementById('p1');
k1.classList.remove("some-class");

var k2=document.getElementById('p2');
k2.classList.remove("some-class");
document.getElementById("nset").innerHTML=n;
console.log(n);
}
function playerOne(){
	if(var1<n&& var2<n){
	var1+=1;
	var t=document.getElementById('p1').innerHTML=var1;
	}
	if(var1==n)
		var k=document.getElementById('p1');
		k.classList.add("some-class");

}
function playerTwo(){
	if(var2<n && var1<n){
	var2+=1;
	var t=document.getElementById('p2').innerHTML=var2;
	}
	if(var2==n)
		var k=document.getElementById('p2');
		k.classList.add("some-class");
}
function reset(){
	var1=0;
	var2=0;
	var t1=document.getElementById('p1').innerHTML=var1; //reset values of player 1
	var k1=document.getElementById('p1');
	k1.classList.remove("some-class");

	var t2=document.getElementById('p2').innerHTML=var2; // reset values of player 2
	var k2=document.getElementById('p2');
	k2.classList.remove("some-class");

}





alert("hi");