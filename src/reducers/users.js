let initialState = {
  title: "Latihan CRUD dengan Redux",
  users: [
    {
      id: 1,
      nama: "Syahabuddin",
      alamat: "Kemit",
    },
    {
      id: 2,
      nama: "Hylmi",
      alamat: "Kwaren",
    },
    {
      id: 3,
      nama: "Husna",
      alamat: "Ngawen",
    },
  ],
  error: false,
};

const users = (state = initialState, action) => {
  return state;
};

export default users;
