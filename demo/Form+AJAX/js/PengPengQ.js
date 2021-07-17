// 自己封装AJAX函数
// 处理数据，得到参数
function resolveData(data) {
  var arr = [];
  for (k in data){
    arr.push(k + '=' + data[k])
  }
  return arr.join('&');
}

function PengPengQ(option){
  var xhr = new XMLHttpRequest();

  var qs = resolveData(option.data);

  // xhr.open('GET', '');
  if (option.method.toUpperCase() === 'GET') {
    xhr.open('GET', option.url + '?' + qs);
    xhr.send();
  }else if (option.method.toUpperCase() === 'POST') {
    xhr.open('POST', option.url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(qs);
  }

  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
      var respon = JSON.parse(this.responseText);
      option.success(respon);
    }
  }
}
