import glamorous from 'glamorous';
import Link from 'next/link';

const Body = glamorous.div({

});

const Header = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Toolbar = glamorous.div({
  display: 'flex',
  justifyContent: 'space-around',
  fontSize: '1.2em',
  marginRight: '10%'
});

const ToolbarLink = glamorous.a({
  textDecoration: 'none',
  cursor: 'pointer',
  color: 'black',
  padding: '0px 10px'
});

const Title = glamorous.h1({
  width: '20%',
  cursor: 'pointer',
  '& div': {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
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

  render() {
    return (
      <Body>
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
              <ToolbarLink href="/projects">Projets</ToolbarLink>
              <ToolbarLink href="http://local-blog.la-citadelle.net">Blog</ToolbarLink>
          </Toolbar>
        </Header>
        { this.props.children }
      </Body>
    );
  }
};

export default Layout;
