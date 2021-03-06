import React, { Component } from "react";
import getNewsArticles from "./getNewsArticles";
import Button from '@material-ui/core/Button';
import classnames from 'classnames';
import Articles from './components/Articles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Dialog from './components/Dialog'
import Grid from '@material-ui/core/Grid';


const DEFAULT_IMAGE = 'https://fashionunited.info/global-assets/img/default/fu-default_1200x630_black-favicon.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { newsArticles: undefined, limit: 12, open: false };
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
    this.setState({ limit: limit + 12 }, () => {
      this.getArticles()
    })
  }

  render() {
    return this.state.newsArticles ? (
      <div className="App">
      <Header/>
        <div>
					<Router>
						<div>
							<Route path="/" render={props => <Articles {...props} DEFAULT_IMAGE={DEFAULT_IMAGE} newsArticles={this.state.newsArticles} />} />
							<Route path="/:id" render={props => <Dialog {...props} DEFAULT_IMAGE={DEFAULT_IMAGE} newsArticles={this.state.newsArticles} />} />
						</div>
					</Router>
				</div>
        <Grid container justify="center">
          <Grid item >
            <Button onClick={this.loadMore} variant="outlined" color="primary" className={classnames.button}>
              Load More
          </Button>
        </Grid>
      </Grid>
      </div>
    ) : (
      'Loading'
    )
  }
}

export default App;
