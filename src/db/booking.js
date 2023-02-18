import api from "./apiClient";

const createBooking = (data) => {
  return api.post("/vehicle/", data);
};

const getAllBooking = () => {
  return api.get("/vehicles ");
};

const getBooking = (id, data) => {
  return api.get(`/vehicle/${id}`, data);
};


export { createBooking, getAllBooking, getBooking };
