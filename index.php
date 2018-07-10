<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Fetch API Sandbox</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  
</head>
<body>
  <div class="container">
    <h1 class="display-4 mb-4">Fetch API Best Practice By Abdoul</h1>
    <div class="d-flex">
      <button class="btn btn-info mr-4" id="getText">Get Text</button>
      <button class="btn btn-success mr-4" id="getUsers">Get JSON</button>
      <button class="btn btn-success mr-4" id="getPosts">Get API DATA</button>
    </div>
    <hr>
    <div id="output" style="border: 2px dotted hotpink; padding:10px; margin:10px;"></div>
    <form id="addPost">
      <div class="form-group">
        <input type="text" id="title" class="form-control" placeholder="Title">
      </div>
      <div class="form-group">
        <textarea id="body" class="form-control" placeholder="Body"></textarea>
      </div>
      <input type="submit" class="btn btn-secondary" value="Submit">
    </form>
  </div>
<script src="test.js"></script>
</body>
</html>