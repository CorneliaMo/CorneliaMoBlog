var pathString = window.location.pathname;
var httpRequest = new XMLHttpRequest()
var data = {path:pathString}
httpRequest.open('POST', 'https://server.corneliamo.cn:10100/statistic/post.api', true);
httpRequest.setRequestHeader("Content-type","application/json");
httpRequest.send(JSON.stringify(data));