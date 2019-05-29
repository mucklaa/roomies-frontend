import axios from "axios";

class BillAuth {
  constructor() {
    this.bills = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/user/bills`,
      withCredentials: true
    });
  }

  // getBills
  getFlat(flatID){
    return this.bills
      .get(`/${flatID}`)
        .then((apiResponse) => apiResponse)
  } 

  getOverview(flatID) {
    return this.bills
      .get(`/${flatID}/overview`)
        .then((apiResponse) => apiResponse)
  }

  newBill(flatID, item){
    return this.bills
      .post('/new', {flatID, item})
  }

  editBill(itemID, item) {
    return this.bills
      .put('/edit', { itemID, item })
  }

  deleteBill(itemID){
    return this.bills
      .delete('/delete', {data: {itemID}})
        .then((apiResponse) => apiResponse)
  }
}

const billAuth = new BillAuth();

export default billAuth;
