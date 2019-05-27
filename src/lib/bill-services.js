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

  getAllBills(flatID) {
    return this.bills
      .get(`http://localhost:5000/user/bills/${flatID}/overview`)
        .then((apiResponse) => apiResponse)
  }

  deleteBill(itemID){
    return this.bills
      .delete('/delete', {data: {itemID}})
        .then((apiResponse) => apiResponse)
  }
}

const billAuth = new BillAuth();

export default billAuth;
