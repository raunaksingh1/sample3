import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { showData } from "../action/item";
import { connect } from "react-redux";
import { delItem } from "../action/item";
import PropTypes from "prop-types";

class Index extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //      businesse:[]
  //   }
  // }

  // delete(_id) {
  //   this.props.delItem(_id, this.props.history);
  // }

  componentWillMount() {
    this.props.showData();
    //   axios.get('/api/business')
    //   .then(res=>{console.log(res)
    //   this.setState({
    //     businesse:res.data
    //   })
    //   console.log(this.state.businesse)
    //   })
  }
  // componentWillReceiveProps(newProps) {
  //   if (newProps.businesses) {
  //     this.props.businesses.unshift(businesses.newProps);
  //   }
  // }

  render() {
    console.log(this.props.businesses);
    const businesslist = this.props.businesses.map(business => {
      return (
        <div key={business._id}>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Person</th>
                <th>Business</th>
                <th>GST Number</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tr>
              <td>{business.name}</td>

              <td>{business.business_number}</td>

              <td>{business.gst_number}</td>
              <td>
                <button
                  onClick={
                    // this.delete.bind(this, business._id)
                    () => {
                      this.props.delItem(business._id, this.props.history);
                    }
                    // axios.delete("api/delet/" + business._id).then(res => {
                    //   console.log(business._id);
                    //   this.props.history.push("/");
                    // });
                  }
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={"/edit/" + business._id} className="btn btn-primary">
                  Edit
                </Link>
              </td>
            </tr>
          </table>
        </div>
      );
    });

    // console.log(businesslist);
    return <div>{businesslist}</div>;
  }
}

Index.propTypes = {
  showData: PropTypes.func.isRequired,
  businesses: PropTypes.array.isRequired
};

const mapStateToprops = state => ({
  businesses: state.posts.items
});

export default connect(
  mapStateToprops,
  { showData, delItem }
)(Index);
