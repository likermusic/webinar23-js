const form = document.querySelector('form');
const message = document.querySelector('#message');
const login = document.querySelector('#login');
const password = document.querySelector('#password');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (/^[a-z0-9_-]{3,16}$/.test(login.value) == false || /^[A-Za-z0-9]\w{3,}$/.test(password.value) == false) {
    const layout = 'Что-то неправильно ввел🤔';
    message.textContent = layout;
    return;
  }

  const body = new FormData(form);
  body.append('AUTH_KEY', '23fdsg3fdsf34');
  // const proxy = 'https://cors-anywhere.herokuapp.com/';
  const url = 'http://demo-it-park.ru/api/users/';
  fetch(url, {
    method: 'POST',
    body: body
  }).then(function (resp) {
    return resp.json();
  }).then(function (isUser) {
    if (isUser == true) {
      const layout = '<h1>Привет, друг 😉</h1>';
      document.body.innerHTML = layout;
    } else {
      const layout = 'Не смогли найти пользователя🙄';
      message.textContent = layout;
    }
  })
})


//ДАННЫЕ ДЛЯ ВХОДА
// $users = [
//   ['login' => 'user1', 'password' => 'user1qwe'],
//   ['login' => 'user2', 'password' => 'user2asd'],
//   ['login' => 'user3', 'password' => 'user3zxc']
// ];