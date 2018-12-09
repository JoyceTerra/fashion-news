import React, { Component } from "react";
import getNewsArticles from "./getNewsArticles";
// import CardsContainer from "./components/CardsContainer"
import Button from '@material-ui/core/Button';
import classnames from 'classnames';
import Cards from "./components/Cards"

const DEFAULT_IMAGE =
  "https://fashionunited.info/global-assets/img/default/fu-default_1200x630_black-favicon.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { newsArticles: [], limit:10 };
  }
  async componentWillMount() {
    this.getArticles()
  }
  getArticles = async () => {
    const variables = {
      limit: this.state.limit,
      offset: 0
    };
    const result = await getNewsArticles(variables);
    this.setState({
      newsArticles: result.fashionunitedNlNewsArticles
    });
  }
  newsArticles() {
    return this.state.newsArticles.map((newsArticle, index) => (
      <div key={index}>
         <Cards DEFAULT_IMAGE={DEFAULT_IMAGE} newsArticle={newsArticle} index={index}  />
      </div> 
   ));
  }
loadMore = () => {
  let { limit } = this.state;
  this.setState({ limit: limit + 10 },()=>{
    this.getArticles()
  })
}

  render() {
    
    return (
      <div className="App">
        <h1>Fashion News</h1>
        <div>{this.newsArticles()}</div>
        <Button onClick={this.loadMore} variant="contained" color="primary" className={classnames.button}>
        Load More
      </Button>
      </div>
    );
  }
}


export default App;
