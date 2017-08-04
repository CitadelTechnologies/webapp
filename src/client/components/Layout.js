import glamorous from 'glamorous';
import Router from 'next/router';

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
      <Title onClick={() => Router.push("/")}>
        <Logo picture="/static/images/blason.png" />
        La Citadelle
      </Title>
      <Toolbar>
          <ToolbarLink onClick={() => Router.push("/projects")}>Projets</ToolbarLink>
          <ToolbarLink href="http://local-blog.la-citadelle.net">Blog</ToolbarLink>
      </Toolbar>
    </Header>
    { children }
  </Body>
);

export default Layout;
