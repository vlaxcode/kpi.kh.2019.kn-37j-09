import React from "react";
import "./Footer.scss";
import { SelectForm } from "../SelectForm";
import { FooterSubMenu } from "../Footer";

const footerFirstMenu = [
  {
    url: "Url1",
    text: "Link1"
  },
  {
    url: "Url2",
    text: "Link2"
  },
  {
    url: "Url3",
    text: "Link3"
  },
  {
    url: "Url4",
    text: "Link4"
  },
  {
    url: "Url4",
    text: "Link4"
  }
];

export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      newUserOptions: {
        currency: "",
        language: ""
      },

      languageOptions: ["English", "Russian", "Ukrainian"],
      currencyOptions: ["USD", "HRV", "EUR"]
    };
  }

  handleFormInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUserOptions: {
          ...prevState.newUserOptions,
          [name]: value
        }
      }),
      console.log(this.state.newUserOptions)
    );
  };

  render() {
    return (
      <div className="footer-section">
        {/* <hr className="divider"/> */}
        <div className="footer-wrapper">
          <div className="footer-container">
            <footer>
              <div className="footer-menu">
                <FooterSubMenu title={"Title"} items={footerFirstMenu} />
                <FooterSubMenu title={"Title"} items={footerFirstMenu} />
                <FooterSubMenu title={"Title"} items={footerFirstMenu} />
                <FooterSubMenu title={"Title"} items={footerFirstMenu} />
              </div>

              <div className="footer-info-wrapper">
                {/* <hr className="divider"/> */}
                <div className="footer-info-container">
                  <div className="footer-logo-wrapper">
                    <a href="/">THE LOGO</a>
                  </div>
                  <div className="footer-info">
                    <div className="footer-info-form">
                      <SelectForm
                        title={"Language"}
                        name={"language"}
                        options={this.state.languageOptions}
                        value={this.state.newUserOptions.language}
                        placeholder={"Language"}
                        handleChange={this.handleFormInput}
                      />
                    </div>
                    <div className="footer-info-form">
                      <SelectForm
                        title={"Currency"}
                        name={"currency"}
                        options={this.state.currencyOptions}
                        value={this.state.newUserOptions.currency}
                        placeholder={"Currency"}
                        handleChange={this.handleFormInput}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
