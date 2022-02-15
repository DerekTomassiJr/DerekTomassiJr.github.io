function uploadFile(event){
    var xhttp = new XMLHttpRequest();
    // load and error are events
    xhttp.addEventListener("load", transferComplete);
    xhttp.addEventListener("error", transferFailed);

    xhttp.open("POST", "http://localhost:3000/upload");
    // reference: https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
    // Retrieving a FormData object from an HTML form.
    // FormData is a javascript object
    xhttp.send(new FormData(document.getElementById('fileUpload')));

    function transferComplete(){
      document.getElementById("result").innerHTML = "Upload file succeed!! " + xhttp.response;
    }
    function transferFailed(){
      document.getElementById("result").innerHTML = "Upload file failed!! ";
    }
    // reference: https://www.w3schools.com/jsref/event_preventdefault.asp
    event.preventDefault(); // prevent form default event which refreshes the page
  }

  document.getElementById("submit").addEventListener('click',uploadFile);