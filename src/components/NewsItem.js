import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;//it is re-structring
    return (
      <div className='my-4'>
        <div className="card" style={{ width: "15rem" }}>
          <img src={!imageUrl ? "//www.livemint.com/lm-img/img/2024/07/04/1600x900/3-0-103769130-iStock-1182812188-0_1679850494801_1720072960769.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {source} </span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark">Read MORE</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
