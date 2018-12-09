import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Dialog from './Dialog';
import { withRouter } from 'react-router-dom';


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

class Cards extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
    this.props.history.push(`/${this.props.newsArticle.id}`)
  };

  render() {
    const { classes, DEFAULT_IMAGE, newsArticle } = this.props
    let { open } = this.state;

    return (
      <Card className={classes.card}>
        <CardHeader
					onClick={this.handleExpandClick}
					action={<IconButton />}
					className={classes.title}
					title={newsArticle.title}
					subheader={new Date(newsArticle.createdAt).toDateString()}
				/>
        <CardMedia
        	onClick={this.handleExpandClick}
          className={classes.media}
          image={ newsArticle.imageUrl || DEFAULT_IMAGE}
          title={newsArticle.title}
        />
        <CardContent>
          <Typography component="p">
          {newsArticle.description}
          </Typography>
        </CardContent>
        <Dialog open={open} handleClose={this.handleExpandClick} />
      </Card>
    );
  }
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cards);