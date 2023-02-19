import api from "./apiClient";

const createVehicle = (data) => {
  return api.post("/vehicles/", data);
};

const getVehicles = () => {
  return api.get("/vehicles ");
};

const updateVehicle = (id, data) => {
  return api.get(`/vehicles/${id}`, data);
};

const deleteVehicle = (id) => {
  return api.delete(`/vehicles/${id}`);
};

export { createVehicle, getVehicles, updateVehicle, deleteVehicle };
