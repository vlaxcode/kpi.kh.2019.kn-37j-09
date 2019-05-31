import React from "react";
import "./FooterSubMenu.scss";

export default class FooterSubMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footerData: {
        header: "header_name",
        sections: [
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
          }
        ]
      }
    };
  }

  componentDidMount() {
    // getData();
  }

  getData() {
    var myRequest = new Request("websiteUrl");
    let footerData = [];

    fetch(myRequest)
      .then(response => response.json())
      .then(data => {
        this.setState({ footerData: data });
      });
  }

  render() {
    const { title, items } = this.props;
    let ulItems = null;
    console.log(items);
    // let items = this.state.footerData.sections;
    // let title = this.state.header;

    if (items && items.length > 0) {
      ulItems = items.map((item, index) => (
        <li key={index} className="menu-list">
          <a href={item.url || ""} className="menu-list-item">
            {item.text}
          </a>
        </li>
      ));
    }

    return (
      <div className="footer-submenu-container">
        <section>
          <h4 className="submenu-header">{title}</h4>
          <ul className="submenu-list-section">{ulItems}</ul>
        </section>
      </div>
    );
  }
}
