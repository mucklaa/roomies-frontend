import axios from "axios";

class ToDoAuth {
  constructor() {
    this.todo = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/user/to-do`,
      withCredentials: true
    });
  }

  getFlat(flatID) {
    return this.todo
      .get(`/${flatID}`)
  }

  newItem(flatID, item) {
    return this.todo
      .post('/new', {flatID, item})
  }

  editItem(itemID, item){
    return this.todo
      .put('/edit', { itemID, item })
  }

  deleteItem(itemID) {
    return this.todo
      .delete('/delete', {data: {itemID}})
  } 
}
  
const todoAuth = new ToDoAuth();

export default todoAuth;
