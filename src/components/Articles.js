import React, { Component } from 'react';
import Article from './Article'

export default class Articles extends Component {
	newsArticles() {
		return this.props.newsArticles.map((newsArticle, index) => (
			<div key={index} >
				<Article DEFAULT_IMAGE={this.props.DEFAULT_IMAGE} newsArticle={newsArticle} index={index} />
			</div>
		));
	}

	render() {
		return <div>{this.newsArticles()}</div>;
	}
}
