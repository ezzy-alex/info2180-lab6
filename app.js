window.onload= function(){
document.getElementById("submit").addEventListener("click",function(e){
    e.preventDefault();
        
let search= ("#ser").val();
let xml= new XMLHttpRequest();
let url= "superheroes.php";
xml.onreadystatechange= getname;
xml.open("GET",url+'?query='+search);
xml.send();

function getname(){
    if (xml.readyState=== XMLHttpRequest.DONE){
        if (xml.status===200){
            var response= xml.responseText;
            alert(search);
          // alert(response);
            document.getElementById('result').innerHTML= response;
            console.log(response);
        } else {
            alert ("there was a problem getting the names");
        }
    }
    
}

});





}