import React, { Component } from "react";
import axios from "axios";

export default class edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      business_number: "",
      gst_number: ""
    };
  }
  componentDidMount() {
    axios.get("/api/edit/" + this.props.match.params.id).then(res => {
      console.log(res.data);
      this.setState({
        name: res.data.name,
        business_number: res.data.business_number,
        gst_number: res.data.gst_number
      });
    });
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const business = {
      name: this.state.name,
      business_number: this.state.business_number,
      gst_number: this.state.gst_number
    };
    axios
      .post("/api/update/" + this.props.match.params.id, business)
      .then(res => {
        this.props.history.push("/index");
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    // console.log(business)
  };

  render() {
    console.log(this.props);
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Business</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Person Name: </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Add Business Name: </label>
            <input
              type="text"
              className="form-control"
              name="business_number"
              value={this.state.business_number}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Add GST Number: </label>
            <input
              type="text"
              className="form-control"
              name="gst_number"
              value={this.state.gst_number}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Register Business"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
