import axios from "axios";

class ToDoAuth {
  constructor() {
    this.todo = axios.create({
      baseURL: "http://localhost:5000/user/to-do",
      withCredentials: true
    });
  }

  getFlat(flatID){
    return this.todo
      .get(`/${flatID}`)
        .then((apiResponse) => apiResponse)
  }
}
  

const todoAuth = new ToDoAuth();

export default todoAuth;
