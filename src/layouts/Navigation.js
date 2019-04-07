import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import "../styles/Navigation.css";


// const NavLink = (props) => {
//   return (
//     <li className={"nav-item" + (props.isActive ? "active" : "")}>
//       <Link className="nav-link" to={props.path}>{props.name}</Link>
//     </li>
//   );
// }


class NavLink extends Component {
  render() {
    return (
      <li className={"nav-item" + (this.props.isActive ? " active" : "")}>
        <Link className="nav-link" to={this.props.path} onClick={() => this.props.onClick()}> {this.props.name}  </Link>
      </li>
    );
  }
}


class Navigation extends Component {
  state = {
    links: [{
      name: "Start",
      path: "/",
      isActive: false
    },
    {
      name: "Aktualności",
      path: "/news",
      isActive: false
    },
    {
      name: "Moje grupy",
      path: "/groups",
      isActive: false
    },
    {
      name: "Wiadomości",
      path: "/message",
      isActive: false
    },
    {
      name: "Ustawienia",
      path: "/settings",
      isActive: false
    }
    ]
  }

  handleClick(i) {
    const links = this.state.links.slice();
    for (const j in links) {
      links[j].isActive = i == j;
    }
    this.setState({ links: links });
  }

  // handleClick(name) {
  //   const links = [...this.state.links];
  //   const index = links.findIndex(id => id.name === name);
  //   links[index].isActive = true;
  //   this.setState({ links: links });
  // }

  render() {
    return (
      <nav className="col-lg-2 col-sm-4 col-xs-12 bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            {this.state.links.map((link, i) =>
              <NavLink
                key={link.path}
                path={link.path}
                name={link.name}
                isActive={link.isActive}
                onClick={() => this.handleClick(i)}
              />
            )}
          </ul>

          {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Saved reports</span>
            <Link to="" className="d-flex align-items-center text-muted">
              <span data-feather="plus-circle"></span>
            </Link>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <Link to="" className="nav-link" >
                <span data-feather="file-text"></span>
                Current month
          </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link" >
                <span data-feather="file-text"></span>
                Last quarter
          </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                <span data-feather="file-text"></span>
                Social engagement
          </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                <span data-feather="file-text"></span>
                Year-end sale
          </Link>
            </li> 
          </ul>
          */}
        </div>
      </nav >
    );
  }
}

export default Navigation;