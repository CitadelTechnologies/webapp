import config from '../config';
import glamorous from 'glamorous';
import Link from 'next/link';
import Router from 'next/router';

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
  alignItems: 'center',
  justifyContent: 'space-around',
  fontSize: '1.2em',
  marginRight: '10%',
  "& a": {
      textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'black',
    padding: '0px 10px',
    margin: '0px 10px',
    "&.button": {
        minWidth: '100px',
        backgroundColor: '#000',
        color: '#EFEFEF',
        padding: '10px',
        borderRadius: '30px'
    }
  },
  "@media(max-width:500px)": {
    width: '100%',
    paddingTop: '15px',
    paddingBottom: '10px',
    borderTop: '1px solid black',
    marginRight: '0px',
    backgroundColor: 'white',
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
    }
  },
  "@media(max-width: 500px)": {
    width: '100%',
    margin: '0px',
    paddingBottom: '10px',
    backgroundColor: 'white',
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

const Wrapper = glamorous.div({
  width: '100%',
  height: '100%',
  marginTop: '140px',
})

var styles = {
    body: {
        margin: '0'
    }
}

class DashboardLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        };
    }

    componentWillMount() {
        if (typeof window === 'undefined') {
            return;
        }
        for(let i in styles.body) {
            document.body.style[i] = styles.body[i];
        }

        if (this.state.user === null) {
            return Router.push('/login');
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
                        { this.state.user !== null &&
                            <Link href="/dashboard"><a>{ this.state.user.username }</a></Link>
                        }
                        { (this.state.user !== null && this.state.user.is_admin === true) &&
                            <Link href="/admin"><a className="button">Administration</a></Link>
                        }
                    </Toolbar>
                </Header>
                <Wrapper>
                    { this.props.children }
                </Wrapper>
            </Body>
        );
    }
};

export default DashboardLayout;
