import React, { Component } from 'react';
import Article from './Article'


const DEFAULT_IMAGE = 'https://fashionunited.info/global-assets/img/default/fu-default_1200x630_black-favicon.jpg';

export default class Articles extends Component {
	newsArticles() {
		return this.props.newsArticles.map((newsArticle, index) => (
			<div key={index}>
				<Article DEFAULT_IMAGE={DEFAULT_IMAGE} newsArticle={newsArticle} index={index} />
			</div>
		));
	}

	render() {
		return <div>{this.newsArticles()}</div>;
	}
}
