var url = '/jekyll-doc-theme/docs/'
if(url != window.location.pathname){
  var version = window.location.pathname.replace(url, '').split('/')[0];
  document.querySelector('#bd-versions').innerText = 'v'+version
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
 
  var baseUrl = window.location.origin+'/jekyll-doc-theme/docs/'+version;
  var urlRequest = baseUrl+'/summary.json';
  
  fetch(urlRequest, requestOptions)
    .then(response => response.text())
    .then(result => {
      let summary = JSON.parse(result)
      let list = document.querySelector('.nav.bd-sidenav');
      summary.map((item) => {
        li = document.createElement('li');
        link = document.createElement('a');
        link.innerText = item.title;
        link.href = baseUrl+'/'+item.link;
        li.appendChild(link);
        list.appendChild(li);
      });
    })
    .catch(error => console.log('error', error));
}