import React from 'react';
import { Nav, NavCoontainer, NavLink, HamburgerMenu } from './Elements.styled';
import { useTheme } from '../../hooks/useTheme';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { themeToggler, selectedTheme } = useTheme();
  return (
    <Nav>
      <NavCoontainer>
        <NavLink activeClass="active" to="title" spy smooth>
          About Me
        </NavLink>
        <NavLink activeClass="active" to="test2" spy smooth>
          Experience
        </NavLink>
        <NavLink activeClass="active" to="test3" spy smooth>
          My projects
        </NavLink>
        <NavLink activeClass="active" to="test4" spy smooth>
          Skills
        </NavLink>
      </NavCoontainer>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 45 }}
        whileTap={{ scale: 0.9 }}
        onClick={themeToggler}>
        {selectedTheme === 'light' ? <FiSun size="2em" /> : <FiMoon size="2em" />}
      </motion.div>
      <HamburgerMenu
        onClick={themeToggler}
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        <FiMenu size="2em" />
      </HamburgerMenu>
    </Nav>
  );
};

export default Navbar;
