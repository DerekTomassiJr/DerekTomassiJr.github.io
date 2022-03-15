let xhttp = new XMLHttpRequest();
xhttp.addEventListener("load",success);
xhttp.addEventListener("error",error);
xhttp.open("GET", "/session", true);
xhttp.send();

function success(){
    let data = JSON.parse(xhttp.response);
    console.log(data);

    if (data.views == 1) {
        const element =(
            <div>
            <h1>Counting Sessions</h1>
            <p>Today is {data.dates}</p>
            <p id="views">You visited this page <strong>for the first time</strong></p>
            </div>
        );
        ReactDOM.render(
            element,
            document.getElementById('session')
        );
    } else {
        const element =(
            <div>
            <h1>Counting Sessions</h1>
            <p>Today is {data.dates}</p>
            <p id="views">You visited this page <strong>{data.views}</strong> times</p>
            </div>
        );
        ReactDOM.render(
            element,
            document.getElementById('session')
        );
    }
}
function error(){
    console.log(xhttp.readyState);
    console.log(xhttp.status);
}