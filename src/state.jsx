const user = {
  id: "1",
  name: "Иван",
  lastname: "Иванов",
  email: "ivanov@mail.ru",
  avatar:
    "https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg",
  about: "Тут мой рассказ о себе и своей жизни",
};

const users = {
  0: { name: "Джон", lastname: "Сильвер" },
  1: { name: "Гомер", lastname: "Симпсон" },
  2: { name: "Машка", lastname: "Облигация" },
  3: { name: "Костя", lastname: "Карлик" },
};

export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}
