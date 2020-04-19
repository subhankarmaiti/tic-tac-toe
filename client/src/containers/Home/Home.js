import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, withStyles, TextField } from '@material-ui/core';
import './Home.css';
class Home extends Component {
  state = {
    isFlipped: false
  };
  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  };
  render() {
    const { cardStyle } = this.props.classes;
    return (
      <div className='container'>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection='horizontal'
        >
          <Card className={cardStyle}>
            <form>
              <TextField
                id='outlined-basic'
                label='Outlined'
                variant='outlined'
              />
              <button onClick={this.handleClick}>Click to flip</button>
            </form>
          </Card>

          <Card className={cardStyle}>
            This is the back of the card.
            <button onClick={this.handleClick}>Click to flip</button>
          </Card>
        </ReactCardFlip>
      </div>
    );
  }
}
const styles = theme => ({
  cardStyle: {
    width: 250,
    height: 350,
    backgroundColor: '#fe346e',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default withStyles(styles)(Home);
