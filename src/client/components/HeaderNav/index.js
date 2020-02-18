import React from 'react';
import { HeaderFixed, NavContainer, NavFlexWrapper, NavLogo, NavLink } from './styles';

const HeaderNav = () => {
	return (
  <HeaderFixed>
    <NavContainer>
      <NavFlexWrapper>
        <NavLogo role="logo" aria-current="page" href="/">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="Logo React" height="20" />
          <span>React Boilerplate</span>
        </NavLogo>

        <div>
          <NavLink href="/">
            All Pokemons
          </NavLink>
          <NavLink href="/my-pokemons">
            My Pokemons
          </NavLink>
          <NavLink href="https://github.com/jackyef/react-boilerplate" target="_blank" rel="noopener">
            Github
          </NavLink>
        </div>
      </NavFlexWrapper>
    </NavContainer>
  </HeaderFixed>
	)
};

export default HeaderNav;
