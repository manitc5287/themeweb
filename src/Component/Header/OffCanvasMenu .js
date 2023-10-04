import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: balck;
  cursor: pointer;
`;

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  width: 180px;
  height: 100%;
  background-color: #000;
  color: black;
  transition: left 0.3s ease;
  z-index : 10000;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 50px 0;
`;

const MenuItem = styled.li`
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

function OffCanvasMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppWrapper>
        <MenuButton onClick={toggleMenu}>☰</MenuButton>

      <SideMenu isOpen={isMenuOpen}>
        <CloseButton onClick={()=>toggleMenu}>&times;</CloseButton>
        <MenuList>
          <MenuItem>
          <Link to="/sale">Sale</Link>
          </MenuItem>
          <MenuItem>
          <Link to="/category-bras">Bra</Link>
          </MenuItem>
          <MenuItem>
          <Link to="/category-panties">Panties</Link>
          </MenuItem>

          <MenuItem>
          <Link to="/category-lingerie">Lingerie</Link>
          </MenuItem>

          <MenuItem>
          <Link to="/category-knitwear">Knitwear</Link>
          </MenuItem>

          <MenuItem>
          <Link to="/category-pajamas">Pajama's</Link>
          </MenuItem>

          <MenuItem>
          <Link to="/collections">Collections</Link>
          </MenuItem>

          <MenuItem>
           <Link to="/category-gifts">Gifts</Link>
          </MenuItem>
        </MenuList>
      </SideMenu>
    </AppWrapper>
  );
}

export default OffCanvasMenu;


