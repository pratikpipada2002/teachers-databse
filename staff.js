function createTable()
{
rn = window.prompt("Input number of rows", 1);
cn = 4;

 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)
    {
     var y=  x.insertCell(c);
     y.innerHTML="s";
    }
   }
}
