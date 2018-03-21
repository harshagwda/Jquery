var total = 0;

    function test(item){
        if(item.checked){
           total+= parseInt(item.value);
        }else{
           total-= parseInt(item.value);
        }
        

    }
   
    $("#w").hide();
 $(document).ready(function(){
    		$("#s").click(function(){
    		$("#e").hide();
    		$("#W").show();  

    		document.getElementById('Totalcost').innerHTML = total + " /-";     