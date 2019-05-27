import axios from "axios";

class ProfileAuth {
  constructor() {
    this.profile = axios.create({
      baseURL: "http://localhost:5000/user/profile",
      withCredentials: true
    });
  }


  getFlat(user){
    return this.profile
      .get(`/${user}`)
        .then((apiResponse) => apiResponse)
  }

  imageUpload(user, file) {
    console.log(user)
    return this.profile
    .post('/edit/image', file)
      .then(({data}) => data)
  }

  getUser(userID){
    return this.profile
      .get(`/user/${userID}`)
        .then((apiResponse) => apiResponse)
  }

  editUser(userID, item){
    return this.profile
      .put(`/edit/${userID}`, { userID, item })
        .then((apiResponse) => apiResponse)
  }
}
  

const profileAuth = new ProfileAuth();

export default profileAuth;
