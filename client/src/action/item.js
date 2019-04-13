import axios from "axios";
export const addItem = (userDate, history) => dispatch => {
  // console.log("action");
  axios
    .post("/api/business/", userDate)
    .then(res => {
      history.push("/index");
      dispatch({
        type: "ADD_ITEM",
        payload: userDate
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const showData = () => dispatch => {
  axios.get("/api/business").then(res => {
    console.log(res);
    dispatch({
      type: "SHOW_ITEM",
      payload: res.data
    });

    // this.setState({
    //   businesse: res.data
    // });
    // console.log(this.state.businesse);
  });
};

export const delItem = (id, history) => dispatch => {
  axios.delete("api/delet/" + id).then(res => {
    console.log(id);
    history.push("/create");
    dispatch({
      type: "DEL",
      payload: id
    });
  });
};
