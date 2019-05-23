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
}
  

const profileAuth = new ProfileAuth();

export default profileAuth;
