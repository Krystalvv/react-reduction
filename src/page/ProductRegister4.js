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

const ProductRegister4 = () => {
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
            {/* 배송 */}
            <Col md={12}>
        <div style={{ padding: "10px", borderTop: "1px solid #8f8f8f", borderBottom: "1px solid #8f8f8f" }}>

          <CardHeader>
            <Row className="align-items-center"><BsDot style={{ color: "white" }} />
              {'배송'}
              <Form style={{ margin: "10px 30px" }}>
                <FormGroup check inline>
                  <Label check>
                    <Input value={0} type="checkbox" className="checkbox"/>배송
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input value={1} type="checkbox" className="checkbox" /> 픽업
                  </Label>
                </FormGroup>
              </Form>
            </Row>
          </CardHeader>
          {discount === 0 &&
            <div style={{ padding: "10px", backgroundColor: 'rgba(215, 215, 215, 0.25)' }}>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <BsDot style={{ color: "#da4359" }} /><div style={{ width: "100px" }}>{'배송'}</div>
                <Form style={{ margin: "10px" }}>
                <FormGroup check inline>
                  <Label check>
                    <Input value={0} type="checkbox" className="checkbox"/>바로고
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input value={1} type="checkbox" className="checkbox" /> 기타
                  </Label>
                </FormGroup>
              </Form>
              </Row>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <BsDot style={{ color: "#da4359" }} /><div style={{ width: "100px" }}>{'고객 픽업지'}</div>
                <div>
                  서울시 노원구 동일로 --1층
                </div>
                <Button outline color="dark" style={{borderRadius:"40px", marginLeft:"10px"}}>
                  주소수정
                </Button>
              </Row>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <BsDot style={{ color: "#da4359" }} /><div style={{ width: "100px" }}>{'출고지'}</div>
                <div>
                  서울시 노원구 동일로 --1층
                </div>
                <Button outline color="dark" style={{borderRadius:"40px", marginLeft:"10px"}}>
                  주소수정
                </Button>
              </Row>
            </div>
          }
        </div>
      </Col>

      {/* 검색필터 */}
      <Col md={12}>
        <div style={{ padding: "10px", borderTop: "1px solid #8f8f8f", borderBottom: "1px solid #8f8f8f" }}>

          <CardHeader>
            <Row className="align-items-center"><BsDot style={{ color: "white" }} />
              {'검색 필터 설정'}
            </Row>
          </CardHeader>
          <div>
          <Row className="align-items-center" style={{ margin: "10px", padding:"10px" }}>
                <div style={{ width: "100px" }}>{'태그'}</div>
                <Input id='input' type='text' placeholder="태그를 입력해주세요. '#'제외" style={{width:"80%"}} />
              </Row>
              <Row style={{margin:"10px 110px"}}>
              <Row className="" style={{ margin:"0 10px 0 10px" }}>
                <div style={{borderRadius:"5px", backgroundColor:"rgba(215,215,215,0.25)", padding: "5px 10px 5px 10px"}}>
                  # 라넌큘러스
                </div>
                <MdCancel className="can-click" size={15} style={{margin:"-3px 0 0 -8px"}}/>
              </Row>
              <Row className="" style={{ margin:"0 10px 0 10px" }}>
                <div style={{borderRadius:"5px", backgroundColor:"rgba(215,215,215,0.25)", padding: "5px 10px 5px 10px"}}>
                  # 꽃다발
                </div>
                <MdCancel className="can-click" size={15} style={{margin:"-3px 0 0 -8px"}}/>
              </Row>
              <Row className="" style={{ margin:"0 10px 0 10px" }}>
                <div style={{borderRadius:"5px", backgroundColor:"rgba(215,215,215,0.25)", padding: "5px 10px 5px 10px"}}>
                  # 기념일
                </div>
                <MdCancel className="can-click" size={15} style={{margin:"-3px 0 0 -8px"}}/>
              </Row>
              </Row>


              <Row className="align-items-center" style={{margin: "10px", padding:"10px" }}>
                <div style={{ width: "100px" }}>{'색상 선택'}</div>
                {colorChip.map(({color, select}, index) => (
                  <div style={{margin:"1px", border: select ? "1px solid red" : "1px solid white"}}>
                  <div className="can-click" onClick={selectColor(index)} style={{margin:"1px", borderRadius:"4px", width:'25px', height:'25px', backgroundColor:color}}/>
                  </div>
                ))}
              </Row>
              <Row className="align-items-center" style={{width:"440px", margin: "0 120px",}}>
                <div style={{ marginRight:"10px"}}>{'선택 컬러'}</div>
                {colorChip.map(({color, select}, index) => ( select &&
                  <div style={{margin:"1px", borderRadius:"3px", width:'18px', height:'18px', backgroundColor:color}}/>
                ))}
                <div className="can-click" style={{ marginLeft: "auto" }} onClick={selectColorReset}>
                  <MdSettingsBackupRestore style={{ color: "#da4359" }} />{' 초기화'}
                </div>
              </Row>

          </div>
        </div>
      </Col>

    </Row>
  );
};

export default ProductRegister4;
