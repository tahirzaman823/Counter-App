
// Real Value 
 let Change = 0;

// Value Change on CLick
document.getElementById("Start").onclick = function(){

        Change = Change +1

        document.getElementById("Count").innerHTML = Change

       
}
//Value Reset on CLick
document.getElementById("Reset").onclick =function(){
        Change = 0
        document.getElementById("Count").innerHTML = Change
}        

    

