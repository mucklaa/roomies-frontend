import axios from "axios";

class BillAuth {
  constructor() {
    this.bills = axios.create({
      baseURL: "http://localhost:5000/user/bills",
      withCredentials: true
    });
  }

  getFlat(flatID){
    return this.bills
      .get(`/${flatID}`)
        .then((apiResponse) => apiResponse)
  } 
}



const billAuth = new BillAuth();

export default billAuth;
