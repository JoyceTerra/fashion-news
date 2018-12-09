import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { getId } from '../utils';


const styles = {
	appBar: {
		position: 'relative'
	},
	flex: {
		flex: 1
	},
	dialog: {
		padding: '15px',
		textAlign: 'center'
	}
};

function Transition(props) {
	return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			newsArticle: []
		};
	}

	handleClose = () => {
		this.props.history.push(`/`);
	}

	componentDidMount() {
		this.setState({ newsArticle: this.props.newsArticles.filter(article => article.id == getId(this.props.match.params.id))[0] });
	}
	render() {
		const { classes, open, DEFAULT_IMAGE } = this.props;
		let { newsArticle } = this.state;

		return (
			<div>
				<Dialog fullScreen open={true} onClose={this.handleClose} TransitionComponent={Transition}>
						<Toolbar>
							<IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
								<CloseIcon />
							</IconButton>
						</Toolbar>
					<List>
					<div className={classes.dialog}>
							<img src={newsArticle.imageUrl || DEFAULT_IMAGE} alt="" />
							<h3>{newsArticle.title}</h3>
							<p>{newsArticle.description}</p>
						</div>
					</List>
				</Dialog>
			</div>
		)
	}
}

FullScreenDialog.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenDialog);
