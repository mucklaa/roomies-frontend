import axios from "axios";

class ShoppingAuth {
  constructor() {
    this.shopping = axios.create({
      baseURL: "http://localhost:5000/user/shopping",
      withCredentials: true
    });
  }

  getFlat(flatID){
    return this.shopping
      .get(`/${flatID}`)
        .then((apiResponse) => apiResponse)
  }
}
  

const shoppingAuth = new ShoppingAuth();

export default shoppingAuth;
