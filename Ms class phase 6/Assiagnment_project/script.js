const requestUrl = 'https://api.github.com/users/Hamza-Codez';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data.avatar_url);
      console.log(data.followers);
      
      document.querySelector('#img').innerHTML = `<img src="${data.avatar_url}" alt="Avatar">`;
      document.querySelector('#name').innerHTML = `<h3 id="name">${data.login}</h3>`;
      document.querySelector('#Followers').innerHTML = `<div id="Followers">Followers : ${ data.followers}</div>`;
    } else {
      console.error('Error fetching data');
    }
  }
};
xhr.send();