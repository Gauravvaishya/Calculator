// function f1(m){
//       document.getElementById("disp").value+=m;
//     }
//     function equal(){
//       var a=document.getElementById("disp").value;
//       var b=eval(a);
//       document.getElementById("disp").value=b;

//     }
//     function off(){
//       document.getElementById("disp").value="";
//     }
//     function on(){
//       document.getElementById("disp").value="0";
      
//     }

// var a=0;






var res;
var temp=0;
var opt="+";
var c="";
var z="";


function f1(m){
  if ( z == res) {
    off(); 
  }
  c+=m;
  
  document.getElementById("disp").value+=m;
}


function f2(n){
    if(n == '='){
      switch(opt){
          case '+':
              res=parseFloat(parseFloat(temp)+parseFloat(c));
              break;
          case '-':
              res=parseFloat(parseFloat(temp)-parseFloat(c));
              break;
          case '*':
              res=parseFloat(parseFloat(temp)*parseFloat(c));
              break;
          case '/':
              res=parseFloat(parseFloat(temp)/parseFloat(c));
              break;   
          case '%':
              res=parseFloat(parseFloat(temp)%parseFloat(c));
              break;
          default:
              break;
      }
      z = res;
      document.getElementById("disp").value= z;
    } 
    else{
       switch(opt){
           case '+':
                res=parseFloat(parseFloat(temp)+parseFloat(c));
                break;
           case '-':
                res=parseFloat(parseFloat(temp)-parseFloat(c));
                break;
           case '*':
                res=parseFloat(parseFloat(temp)*parseFloat(c));
                break;
           case '/':
                res=parseFloat(parseFloat(temp)/parseFloat(c));
                break;   
           case '%':
                res=parseFloat(parseFloat(temp)%parseFloat(c));
                break;
           default:
                break;    
            }
        z = res + n;
        document.getElementById("disp").value=z;
     } 
    c="";
    temp=res;
    opt=n;
  }
   


function off(){
       document.getElementById("disp").value="";
        res="";
        temp=0;
        opt="+";
        c="";
        }


// function back(){
//   var a=document.getElementById("disp").value;
//   a= a.substr(0,a.length-1);
//   document.getElementById("disp").value=a;
// }





     