const element =(
    <div>
      <h1>ITEMS FROM A GOSSIP COLUMN</h1>
      <h3>Input Your Word Choices: </h3>
      <form method="post" id="form">
          <label> Article of Clothing: </label>
          <input type="text" id="clothing" placeholder="socks"></input><br />
          
          <label> Female Person You Know #1: </label> 
          <input type="text" id="female1" placeholder="Ada Lovelace"></input><br />
          
          <label> Female Person You Know #2: </label>
          <input type="text" id="female2" placeholder="Princess Leia"></input><br />

          <label> Male Person You Know #1: </label>
          <input type="text" id="male1" placeholder="Alan Turing"></input><br />

          <label> Male Person You Know #2: </label>
          <input type="text" id="male2" placeholder="Luke Skywalker"></input><br />

          <label>Plural Noun: </label>
          <input type="text" id="noun" placeholder="Controllers"></input><br /><br />

          <input type="submit" value="See the Results!"></input>
      </form>
    </div>
  );
  
  ReactDOM.render(
    element,
    document.getElementById('container')
  );
  
  let xhttp = new XMLHttpRequest(); 
  
  function sendStuff(event) {
    xhttp.addEventListener("load",success); 
    xhttp.addEventListener("error",error);  
    xhttp.open("POST", "/madlibs", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    let formData = {} // initialize object formData
    // for loop: go through all form inputs (title and paragraph) and build object formData
    // https://www.w3schools.com/jsref/met_document_queryselectorall.asp
    // https://www.w3schools.com/jsref/met_element_getattribute.asp
    document.querySelectorAll("input[type='text']").forEach(function(element){
      formData[element.getAttribute("id")] = element.value;
    });
    xhttp.send(JSON.stringify(formData));
  
    /* // Alternative 
    let formData = {
      "first": document.getElementById("first").value,
      "last": document.getElementById("last").value
    };*/
    
    // reference: https://www.w3schools.com/jsref/event_preventdefault.asp
    event.preventDefault(); // prevent form default event which refreshes the page
  }
    
  function success(){
    let data = JSON.parse(xhttp.response);
    let echo = (
      <div>
        <p><strong> {data.female1} </strong> and her ex-husband <strong> {data.male1} </strong><br />
        were seen last night at the Twenty-Three Club holding<br />
        <strong> {data.male2}. </strong> Could it be reconcilliation? The international heartthrob,<br />
        <strong>  {data.male2}, </strong> and the glamourous top model,<br />
        <strong> {data.female2}, </strong> are expecting their first baby in November.<br />
        <strong> {data.female2} </strong> is denying stork rumors,<br />
        but yesterday she was buying a maternity <strong> {data.noun} </strong></p>
      </div>
    );
    
    ReactDOM.render(
      echo,
      document.getElementById('echo')
    );
  }
  function error(){
    console.log(xhttp.readyState);
    console.log(xhttp.status);
    
  }
  
  document.getElementById("form").addEventListener("submit", sendStuff);