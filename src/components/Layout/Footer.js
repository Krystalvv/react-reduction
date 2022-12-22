import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem style={{whiteSpace:"pre-wrap"}}>
          <strong>사업장 소재지 </strong>{'(01849) 서울특별시 노원구 동일로 174길 27 (27, Dongil-ro 174-gil, Nowon-gu, Soeul, Republic of Korea)\n'}
          <strong>대표 </strong>{'전엄지'} <strong>사업자등록번호 </strong>{'209-27-65193 '} &copy; {' 2022. ILLI All rights reserved'}
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
