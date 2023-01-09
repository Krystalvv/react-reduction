import React from 'react';
import PropTypes from 'utils/propTypes';

import { Table, Input, Label, FormGroup, Col, Row, Badge } from 'reactstrap';

import
{
  MdFileDownload,
  MdVerticalAlignBottom
} from 'react-icons/md'

const OrderTableView = ({ headers, rowData, ...restProps }) => {
  return (
    <Table style={{ minWidth:"903px", tableLayout: "fixed" }} size="lg" hover {...restProps}>
      {/* <thead>
        <tr className="text-capitalize align-middle text-center">
          {headers.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
      </thead> */}
      <tbody>
        {rowData.map(({ date, state, payment, comment, ...info }, index) => (
          <tr key={index}>
            <th style={{ width: "40px" }} className="align-middle" scope="row">
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" className="checkbox" />
                </Label>
              </FormGroup>
            </th>
            <td className="align-middle text-center" style={{width:"40px", whiteSpace: "pre-wrap" }}><strong>{index + 1}</strong></td>
            <td className="text-center" style={{width:"16%", whiteSpace: "pre-wrap" }}>
              <Col style={{ margin: "0px" }}>
                  <Badge color={info.new === 1 ? "warning" : "white"} pill className="mr-1">
                  {info.new === 1 ? 'New' : ''}
                  </Badge>
                <div>{date}</div>
              </Col>
              </td>
            <td className="align-middle text-center" style={{width:"9%", whiteSpace: "pre-wrap" }}>{state}</td>
            <td className="align-middle" style={{ width:"400px", whiteSpace: "pre-wrap" }}>
              <Row style={{margin:"0px"}}>
                {info.carry === 0 &&
                  <Badge color="primary" pill className="mr-1" style={{ display: "fixed", height: "20px", marginTop: "2px" }}>
                    배송
                  </Badge>
                }
                {info.carry === 1 &&
                  <Badge color="secondary" pill className="mr-1" style={{ display: "fixed", height: "20px", marginTop: "2px" }}>
                    픽업
                  </Badge>
                }
                <Col style={{ margin: "0px" }}>
                  <div>{info.order_number} {info.order_product}</div>
                    <div>{info.carry === 0 ? info.order_address : ' '}</div>
                  <div>{info.order_from} &rarr; {info.order_to} {info.order_date} </div>
                </Col>
              </Row>
            </td>
            <td className="align-middle text-center" style={{ width:"10%", whiteSpace: "pre-wrap" }}>{payment}</td>
            <td className="align-middle" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', wordBreak: 'break-all', overflow: 'hidden' }}>{comment}</td>
            <td style={{ width: "4%" }} className="align-middle text-center"><MdVerticalAlignBottom size={25}/></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default OrderTableView;
