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

  newItem(flatID, item){
    return this.shopping
      .post('/new', {flatID, item})
  }
  editItem(itemID, name, amount){
    return this.shopping
      .put('/edit', { itemID, name, amount })
  }

  deleteItem(itemID){
    return this.shopping
      .delete('/delete', {data: {itemID}})
  }
}
  

const shoppingAuth = new ShoppingAuth();

export default shoppingAuth;
