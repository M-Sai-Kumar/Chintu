function addition(){

    var n1=document.getElementById('id1').value 
    //Validate n1
    if(n1 == ""){
     // document.getElementById('span1').innerHTML='* n1 should not be empty'
     document.getElementById("div1").style.color = 'red'
     document.getElementById('div1').innerHTML='* n1 should not be empty'
        return false
    }
    
    var n2=document.getElementById('id2').value 
    //Validate n2
    if(n2 == ""){
       //document.getElementById('span2').innerHTML='* n2 should not be empty'
       document.getElementById('div1').innerHTML='* n2 should not be empty'
        return false
    }
    else{
        var result=eval(n1)+eval(n2) 
      //  alert(result)
      document.getElementById('div1').innerHTML='Result is:'+result
        return true
    }
}
function cleardata(){
    var result=confirm('Are you sure to delete ?')
    if(result == true) {
        return true
    } else{
        return false
    }
}