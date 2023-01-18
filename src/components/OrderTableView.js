import React from 'react';
import PropTypes from 'utils/propTypes';

import { Table, Input, Label, FormGroup, Col, Row, Badge, } from 'reactstrap';

import {
  MdFileDownload,
  MdVerticalAlignBottom
} from 'react-icons/md';

import {
  AiOutlineFileText
} from 'react-icons/ai';

import { useHistory } from 'react-router-dom';

const OrderTableView = ({ headers, rowData, ...restProps }) => {
  const history = useHistory();
  return (
    <Table style={{ minWidth: "903px", tableLayout: "fixed" }} size="lg" hover {...restProps}>
      {/* <thead>
        <tr className="text-capitalize align-middle text-center">
          {headers.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
      </thead> */}
      <tbody>
        {rowData.map(({ id, time, trans_type, order, product, sender, receiver, payment, ...info }, index) => (
          <tr key={index}>
            <th style={{ width: "40px" }} className="align-middle" scope="row">
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" className="checkbox" />
                </Label>
              </FormGroup>
            </th>
            <td className="align-middle text-center" style={{ width: "40px", whiteSpace: "pre-wrap" }}><strong>{index + 1}</strong></td>
            <td className="text-center" style={{ width: "16%", whiteSpace: "pre-wrap" }}>
              <Col style={{ margin: "0px" }}>
                <Badge color={info.new === 1 ? "warning" : "white"} pill className="mr-1">
                  {info.new === 1 ? 'New' : ''}
                </Badge>
                <div>{order.date}</div>
              </Col>
            </td>
            <td className="align-middle text-center" style={{ width: "9%", whiteSpace: "pre-wrap" }}>{order.state}</td>
            <td className="align-middle" style={{ width: "400px", whiteSpace: "pre-wrap" }}>
              <Row style={{ margin: "0px" }}>
                {trans_type === 0 &&
                  <Badge color="primary" pill className="mr-1" style={{ display: "fixed", height: "20px", marginTop: "2px" }}>
                    배송
                  </Badge>
                }
                {trans_type === 1 &&
                  <Badge color="secondary" pill className="mr-1" style={{ display: "fixed", height: "20px", marginTop: "2px" }}>
                    픽업
                  </Badge>
                }
                <Col style={{ margin: "0px" }}>
                  <div>{order.number} {product.name}</div>
                  <div>{trans_type === 0 ? receiver.address : ' '}</div>
                  <div>{sender.name} &rarr; {receiver.name} {sender.date} </div>
                </Col>
              </Row>
            </td>
            <td className="align-middle text-center" style={{ width: "10%", whiteSpace: "pre-wrap" }}>{payment.method}{'\n'}{payment.cost}</td>
            <td className="align-middle" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', wordBreak: 'break-all', overflow: 'hidden' }}>{sender.comment}</td>
            <td style={{ width: "12%" }} className="align-middle text-center">

              <AiOutlineFileText size={30} onClick={() => {
                history.push({
                  pathname: `/order-detail`,
                  state: { index : index }
                })
              }} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default OrderTableView;
