import React, { Component } from "react";
import getNewsArticles from "./getNewsArticles";
import Button from '@material-ui/core/Button';
import classnames from 'classnames';
import Articles from './components/Articles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
    }

    const result = await getNewsArticles(variables);
    this.setState({
      newsArticles: result.fashionunitedNlNewsArticles
    })
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
        <div>
					<Router>
						<div>
							<Route path="/" render={props => <Articles {...props} newsArticles={this.state.newsArticles} />} />
							<Route path="/:id" render={props => <Articles {...props} newsArticles={this.state.newsArticles} />} />
						</div>
					</Router>
				</div>
        <Button onClick={this.loadMore} variant="contained" color="primary" className={classnames.button}>
        Load More
      </Button>
      </div>
    )
  }
}


export default App;
