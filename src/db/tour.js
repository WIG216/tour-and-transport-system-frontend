import api from "./apiClient";

const createTour = (data) => {
  return api.post("/tours/", data);
};

const getAllTour = () => {
  return api.get("/tours ");
};

const getSingleTour = (id) => {
  return api.get(`/tours/search/getTourCount`);
};

const getTourBySearch = (id) => {
  return api.get(`/tours/search/getTourBySearch/${id}`);
};

const getTourCount = () => {
  return api.get(`/tours`);
};

const getFeaturedTours = () => {
  return api.get(`/tours/search/getFeaturedTours`);
};

const deleteTour = (id) => {
  return api.delete(`/tours/${id}`);
};

const updateTour = (id, data) => {
  return api.put(`/tours/${id}`, data);
};

export {
  createTour,
  getAllTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  getFeaturedTours,
  deleteTour,
  updateTour,
};
