import { getServerURL } from "./task1.js";

export async function addUser(first_name, last_name, email) {

  const url = getServerURL();

  const response = await fetch(url + "/users");

  const users = await response.json();

  const maxId = users.reduce((max, user) => Math.max(max, Number(user.id)), 0);

  const newId = maxId + 1;

  const newUser = {
    id: newId, 
    first_name,
    last_name,
    email,
  };

  const postResponse = await fetch(url + "/users", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(newUser),
  });

  const addedUser = await postResponse.json();
  const endUser = JSON.parse(JSON.stringify(addedUser, null, 2));

  return console.log(endUser);
}