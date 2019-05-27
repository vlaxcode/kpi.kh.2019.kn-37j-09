import React from "react";
import "./EmailUserForm.scss";

class EmailUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: ""
    };
  }

  handleFormInput = e => {
    let value = e.target.value;
    this.setState({ userEmail: value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    let userEmailData = this.state.userEmail;
    console.log("user email: ", userEmailData);
    // fetch("http://example.com", {
    //   method: "POST",
    //   body: JSON.stringify(userEmailData),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // }).then(response => {
    //   response.json().then(data => {
    //     console.log("Successful" + data);
    //   });
    // });
  };

  render() {
    return (
      <div className="email-section">
        <div className="email-section-container">
          <div className="form-header-container inline-section">
            <h4 className="form-header">SIGN UP FOR NEWS & GET 15% OFF</h4>
            <h3 className="form-subheader">
              Subscibe to get latest information about new products
            </h3>
          </div>
          <div className="form-wrapper inline-section">
            <form className="form-container" onSubmit={this.onFormSubmit}>
              <label className="form-label" />
              <input
                className="input-form"
                placeholder="Enter your email"
                name="email"
                type="text"
                // value={value}
                onChange={this.handleFormInput}
              />
              <button className="form-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EmailUserForm;
