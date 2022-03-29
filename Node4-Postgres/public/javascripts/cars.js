let xhttp = new XMLHttpRequest();

xhttp.addEventListener("load",success);
xhttp.addEventListener("error",error);
xhttp.open("GET", "/carsOut", true);
xhttp.send();

function success(){
  let data = JSON.parse(xhttp.response);

  let rows = data.map((row) =>
    <tr key={JSON.stringify(row)}>
        <td> { row.maker }</td>
        <td> { row.model }</td>
        <td> { row.year }</td>
    </tr>
  );
  console.log(rows);
  let element =(
    <div>
      <h2>Cars Database</h2>
        <table id="myTable">
        <thead>
        <tr><th>Maker</th><th>Model</th><th>Year</th></tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
        </table>
    </div>
  );

  ReactDOM.render(
    element,
    document.getElementById('cars')
  );

  const dataTable = new simpleDatatables.DataTable("#myTable");

}
function error(){
  console.log(xhttp.readyState);
  console.log(xhttp.status);
}