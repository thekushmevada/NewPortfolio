var firebaseConfig = {
    apiKey: "AIzaSyDSOvNqv_VcmdwjgJkoxGAJfs4NmYcreOY",
    authDomain: "product-details-1.firebaseapp.com",
    databaseURL: "https://product-details-1-default-rtdb.firebaseio.com",
    projectId: "product-details-1",
    storageBucket: "product-details-1.appspot.com",
    messagingSenderId: "1083750878949",
    appId: "1:1083750878949:web:a0bf81ba15a7dfa5fa4e0c",
    measurementId: "G-WDZPS9JXCD"
  };
  firebase.initializeApp(firebaseConfig);

  var dataSrc = [];
  var count =1;
  
  
  function loadData(callback){
    var databaseRef = firebase.database().ref("messages");
  
    //var table = $('#ex-table').DataTable();
  
    console.log("Loading data starts ...");
    databaseRef.on("child_added", function(data) {
       var storageObj = data.val();
      console.log("Loading data starts3 ...");
       var dataSet = [storageObj.sno, storageObj.name, storageObj.company, storageObj.email, storageObj.desc];
      
  
     //table.rows.add([dataSet]).draw(); 
      dataSrc.push(dataSet);
    
      console.log("dataSrc= "+dataSrc);
        
      console.log("Loading data..."+count);
        
      count++;
        
   //  $.holdReady( true );
  //$('#ex-table').DataTable().clear().destroy();
    //    
    
  console.log("Loading data ends ...");
      
       console.log("table initialization started ...");
          var dTable=$('#ex-table').DataTable({
            "bDestroy": true,    
            data: dataSrc,
  
         //   data: dataSrc,
            columns: [
                  { title: "SerialNo" },
                  { title: "ProductName" },
                  { title: "ProductCompany" },
                  { title: "Email" },
                  { title: "Description"}
              ],
            dom: 'lfrtipB', buttons: [ 
                      {
                            extend: 'copyHtml5',
                            title:  'Records'
                        },
                        {
                            extend: 'csvHtml5',
                            title:  'Records'
                        },
                        {
                            extend: 'excelHtml5',
                            title:  'Records'
                        },
                        {
                            extend: 'pdfHtml5',
                            title:  'Records'
                        },
                        {
                          extend: 'pdfHtml5',
                          title:  'Records'
                      },
                        'print'
                          ],
                   lengthMenu: [[5, 20, 50, -1], [5, 20, 50, "All"]]
  
  
            });
  
        console.log("table initialization ends ...");
      
   
  
    });
    
     if(callback){callback();}
  }
  
  
  function 	downloadObjectAsJson(exportObj, exportName){
    
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
      var downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href",     dataStr);
      downloadAnchorNode.setAttribute("download", exportName + ".json");
  //    document.body.appendChild(downloadAnchorNode); // required for firefox
    var container = document.getElementById('container');
    container.appendChild(downloadAnchorNode);
  //    downloadAnchorNode.click();
  //    downloadAnchorNode.remove();
    
  }
  
  document.addEventListener("DOMContentLoaded", function(event) {
    var NewFile = "records";
    loadData(downloadObjectAsJson(dataSrc, NewFile));
    
    
   // loadData(intializeDataTable);
     // var tableData = "["+dataSrc+"]";
  });  


  
  
  