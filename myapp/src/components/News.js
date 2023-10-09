  import React, { Component } from "react";
  import NewItem from "../NewItem";
  import PropTypes from "prop-types";
  import Heelo from "./Heelo";

  export class News extends Component {
    static defaultProps = {
      country: "in",
      category: "health",
    };

    static propTypes = {
      country: PropTypes.string,
      category: PropTypes.string,
    };

    articles = [];

    constructor() {
      super();
      console.log("I am Constructor of News App");

      this.state = {
        articles: this.articles,
        loading: false,
        page: 1,
      };
    }

    handlePrevClick = async () => {
      console.log("Previous Button");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f3528bedc2554c718cceb9763be97b0f&page=${this.state.page - 1
        }&pageSize=5`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        articles: parsedData.articles,
        loading: false,
        page: this.state.page - 1,
      });
    };

    handleNextClick = async () => {
      console.log("Next button");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f3528bedc2554c718cceb9763be97b0f&page=${this.state.page + 1
        }&pageSize=5`;

      this.setState({ loading: true });

      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        loading: false,
        page: this.state.page + 1,
      });
    };

    async componentDidMount() {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f3528bedc2554c718cceb9763be97b0f&page=1&pageSize=5`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({ articles: parsedData.articles, loading: false });
    }

    render() {
      return (
        <>
          <div className="container">
            <h1> Omkar's News Website</h1>
            {this.state.loading && <Heelo />}

            <div className="row justify-content-start">
              {!this.state.loading &&
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewItem
                        title={element.title ? element.title.slice(0.45) : " "}
                        description={
                          element.description
                            ? element.description.slice(0, 88)
                            : " "
                        }
                        url={element.urlToImage}
                        linkme={
                          element.url
                            ? element.url
                            : "https://imageio.forbes.com/specials-images/imageserve/6447dcc8b071d4b3daf33129/Tucker-Carlson-is-no-longer-at-Fox-News/960x0.jpg?format=jpg&width=960"
                        }


                      />
                    </div>
                  );
                })}
            </div>
            <div className="d-flex justify-content-between">
              <button
                disabled={this.state.page <= 1}
                onClick={this.handlePrevClick}
                type="button"
                className="btn btn-primary"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                onClick={this.handleNextClick}
                className="btn btn-primary"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </>
      );
    }
  }

  export default News;
