import React, { Component } from 'react';
import Article from './Article'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
	root: {
	  flexGrow: 1,
	},
	paper: {
	  height: 140,
	  width: 100,
	},
	control: {
	  padding: theme.spacing.unit * 2,
	},
	wrap: {

	}
  });
class Articles extends Component {
	state = {
		spacing: '16',
	  }

	newsArticles() {
		const { spacing } = this.state

return(
					<Grid container  spacing={40} style={{padding: 24}}>
							 {this.props.newsArticles.map((newsArticle, index) => (

						<Grid item key={index} >
							<Article DEFAULT_IMAGE={this.props.DEFAULT_IMAGE} newsArticle={newsArticle} index={index} />
						</Grid>
	 )	 )}
					</Grid>
	)
							 }
	render() {
		return <div>{this.newsArticles()}</div>
	}
}

export default withStyles(styles)(Articles)