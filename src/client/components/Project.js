import React from 'react';
import glamorous from 'glamorous';
import Router from 'next/router';

const Container = glamorous.div({
    width: '100%',
    paddingTop: '100px',
    paddingBottom: '40px',
    "@media(max-width:500px)": {
      paddingTop: "20px"
    }
  },
  ({ background }) => ({
    backgroundSize: 'cover',
    backgroundImage: `url(${background})`,
  })
);

const Wrapper = glamorous.div({
  width: '80%',
  margin: 'auto',
  padding: '20px',
  backgroundColor: 'white',
  boxShadow: '0px 0px 15px rgba(0,0,0,0.8)',
  "& header": {
    display: 'flex',
    alignItems: 'center',
    "& a > img": {
      cursor: 'pointer',
      width: '120px',
      height: '120px'
    },
    "& h2": {
      paddingLeft: '40px'
    }
  },
  "& section": {
    paddingLeft: '160px',
    paddingRight: '160px',
    textAlign: 'justify'
  },
  "& footer": {
    paddingLeft: '160px',
    "& a": {
      color: "#565656",
      textDecoration: 'none'
    }
  },
  "@media(max-width:500px)": {
    "& header": {
      "& a > img": {
        width: '48px',
        height: '48px'
      },
      "& h2": {
        paddingLeft: "20px"
      }
    },
    "& section": {
      paddingLeft: '20px',
      paddingRight: '20px'
    }
  }
});

class Project extends React.Component {
  constructor(props) {
    super(props);
    document.title += ` - ${this.props.project.name}`;
  }

  render() {
    return (
      <Container background={this.props.project.cover_picture}>
        <Wrapper>
          <header>
            <a href={this.props.project.url} target={this.props.project.url !== '#' ? "_blank" : "_self" }>
              <img src={this.props.project.picture} alt={this.props.project.name} />
            </a>
            <h2>{this.props.project.name}</h2>
          </header>
          <section dangerouslySetInnerHTML={{__html: this.props.project.description}}>
          </section>
          <footer dangerouslySetInnerHTML={{__html: this.props.project.url !== '#'
            ? `<a href=${this.props.project.url} target="_blank">Voir le site -></a>`
            : '' }}></footer>
        </Wrapper>
      </Container>
    );
  }
};

export default Project;
