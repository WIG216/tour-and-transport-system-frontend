import api from "./apiClient";

const getAllUser = () => {
  return api.get("/users ");
};

const getSingleUser = (id) => {
  return api.get(`/users/${id}`);
};

const updateUser = (id, data) => {
  return api.put(`/users/${id}`, data);
};

const deleteUser = (id) => {
  return api.delete(`/users/${id}`);
};

export { getAllUser, getSingleUser, updateUser, deleteUser };
