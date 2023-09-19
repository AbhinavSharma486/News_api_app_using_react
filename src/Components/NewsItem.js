import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, url, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: 0 }}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={!imageUrl ? "https://media.istockphoto.com/id/1299140151/vector/404-error-page-not-found-template-with-dead-file.jpg?s=612x612&w=0&k=20&c=aiqJjuQ3_8FTOwFMcYsZW-c1ixCZeZt76-Q6nxMucw0=" : imageUrl} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small>By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a rel='noreferrer' href={url} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div >
    )
}

export default NewsItem

