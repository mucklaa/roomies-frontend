import axios from "axios";

class ShoppingAuth {
  constructor() {
    this.shopping = axios.create({
      baseURL: "http://localhost:5000/user/shopping",
      withCredentials: true
    });
  }


  getFlat(user){
    return this.shopping
      .get(`/${user}`)
        .then((apiResponse) => apiResponse)
  }

  // addShoppingItem(){
  //   return this.shopping
  //     .post('/new')
  // }
}
  

const shoppingAuth = new ShoppingAuth();

export default shoppingAuth;
