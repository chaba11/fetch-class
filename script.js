const getUsers = async () => {
  const response = await fetch('https://random-data-api.com/api/users/random_user?size=10');
  const data = response.json();
  return data;
}

const randomUsers = async () => {
  const users = await getUsers();
  const html = users.map((user) => (
      `<h1>${user.first_name}</h1>
      <h1>${user.last_name}</h1>
      <p>${user.email}</p>
      <img src="${user.avatar}">`
    ));
  const div = document.querySelector(".container");
  console.log(html);
  div.innerHTML = html.join('');
  console.log(html.join(''));
}
randomUsers();
