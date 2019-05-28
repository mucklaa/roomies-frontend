import axios from "axios";

class ToDoAuth {
  constructor() {
    this.todo = axios.create({
      baseURL: "http://localhost:5000/user/to-do",
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
