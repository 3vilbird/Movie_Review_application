import { API } from "../../config";

export const getdata = () => {
  return fetch(`${API}/Movie/Movies`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

export const AddMoive = (movie) => {
  return fetch(`${API}/Movie/AddMovie`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(movie),
  }).then((res) => res.json());
};


//delete api

//https://localhost:5001/Movie/DeleteMovie/5




export const deleteMovie = (id) => {
  return fetch(`${API}/Movie/DeleteMovie/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};




// export const sigin = (user) => {
//     return fetch(`${API}/signin`, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(user),
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .catch((err) => console.log(err));
//   };
