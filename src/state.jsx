const user = {
  id: "1",
  name: "Иван",
  lastname: "Иванов",
  email: "ivanov@mail.ru",
  avatar:
    "https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg",
  about: "Тут мой рассказ о себе и своей жизни",
};

// const users = {
//   0: {
//     name: "Ольга",
//     lastname: "Воробьева",
//     email: "vorobyova@gmail.com",
//     id: 9,
//     avatar:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
//     about: "Тут мой рассказ о себе и своей жизни",
//   },
//   1: {
//     name: "Сергей",
//     lastname: "Еременко",
//     email: "erenemko@gmail.com",
//     id: 14,
//     avatar:
//       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
//     about: "Тут мой рассказ о себе и своей жизни",
//   },
//   2: {
//     name: "Джон",
//     lastname: "Сильвер",
//     email: "silver@gmail.com",
//     id: 4,
//     avatar:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
//     about: "Тут мой рассказ о себе и своей жизни",
//   },
//   3: {
//     name: "Светлана",
//     lastname: "Сидорова",
//     email: "sid@gmail.com",
//     id: 7,
//     avatar:
//       "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
//     about: "Тут мой рассказ о себе и своей жизни",
//   },
// };
let users = [];

export function getUser(usersId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == usersId) return users[i];
  }
  return user;
}

export async function getUsers() {
  let response = await fetch("https://aroma.positivegrid.ru/getUsers");
  users = await response.json();
  // console.log(users);
  return users;
}
