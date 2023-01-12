import React, { useState } from 'react';

import {
  Row,
  Col,
  CardHeader,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Form,
  FormGroup,
  Label,
  ButtonGroup,
  Button,
  Table
} from 'reactstrap';

import {
  MdUnfoldMore,
  MdUnfoldLess,
  MdCancel,
  MdSettingsBackupRestore
} from 'react-icons/md';

import {
  BsDot
} from 'react-icons/bs';
import Combobox from '../components/Part/ComboBox';

const ProductRegister3 = () => {
  const buttons = ['3일', '5일', '7일', '15일', '30일'];
  const vat = ['과세상품', '면세상품', '영세상품'];
  const count = ['1개', '2개', '3개', '4개', '5개'];
  const sort = ['둥록순', '가격순'];

  const [isOpen, setMenuOpen] = useState(true);
  const [isOpen1, setMenuOpen1] = useState(true);

  const [discount, setDiscount] = useState(0);
  const [saleDate, setSaleDate] = useState(0);
  const [timeSale, setTimeSale] = useState(true);
  const [unit, setUnit] = useState(true);
  const [selButton, setButton] = useState(0);
  const [colorChip, setColorChip] = useState(
    [
      {color:'#FF0000', select: false},
      {color:'#FF5001', select: false}, 
      {color:'#FFB800', select: false}, 
      {color:'#FFE403', select: false}, 
      {color:'#93F52F', select: false}, 
      {color:'#009125', select: false}, 
      {color:'#6CEBFF', select: false}, 
      {color:'#487CE5', select: false}, 
      {color:'#6A33C1', select: false}, 
      {color:'#FFB2F3', select: false}, 
      {color:'#FF509F', select: false}, 
      {color:'#707070', select: false}, 
      {color:'#B9BDC4', select: false}, 
      {color:'#000000', select: false}
    ]
  );

  const selectColor = (index) => () => {
    setColorChip(
    colorChip.map(({color, select}, i) => (
      i === index ? {color:color, select:!select} : {color:color, select:select}
    )))
  }

  const selectColorReset = () => {
    setColorChip(
      colorChip.map(({color, select}, i) => (
        { color:color, select:false}
      )))
  }

  const currentItem = (x) => {
    console.log(x);
  };

  const toggleButtonGroup = (index) => () => {
    setButton(index);
  };

  const toggleUnit = () => {
    setUnit(!unit);
  }

  const checkTimeSale = () => {
    setTimeSale(!timeSale);
  }

  const discountRadio = index => () => {
    setDiscount(index)
  };

  const saleDateRadio = index => () => {
    setSaleDate(index)
  };

  const toggleMenu = () => {
    setMenuOpen(!isOpen)
  }

  const toggleMenu1 = () => {
    setMenuOpen1(!isOpen1)
  }

  return (
    <Row style={{ backgroundColor: "white" }}>
      {/* 옵션 */}
      <Col md={12}>
        <div style={{ padding: "10px", borderTop: "1px solid #8f8f8f", borderBottom: "1px solid #8f8f8f" }}>

          <CardHeader>
            <Row className="align-items-center"><BsDot style={{ color: "white" }} />
              {'옵션'}
              <Form style={{ margin: "10px 30px" }}>
                <FormGroup check inline>
                  <Label check>
                    <Input value={0} type="radio" className="radio_button" checked={discount === 0} onChange={discountRadio(0)} />설정함
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input value={1} type="radio" className="radio_button" checked={discount === 1} onChange={discountRadio(1)} /> 설정안함
                  </Label>
                </FormGroup>
              </Form>
            </Row>
          </CardHeader>
          {discount === 0 &&
            <div style={{ padding: "10px", backgroundColor: 'rgba(215, 215, 215, 0.25)' }}>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <BsDot style={{ color: "#da4359" }} /><div style={{ width: "100px" }}>{'옵션개수'}</div>
                <Combobox items={count} currentItem={currentItem} />
              </Row>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <BsDot style={{ color: "#da4359" }} /><div style={{ width: "100px" }}>{'정렬순서'}</div>
                <Combobox items={sort} currentItem={currentItem} />
              </Row>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <BsDot style={{ color: "#da4359" }} /><div style={{ width: "100px" }}>{'옵션입력'}</div>
                <div style={{ margin: "10px" }}>옵션명</div>
                <Input id='input' type='text' placeholder="예시) 꽃 이름 + 컬러" style={{ width: "250px" }} />
                <div style={{ margin: "10px" }}>가격</div>
                <InputGroup style={{ width: "250px" }} >
                  <Input id='input' type='text' placeholder="숫자만 입력" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText className="can-click" onClick={toggleUnit}>
                      {unit ? '원' : "%"}
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                <Button color="dark" style={{ margin: "10px" }} >+</Button>
              </Row>
              <div style={{ borderTop: "1px solid #8f8f8f" }} />
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <BsDot style={{ color: "#da4359" }} /><div style={{ width: "100px" }}>{'옵션 목록'}</div>
                <Button outline color="dark">선택삭제</Button>
              </Row>
              <Row style={{ margin: "10px 120px", padding: "10px" }}>
                <Table bordered style={{ backgroundColor: "white" }}>
                  <thead>
                    <tr>
                      <th className="align-middle" scope="row" width={40}>
                        <FormGroup check inline>
                          <Label check>
                            <Input type="checkbox" className="checkbox" />
                          </Label>
                        </FormGroup>
                      </th>
                      <th className="align-middle text-center">NO</th>
                      <th className="align-middle text-center">옵션명+가격</th>
                      <th className="align-middle text-center">사용여부</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="align-middle" scope="row" width={40}>
                        <FormGroup check inline>
                          <Label check>
                            <Input type="checkbox" className="checkbox" />
                          </Label>
                        </FormGroup>
                      </th>
                      <td className="align-middle text-center"><strong>{1}</strong></td>
                      <td className="align-middle text-center">{'빨간장미 + 3,000원'}</td>
                      <td className="align-middle text-center">{'Y'}</td>

                    </tr>
                  </tbody>
                </Table>
              </Row>
            </div>
          }
        </div>
      </Col>
    </Row>
  );
};

export default ProductRegister3;
