import { API } from "../../config";

export const getdata = () => {
  return fetch(`${API}/api/Movie/Movies`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

export const AddMoive = (movie) => {
  return fetch(`${API}/api/Movie/AddMovie`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(movie),
  }).then((res) => res.json());
};

export const deleteMovie = (id) => {
  return fetch(`${API}/api/Movie/DeleteMovie/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

export const editMovie = (movie, id) => {
  return fetch(`${API}/api/Movie/UpdateMovie/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(movie),
  }).then((res) => res.json());
};
