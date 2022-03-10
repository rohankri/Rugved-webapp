
function doGet(e){
  
  return HtmlService.createTemplateFromFile("page").evaluate();
}


function userClicked(userInfo) {
       var url = "https://docs.google.com/spreadsheets/d/1L3o3TgPaEqmp2t_tS0o26tpcNpOAnQHnOTAGs7WSF4g/edit#gid=0";
       var ss = SpreadsheetApp.openByUrl(url);
       var ws = ss.getSheetByName("data");
  
       ws.appendRow([userInfo.slno,userInfo.date,userInfo.invoice,userInfo.vendor,userInfo.gst,userInfo.quantity,
                     userInfo.list,userInfo.hsn,userInfo.particulars,userInfo.net,userInfo.tax,userInfo.total,userInfo.payee,new Date()]);
  
       
       
       
  //Logger.log(name +"clicked the button");
  
} 

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
  
}