import React from "react";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import { useLocation } from "react-router-dom";

export default function SearchResults() {
  var [news, setNews] = useState([]);
  var [loading, setLoading] = useState(true);
  var location = useLocation();
  var item = location.state.item;

  useEffect(() => {
    async function getData() {
      var response = await fetch(
        `https://newsapi.org/v2/everything?q=${item}&apiKey=ebecd70bd7d54d23bac375f5e3948872`
      );
      var data = await response.json();
      console.log(data);
      setNews(data.articles);
      setLoading(false);
    }
    getData();
  }, [item]);
  return (
    <div>
      {" "}
      <div>
        {loading === false ? (
          <>
            {" "}
            <div className="w3l-searchblock w3l-homeblock1 py-5">
              <div className="container py-lg-4 py-md-3">
                {/* <!-- block --> */}
                <div className="most-recent">
                  <div className="title-align mb-4">
                    <h3 className="title-left">Search Results:</h3>
                    <a href="#blog" className="more-posts">
                      {" "}
                      View more posts{" "}
                      <span className="fas fa-arrow-right"></span>
                    </a>
                  </div>
                  <div className="row">
                    {news.map((item) => {
                      return (
                        <div className="col-lg-3 col-md-6 item">
                          <div className="card">
                            <div className="card-header p-0 position-relative">
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  className="card-img-bottom d-block radius-image"
                                  src={item.urlToImage}
                                  alt="Card cap"
                                />
                              </a>
                              <div className="post-pos">
                                <a
                                  href={item.url}
                                  target="_blank"
                                  className="receipe blue"
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                            <div className="card-body p-0 blog-details">
                              <a
                                href={item.url}
                                target="_blank"
                                className="blog-desc"
                              >
                                {item.title}
                              </a>
                              <p>{item.description}</p>
                              <span className="post-date">
                                <span className="fa fa-clock-o"></span>{" "}
                                {item.publishedAt}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* <!-- //block--> */}
              </div>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
