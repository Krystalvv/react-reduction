import React, { useState } from 'react';
import PropTypes from 'utils/propTypes';
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row
} from 'reactstrap';

import {
  MdKeyboardArrowDown
} from 'react-icons/md';

const Combobox = ({ items, currentItem, index, ...restProps }) => {

  const [combo1, setCombo1] = useState(items[index]);
  const toggleCombo1 = (index) => () => {
    setCombo1(items[index]);
    currentItem(items[index]);
  };

  return ( 
    <UncontrolledButtonDropdown className="combobox">
    <DropdownToggle style={{boxShadow:"none", outLine:"none"}} color="white">
      <Row className="justify-content-center" style={{ padding: "5px" }}>
        <div style={{ width: "200px" }}>{combo1}</div>
        <MdKeyboardArrowDown size={24} />
      </Row>
    </DropdownToggle>
    <DropdownMenu style={{border:"1px solid #6F7070", padding: "0px", marginLeft: "-1px", marginTop: "-10px", backgroundColor: "white" }}>
      {items.map(({ }, index) => (
        <DropdownItem onClick={toggleCombo1(index)} className="combobox_item"><div style={{ marginRight: "24px" }}>{items[index]}</div></DropdownItem>
      ))}
    </DropdownMenu>
  </UncontrolledButtonDropdown>
  );
};

Combobox.propTypes = {
items: PropTypes.arrayOf(
  PropTypes.shape({
    product: PropTypes.string,
  })
),
}

Combobox.defaultProps = {
  items: [],
  index: 0
};


export default Combobox;
