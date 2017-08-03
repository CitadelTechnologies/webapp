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
  color: 'black'
});

const Title = glamorous.h1({
  width: '20%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
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

const Layout = ({ children }) => (
  <Body>
    <Header>
      <Title>
        <Logo picture="/static/images/blason.png" />
        La Citadelle
      </Title>
      <Toolbar>
        <Link href="http://local-blog.la-citadelle.net">
          <ToolbarLink>Blog</ToolbarLink>
        </Link>
      </Toolbar>
    </Header>
    { children }
  </Body>
);

export default Layout;
