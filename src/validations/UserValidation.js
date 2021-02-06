const UserValidation = (values) => {
  const errors = {};

  if (!values.nama || values.nama === "") {
    errors.nama = "Nama Harus Diisi";
  }
  if (!values.alamat || values.alamat === "") {
    errors.alamat = "Alamat Harus Diisi";
  }

  return errors;
};

export default UserValidation;
