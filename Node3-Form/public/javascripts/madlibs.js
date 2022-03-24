const element =(
    <div>
      <h1>Elizabeth the First</h1>
      <h3>Input Your Word Choices: </h3>
      <form method="post" id="form">
          <label> Adjective #1: </label>
          <input type="text" id="adjective1" placeholder="loose" value="Loose"></input><br />
          
          <label> Adjective #2: </label> 
          <input type="text" id="adjective2" placeholder="awful" value="Awful"></input><br />
          
          <label> Adjective #3: </label>
          <input type="text" id="adjective3" placeholder="bloody" value="Bloody"></input><br />

          <label> Adverb: </label>
          <input type="text" id="adverb" placeholder="extremely" value="Extremely"></input><br />

          <label> Celebrity #1: </label>
          <input type="text" id="celeb1" placeholder="Paul Dano" value="Paul Dano"></input><br />

          <label>Celebrity #2: </label>
          <input type="text" id="celeb2" placeholder="Brad Pitt" value="Brad Pitt"></input><br />

          <label> Name of Person: </label>
          <input type="text" id="person" placeholder="John Man" value="John Man"></input><br />

          <label> Noun #1: </label>
          <input type="text" id="noun1" placeholder="Hatchet" value="Hatchet"></input><br />

          <label> Noun #2: </label>
          <input type="text" id="noun2" placeholder="Earth" value="Earth"></input><br />

          <label> Superlative Adjective: </label>
          <input type="text" id="supadjective" placeholder="Angriest" value="Angriest"></input><br /><br />

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
        <p>Elizabeth, the Tudor <strong> {data.noun1} </strong> of England, as probably the <br />
        <strong> {data.supadjective} </strong> ruler the British ever had. Elizabeth was the<br />
        daughter of Henry the Eighth and Ane Boleyn. Later, Anne had <br />
        her <strong> {data.noun2} </strong> chopped off by Henry.<br />
        Elizabeth was born in 1533 and became Queen when she was 25. She<br />
        was a <strong> {data.adjective1} </strong> Protestant and persecuted the <strong> {data.adjective2} </strong><br />
        Catholics <strong> {data.adverb}. </strong> In 1558, the Armada<br />
        attacked England. But the English fleet, commanded by <strong> {data.celeb1} </strong><br />
        and <strong> {data.celeb2}, </strong> defeated them. Elizabeth ruled for 45 years,<br />
        and during her reign of England prospered and produced Shakespear,<br />
        Francis Bacon, and <strong> {data.person}. </strong> Elizabeth never married,<br />
        which is why she is sometimes called the <strong> {data.adjective3} </strong> Queen.</p>
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