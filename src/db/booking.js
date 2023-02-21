import api from "./apiClient";

const createBooking = (data) => {
  return api.post("/bookings/", data);
};

const getAllBooking = () => {
  return api.get("/bookings ");
};

const getBooking = (id, data) => {
  return api.get(`/bookings/${id}`, data);
};


export { createBooking, getAllBooking, getBooking };
