import React from 'react';
import styled from 'styled-components';
import { menuItems } from '../../utils/menuItems';
import { signout } from '../../utils/icon';
import avatar from '../../img/avatar.jpeg';
function Navigation() {
  return (
    <NavStyled>
      <div className='user-con'>
        <img src={avatar} alt='' />
        <div className='text'>
          <h2>Kakashi</h2>
          <p>Your money</p>
        </div>
      </div>
      <ul className='menu-items'>
        {menuItems.map((menu, index) => {
          return (
            <li key={index}>
              {menu.icon}
              <span>{menu.title} </span>
            </li>
          );
        })}
      </ul>
      <div className='bottom-nav'>
        <li>{signout} Sign out</li>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }
  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }
`;

export default Navigation;
