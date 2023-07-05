
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-dark">
        <div className="container-fluid">
          <h1>World Times</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item" ><Link className="nav-link active" to="/" style={{ color: 'white' }}>General</Link>
              </li>
              <li className="nav-item" ><Link className="nav-link active" to="/Business" style={{ color: 'white' }}>Business</Link>
              </li>
              <li className="nav-item" ><Link className="nav-link active" to="/Entertainment" style={{ color: 'white' }}>Entertainment</Link>
              </li>
              <li className="nav-item" ><Link className="nav-link active" to="/Health" style={{ color: 'white' }}>Health</Link>
              </li>
              <li className="nav-item" ><Link className="nav-link active" to="/Science" style={{ color: 'white' }}>Science</Link>
              </li>
              <li className="nav-item" ><Link className="nav-link active" to="/Sports" style={{ color: 'white' }}>Sports</Link>
              </li>
              <li className="nav-item" ><Link className="nav-link active" to="/Technology" style={{ color: 'white' }}>Technology</Link>
              </li>

            </ul>

          </div>
          {/* <div className="dropdown">
            <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            No. of articles/page
            </button>
            <ul className="dropdown-menu">
              <button className="num" style={{textAlign:'center'}} onClick={this.props.changepageno(4)}>4</button>
              {/* <button className="num" style={{textAlign:'center'}} onClick={this.props.changepageno(8)}>8</button>
              <button className="num" style={{textAlign:'center'}} onClick={this.props.changepageno(12)}>12</button> 
            </ul>
          </div> */}
        </div>
      </nav>
    )
  }
}

export default Navbar
