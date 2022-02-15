const element =(
  <div>
      <form id="fileUpload" encType="multipart/form-data">
          <input type="file" name="file_up"/>
          <input id="submit" type="submit"/>
      </form>
      <div id="result"></div>
  </div>
);

ReactDOM.render(
  element ,
  document.getElementById('uploader')
);