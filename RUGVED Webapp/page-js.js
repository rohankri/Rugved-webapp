
 <script>
  
  document.getElementById("btn").addEventListener("click",doStuff);
  
   function doStuff(){
  
  
       var userInfo = {};
  
       userInfo.slno = document.getElementById("sl").value;
       userInfo.date = document.getElementById("dt").value;
       userInfo.invoice = document.getElementById("in").value; 
       userInfo.vendor = document.getElementById("vn").value;
       userInfo.gst = document.getElementById("gst").value;
       userInfo.quantity = document.getElementById("qnt").value;
       userInfo.list = document.getElementById("loi").value;
       userInfo.hsn = document.getElementById("hsn").value;
       userInfo.particulars = document.getElementById("pamt").value;
       userInfo.net = document.getElementById("net").value;
       userInfo.tax = document.getElementById("tax").value;
       userInfo.total = document.getElementById("tot").value;
       userInfo.payee = document.getElementById("pay").value;
       
      
      google.script.run.userClicked(userInfo);
       document.getElementById("sl").value = "" ;
       document.getElementById("dt").value = "" ;
       document.getElementById("in").value = "" ;
       document.getElementById("vn").value = "" ;
       document.getElementById("gst").value = "" ;
       document.getElementById("qnt").value = "" ;
       document.getElementById("loi").value = "" ;
       document.getElementById("hsn").value = "" ;
       document.getElementById("pamt").value = "" ;
       document.getElementById("net").value = "" ;
       document.getElementById("tax").value = "" ;
       document.getElementById("tot").value = "" ;
       document.getElementById("pay").value = "" ;
       
  } 
  </script>
