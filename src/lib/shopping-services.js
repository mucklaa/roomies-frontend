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

  editItem(itemID, name, amount){
    return this.shopping
      .put('http://localhost:5000/user/shopping/edit', { itemID, name, amount })
  }

  deleteItem(itemID){
    return this.shopping
      .delete('http://localhost:5000/user/shopping/delete', {data: {itemID}})
  }
}
  

const shoppingAuth = new ShoppingAuth();

export default shoppingAuth;
