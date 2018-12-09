import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';
import { slugify } from '../utils';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  title: { cursor: 'pointer' },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
});

class Article extends React.Component {
  handleOpen = () => {
		let { newsArticle } = this.props;
		this.props.history.push(`/${slugify(newsArticle.title, newsArticle.id)}`);
	};

  render() {
    const { classes, DEFAULT_IMAGE, newsArticle } = this.props
    return (
      <Card className={classes.card}>
        <CardHeader
					onClick={this.handleOpen}
					action={<IconButton />}
					className={classes.title}
					title={newsArticle.title}
					subheader={new Date(newsArticle.createdAt).toDateString()}
				/>
        <CardMedia
        	onClick={this.handleOpen}
          className={classes.media}
          image={ newsArticle.imageUrl || DEFAULT_IMAGE}
          title={newsArticle.title}
        />
      </Card>
    );
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Article));
