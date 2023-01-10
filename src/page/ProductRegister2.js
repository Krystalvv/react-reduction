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
} from 'reactstrap';

import {
  MdUnfoldMore,
  MdUnfoldLess,
} from 'react-icons/md';

import {
  BsDot
} from 'react-icons/bs';

const ProductRegister2 = () => {
  const buttons = ['3일', '5일', '7일', '15일', '30일'];
  const vat = ['과세상품', '면세상품', '영세상품'];

  const [isOpen, setMenuOpen] = useState(true);
  const [isOpen1, setMenuOpen1] = useState(true);

  const [discount, setDiscount] = useState(0);
  const [saleDate, setSaleDate] = useState(0);
  const [timeSale, setTimeSale] = useState(true);
  const [unit, setUnit] = useState(true);
  const [selButton, setButton] = useState(0);

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
      {/* 원가 */}
      <Col md={12}>
        <div style={{ padding: "10px", borderTop: "1px solid #8f8f8f", borderBottom: "1px solid #8f8f8f" }}>

          <CardHeader>
            <Row className="align-items-center"><BsDot style={{ color: "#da4359" }} />{'원가'}
              <div className="can-click" onClick={toggleMenu} style={{ marginLeft: "auto", marginRight: "10px" }}>{isOpen ? <MdUnfoldLess size={25} /> : <MdUnfoldMore style={{ color: "#da4359" }} size={25} />}</div>
            </Row>
          </CardHeader>
          {isOpen &&
            <div>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <InputGroup style={{ width: "250px" }} >
                  <Input id='input' type='text' placeholder="숫자만 입력" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      원
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Row>
              <Row style={{ margin: "0 10px" }}>
                <div style={{ color: "#b4b4b4", margin: '5px', width: '100%', height: '27px' }}>
                  매출 계산 시 적용됩니다.
                </div>
              </Row>
            </div>
          }
        </div>
      </Col>

      {/* 판매가 */}
      <Col md={12}>
        <div style={{ padding: "10px", borderTop: "1px solid #8f8f8f", borderBottom: "1px solid #8f8f8f" }}>

          <CardHeader>
            <Row className="align-items-center"><BsDot style={{ color: "#da4359" }} />{'판매가'}
              <div className="can-click" onClick={toggleMenu1} style={{ marginLeft: "auto", marginRight: "10px" }}>{isOpen1 ? <MdUnfoldLess size={25} /> : <MdUnfoldMore style={{ color: "#da4359" }} size={25} />}</div>
            </Row>
          </CardHeader>
          {isOpen1 &&
            <div>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <InputGroup style={{ width: "250px" }} >
                  <Input id='input' type='text' placeholder="숫자만 입력" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      원
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Row>
              <Row style={{ margin: "0 10px" }}>
                <Row style={{ color: "#b4b4b4", margin: '5px', width: '100%' }}>
                  <div>{'플릿을 통한 거래는 수수료가 발생합니다.'}</div> &nbsp;
                  <div className='can-click'>{'수수료 안내 >'}</div>
                </Row>
              </Row>
            </div>
          }
        </div>
      </Col>

      {/* 할인 */}
      <Col md={12}>
        <div style={{ padding: "10px", borderTop: "1px solid #8f8f8f", borderBottom: "1px solid #8f8f8f" }}>

          <CardHeader>
            <Row className="align-items-center"><BsDot style={{ color: "white" }} />
              {'할인'}
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
                <BsDot style={{ color: "#da4359" }} /><div style={{ width: "100px" }}>{'기본할인'}</div>
                <InputGroup style={{ width: "250px" }} >
                  <Input id='input' type='text' placeholder="숫자만 입력" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText className="can-click" onClick={toggleUnit}>
                      {unit ? '원' : "%"}
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Row>
              <Row style={{ margin: "0 120px" }}>
                <Row style={{ color: "#b4b4b4", margin: '5px', width: '100%' }}>
                  <div>판매가에서 즉시 할인된 가격으로 상품을 판매할 수 있습니다.</div>
                </Row>
              </Row>
              <Row style={{ margin: "0 140px" }}>
                <Row style={{ margin: '5px', width: '100%' }}>
                  <Label check>
                    <Input type="checkbox" className="checkbox" checked={timeSale} onChange={checkTimeSale} /><div style={{ marginLeft: "10px" }}>특정 기간만 할인</div>
                  </Label>
                </Row>
              </Row>
              {timeSale && <Row className="align-items-center" style={{ margin: "0 110px" }}>
                <Input
                  type="date"
                  name="date"
                  id="exampleDate"
                  placeholder="date placeholder"
                  className="align-middle"
                  style={{ margin: "10px", width: "237px", height: "28px", fontSize: "14px" }}
                /><div className="text-center" style={{ width: "20px" }}>{'~'}</div>
                <Input
                  type="date"
                  name="date"
                  id="exampleDate"
                  placeholder="date placeholder"
                  style={{ margin: "10px", width: "237px", height: "28px", fontSize: "14px" }}
                />
              </Row>
              }
              <div style={{ borderTop: "1px solid #8f8f8f" }} />
              <Row className="align-middle" style={{ margin: "10px 120px" }}>
                <div>할인가</div>
                <div className="text-right" style={{ width: "200px" }}>
                  <div style={{ fontSize: "18px", color: "#da4359" }}>0</div>
                </div>
                <div>{'원(0원 할인)'}</div>
              </Row>
            </div>
          }
        </div>
      </Col>

      {/* 판매기간 */}
      <Col md={12}>
        <div style={{ padding: "10px", borderTop: "1px solid #8f8f8f", borderBottom: "1px solid #8f8f8f" }}>

          <CardHeader>
            <Row className="align-items-center"><BsDot style={{ color: "white" }} />
              {'판매기간'}
              <Form style={{ margin: "10px 30px" }}>
                <FormGroup check inline>
                  <Label check>
                    <Input value={0} type="radio" className="radio_button" checked={saleDate === 0} onChange={saleDateRadio(0)} />설정함
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input value={1} type="radio" className="radio_button" checked={saleDate === 1} onChange={saleDateRadio(1)} /> 설정안함
                  </Label>
                </FormGroup>
              </Form>
            </Row>
          </CardHeader>
          {saleDate === 0 &&
            <div style={{ padding: "10px", backgroundColor: 'rgba(215, 215, 215, 0.25)' }}>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <BsDot style={{ color: "#da4359" }} /><div style={{ width: "100px" }}>{'기간설정'}</div>
                <ButtonGroup style={{ margin: "10px 0" }} size="sm">
                  {buttons.map(({ }, index) => (
                    <Button onClick={toggleButtonGroup(index)} outline color={index === selButton ? "secondary" : "dark"} className="button_item">{buttons[index]}</Button>

                  ))}
                </ButtonGroup>
              </Row>
              <Row className="align-items-center" style={{ margin: "0 110px" }}>
                <Input
                  type="date"
                  name="date"
                  id="exampleDate"
                  placeholder="date placeholder"
                  className="align-middle"
                  style={{ margin: "10px", width: "237px", height: "28px", fontSize: "14px" }}
                /><div className="text-center" style={{ width: "20px" }}>{'~'}</div>
                <Input
                  type="date"
                  name="date"
                  id="exampleDate"
                  placeholder="date placeholder"
                  style={{ margin: "10px", width: "237px", height: "28px", fontSize: "14px" }}
                />
              </Row>
            </div>
          }
        </div>
      </Col>

      {/* 부가세 */}
      <Col md={12}>
        <div style={{ padding: "10px", borderTop: "1px solid #8f8f8f", borderBottom: "1px solid #8f8f8f" }}>

          <CardHeader>
            <Row className="align-items-center"><BsDot style={{ color: "white" }} />
            {'부가세'}
            <ButtonGroup style={{ margin: "0 40px" }} size="sm">
                  {vat.map(({ }, index) => (
                    <Button onClick={toggleButtonGroup(index)} outline color={index === selButton ? "secondary" : "dark"} className="button_item" style={{width:"90px"}}>{vat[index]}</Button>

                  ))}
                </ButtonGroup>
            </Row>
          </CardHeader>
        </div>
      </Col>

    </Row>
  );
};

export default ProductRegister2;
