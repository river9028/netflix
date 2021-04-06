import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Background,
  Feature,
  FeatureCallOut,
  Container,
  Logo,
  ButtonLink,
  Text,
  Link,
  Group,
  Picture,
  Dropdown,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, children, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((preSearchActive) => !preSearchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps}>{children}</Logo>
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.TextLink = function HeaderTextLink({ active, children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};
