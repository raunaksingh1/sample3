import React, { Component } from "react";
import axios from "axios";
import { addItem } from "../action/item";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      business_number: "",
      gst_number: ""
    };
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
    this.props.addItem(business, this.props.history);

    // axios.post('/api/business/',business)
    // .then(res=>{
    //     this.props.history.push('/index')
    //     console.log(res)
    // }).catch(err=>{console.log(err)})
    console.log(business);
  }

  render() {
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
export default connect(
  null,
  { addItem }
)(withRouter(Create));
