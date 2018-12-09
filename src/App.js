import React, { Component } from "react";
import getNewsArticles from "./getNewsArticles";
// import CardsContainer from "./components/CardsContainer"
import Cards from "./components/Cards"

const DEFAULT_IMAGE =
  "https://fashionunited.info/global-assets/img/default/fu-default_1200x630_black-favicon.jpg";

  const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { newsArticles: [] };
  }
  async componentWillMount() {
    const variables = {
      keywords: ["hunkemoller"]
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
  render() {
    
    return (
      <div className="App">
        <h1>Fashion News</h1>
        <div>{this.newsArticles()}</div>
      </div>
    );
  }
}


export default App;
