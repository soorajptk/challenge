function shw() {
  let body = document.getElementById("login-body");
  body.style.display="flex";

}

function act(lab,spa){

  let label=document.getElementById(lab)
  label.style.cssText="top: -5px;color: rgb(68, 238, 68)"
  let span=document.getElementById(spa)
  span.style.cssText="background-color:rgb(58,245,58)"

}


function check(){
  let username=document.getElementById("username").value;
  if(username==""){
  let label=document.getElementById("user")
  label.style.cssText="top:50%;color: red"
  let span=document.getElementById("userspan")
  span.style.cssText="background-color:red"
  return false
    }
    let pattern=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  if(!pattern.test(username)){
    let label=document.getElementById("user")
  label.style.cssText="top:-5px;color: red"
  let span=document.getElementById("userspan")
  span.style.cssText="background-color:red"
    dis('please provide a valid email')
    return false
}
    return true
  }


function dis(msg) {
  var modal = document.getElementById("myModal");
     let para=document.getElementById("para");  
     para.innerHTML=msg
    modal.style.display = "block";
  }
  
  var span = document.getElementById("span1");
  
  span.onclick = function() {
  var modal = document.getElementById("myModal");
 
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
  var modal = document.getElementById("myModal");
    
     if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
 