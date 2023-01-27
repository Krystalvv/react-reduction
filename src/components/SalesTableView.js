import React, { useState } from 'react';
import PropTypes from 'utils/propTypes';
import { ProductSlider } from './Part/Carousel';

import {
  Table,
  Input,
  Label,
  FormGroup,
  Col,
  Row,
  Badge,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button
} from 'reactstrap';

import {
  MdReceipt,
  MdVerticalAlignBottom,
} from 'react-icons/md'

import {
  AiFillHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai'

import {
  BsChat
} from 'react-icons/bs'
import { useHistory } from 'react-router-dom';

const SalesTableView = ({ headers, rowData, filter, item, ...restProps }) => {
  const [isOpen, setOpen] = useState(false);
  const [selIndex, setIndex] = useState(false);

  const toggle = () => () => {
    setOpen(!isOpen);
  };

  const productView = (index) => () => {
    setOpen(!isOpen);
    setIndex(index);
  };

  const history = useHistory();

  return (
    <Table relative style={{ minWidth: "1100px" }} hover {...restProps}>
      <tbody>
        {rowData.map(({ date, type, order_number, product_name, total_cost, payment, method,  ...info }, index) => (filter === 'type' && ( item === type || item === '전체')) && (restProps.filter1 ? restProps.filter1 === 'method' && restProps.item1 === method : true) && (
          <tr key={index}>
            <th className="align-middle" scope="row">
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" className="checkbox" />
                </Label>
              </FormGroup>
            </th>
            <td className="align-middle text-center" style={{padding:"25px"}}><strong>{index + 1}</strong></td>
            <td className="align-middle text-center">{date}</td>
            <td className="align-middle text-center">{type}</td>
            <td className="align-middle text-center">{order_number}</td>
            <td className="align-middle text-center">{product_name}</td>
            <td className="align-middle text-center">{total_cost} {`(${payment})`}</td>
            <td className="align-middle text-center">{method}</td>
            <td className="align-middle text-center"><MdReceipt size={25}/></td>
          </tr>

        ))}
      </tbody>
    </Table>
  );
};

export default SalesTableView;
