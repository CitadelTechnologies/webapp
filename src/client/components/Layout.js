import glamorous from 'glamorous';
import Link from 'next/link';

const Body = glamorous.div({
  fontFamily: 'Quattrocento',
});

const Header = glamorous.div({
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '140px',
  display: 'flex',
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: '10',
  "@media(max-width:500px)": {
    flexDirection: "column"
  }
});

const Toolbar = glamorous.div({
  display: 'flex',
  justifyContent: 'space-around',
  fontSize: '1.2em',
  marginRight: '10%',
  "& a": {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'black',
    padding: '0px 10px'
  },
  "@media(max-width:500px)": {
    paddingTop: '15px',
    paddingBottom: '10px',
    borderTop: '1px solid black',
    marginRight: '0px',
    "& a": {
      width: '80px',
      textAlign: 'center'
    }
  }
});

const Title = glamorous.h1({
  width: '300px',
  cursor: 'pointer',
  '& div': {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    "@media(max-width:500px)": {
      marginBottom: '0px',
      flexDirection: 'column',
      "& div": {
        marginBottom: '10px'
      }
    }
  }
});

const Logo = glamorous.div(
  {
    width: '100px',
    height: '100px',
  },
  ({ picture }) => ({
    backgroundImage: `url(${picture})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  })
);

var styles = {
    body: {
        margin: '0'
    }
}

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if(typeof window !== 'undefined') {
        var i = 0;
        for(i in styles.body){
            document.body.style[i] = styles.body[i];
        }
    }
  }

  componentDidMount() {
    document.querySelector('#react-body').style.height = `${screen.height}px`;
  }

  componentDidUpdate() {
    document.querySelector('#react-body').style.height = `${screen.height}px`;
  }

  render() {
    return (
      <Body id="react-body">
        <Header>
          <Title>
            <Link href="/">
              <div>
                <Logo picture="/static/images/blason.png" />
                La Citadelle
              </div>
            </Link>
          </Title>
          <Toolbar>
              <Link href="/projects">Projets</Link>
              <Link href="http://local-blog.la-citadelle.net">Blog</Link>
          </Toolbar>
        </Header>
        { this.props.children }
      </Body>
    );
  }
};

export default Layout;
