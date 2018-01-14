import React from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div({
    position: 'absolute',
    width: '80px',
    height: '100px',
    left: 'calc(50% - 80px)',
    bottom: '-70px',
    backgroundColor: 'rgba(0,0,0,0.6)',
    textAlign: 'center',
    padding: '40px',
    paddingTop: '20px',
    borderRadius: '100px',
    cursor: 'pointer',
    transition: 'background-color 0.2s, opacity 0.4s',
    "&.hidden": {
      opacity: '0',
    },
    "& img": {
      width: '48px',
      height: '48px',
      marginTop: '8px',
      transition: 'width 0.2s, height 0.2s, margin-top 0.2s'
    },
    "&:hover": {
      backgroundColor: 'rgba(0,0,0,0.8)',
      "& img": {
        width: '64px',
        height: '64px',
        marginTop: '0px'
      }
    }
});

class ScrollButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayed: true };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if (this.state.displayed === true && event.pageY > 100) {
      this.setState({displayed: false});
    } else if (this.state.displayed === false && event.pageY < 100) {
      this.setState({displayed: true});
    }
  }

  scrollToBottom() {
    window.scroll(0, screen.height - 160);
  }

  render() {
    return (
      <Container className={this.state.displayed === true ? '' : 'hidden'}
        onClick={this.scrollToBottom}>
        {this.props.children}
      </Container>
    );
  }
};

export default ScrollButton;
