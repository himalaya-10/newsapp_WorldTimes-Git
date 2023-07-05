import React, { Component } from 'react'

export class Newscard extends Component {
  render() {
    let {title,description,imgurl,newsurl,author,date}=this.props
    return (
        <div className="card">
        <img src={!imgurl?"https://img.freepik.com/premium-vector/loading-icon_167801-436.jpg?w=2000":imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {author} on {date}</small></p>
          <a href={newsurl} className="btn btn-dark">Readmore</a>
        </div>
        </div>
    )
  }
}

export default Newscard
