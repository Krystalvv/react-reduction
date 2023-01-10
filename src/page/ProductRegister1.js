import React, { useState } from 'react';

import {
  Row,
  Col,
  CardHeader,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap';

import {
  MdSettingsBackupRestore,
  MdUnfoldMore,
  MdUnfoldLess,
} from 'react-icons/md';

import {
  BsDot
} from 'react-icons/bs';

import Page from 'components/Page';

import Combobox from '../components/Part/ComboBox';
import InsertImage from '../components/Part/InsertImage';

const ProductRegister1 = () => {
  const categoryDep1 = ['꽃', '식물'];
  const categoryDep2 = ['전체', '꽃다발', '꽃바구니', '화분'];

  const [dep1, setDep1] = useState('꽃');
  const [dep2, setDep2] = useState('전체');
  const [isOpen, setMenuOpen] = useState(true);
  const [isOpen1, setMenuOpen1] = useState(true);
  const [isOpen2, setMenuOpen2] = useState(true);
  const [isOpen3, setMenuOpen3] = useState(true);
  const [input, setInput] = useState("");

  const currentItem1 = (x) => {
    console.log(x)
    setDep1(x)
  };
  const currentItem2 = (x) => {
    console.log(x)
    setDep2(x)
  };

  const reset = () => {

  }

  const toggleMenu = () => {
    setMenuOpen(!isOpen)
  }

  const toggleMenu1 = () => {
    setMenuOpen1(!isOpen1)
  }

  const toggleMenu2 = () => {
    setMenuOpen2(!isOpen2)
  }
  const toggleMenu3 = () => {
    setMenuOpen3(!isOpen3)
  }

  const onChangeAccount = (e) => {
    setInput(e.target.value);
  };

  return (
    <Row style={{ backgroundColor: "white" }}>
      {/* category */}
      <Col md={12}>
        <div style={{ padding: "10px", borderTop: "1px solid #8f8f8f", borderBottom: "1px solid #8f8f8f" }}>

          <CardHeader>
            <Row className="align-items-center"><BsDot style={{color: "#da4359"}}/>{'카테고리'}
              <div className="can-click" onClick={toggleMenu} style={{ marginLeft: "auto", marginRight: "10px" }}>{isOpen ? <MdUnfoldLess size={25} /> : <MdUnfoldMore style={{ color: "#da4359" }} size={25} />}</div>
            </Row>
          </CardHeader>
          {isOpen &&
            <div>
              <Row className="align-items-center" style={{ margin: "0px" }}>
                <div style={{ padding: "20px", width: "140px" }}>{'카테고리 설정'}</div>
                <Row style={{ margin: "0px" }}>
                  <Combobox items={categoryDep1} currentItem={currentItem1} />
                  <Combobox items={categoryDep2} currentItem={currentItem2} />
                </Row>
              </Row>
              <Row style={{ marginLeft: "140px" }}>
                <div className="text-center" style={{ color: "#da4359", margin: '5px 10px', maxWidth: "495px", width: '100%', height: '27px', border: "1px solid black", borderRadius: "4px" }}>
                  <strong>{dep1 + ' > ' + dep2}</strong>
                </div>
                <div className="can-click" style={{ margin: "5px 0 0 10px" }} onClick={reset}>
                  <MdSettingsBackupRestore style={{ color: "#da4359" }} />{' 초기화'}
                </div>
              </Row>
              <Row style={{ marginLeft: "140px" }}>
                <div style={{ color: "#b4b4b4", margin: '5px', width: '100%', height: '27px' }}>
                  상품과 맞지 않는 카테고리에 등록할 경우 강제 이동되거나 판매중지, 판매 금지 될 수 있습니다.
                </div>
              </Row>
            </div>
          }
        </div>
      </Col>

      {/* product name */}
      <Col md={12}>
        <div style={{ padding: "10px", borderTop: "1px solid #8f8f8f", borderBottom: "1px solid #8f8f8f" }}>

          <CardHeader>
          <Row className="align-items-center"><BsDot style={{color: "#da4359"}}/>{'상품명'}
              <div className="can-click" onClick={toggleMenu1} style={{ marginLeft: "auto", marginRight: "10px" }}>{isOpen1 ? <MdUnfoldLess size={25} /> : <MdUnfoldMore style={{ color: "#da4359" }} size={25} />}</div>
            </Row>
          </CardHeader>
          {isOpen1 &&
            <div>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <InputGroup>
                  <Input id='input' type='text' maxLength='15' onChange={onChangeAccount} />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      {input.length} / 15
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Row>
              <Row style={{ margin: "0 10px" }}>
                <div style={{ color: "#b4b4b4", margin: '5px', width: '100%', height: '27px' }}>
                판매 상품과 직접 관련이 없는 다른 상품명, 스팸성 키워드 입력 시 관리자에 의해 판매 금지될 수 있습니다.
                </div>
              </Row>
            </div>
          }
        </div>
      </Col>

      {/* product image */}
      <Col md={12}>
        <div style={{ padding: "10px", borderTop: "1px solid #8f8f8f", borderBottom: "1px solid #8f8f8f" }}>

          <CardHeader>
          <Row className="align-items-center"><BsDot style={{color: "#da4359"}}/>{'상품 이미지'}
              <div className="can-click" onClick={toggleMenu2} style={{ marginLeft: "auto", marginRight: "10px" }}>{isOpen2 ? <MdUnfoldLess size={25} /> : <MdUnfoldMore style={{ color: "#da4359" }} size={25} />}</div>
            </Row>
          </CardHeader>
          {isOpen2 &&
            <div>
              <Row className="align-items-center" style={{ margin: "15px" }}>
                <Row style={{ margin: "0px" }}>
                  <Col md={1} style={{ minWidth: "100px", padding: "10px" }}>
                    {'대표 이미지'}
                  </Col>
                  <InsertImage name="mainImage" />
                </Row>

              </Row>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <Row style={{ margin: "0px" }}>
                  <Col md={1} style={{ minWidth: "100px", padding: "10px" }}>
                    {'추가 이미지'}
                  </Col>
                  <Col>
                    <Row>
                      <InsertImage name="subImage1" />
                      <InsertImage name="subImage2" />
                      <InsertImage name="subImage3" />
                      <InsertImage name="subImage4" />
                      <InsertImage name="subImage5" />
                    </Row>
                  </Col>
                </Row>
              </Row>
            </div>
          }
        </div>
      </Col>

      {/* product description */}
      <Col md={12}>
        <div style={{ padding: "10px", borderTop: "1px solid #8f8f8f", borderBottom: "1px solid #8f8f8f" }}>

          <CardHeader>
          <Row className="align-items-center"><BsDot style={{color: "#da4359"}}/>{'상세 설명'}
              <div className="can-click" onClick={toggleMenu3} style={{ marginLeft: "auto", marginRight: "10px" }}>{isOpen1 ? <MdUnfoldLess size={25} /> : <MdUnfoldMore style={{ color: "#da4359" }} size={25} />}</div>
            </Row>
          </CardHeader>
          {isOpen3 &&
            <div>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <Col sm={12}>
                  <Input type="textarea" name="text" style={{ height: "200px" }} />
                </Col>
              </Row>
            </div>
          }
        </div>
      </Col>

    </Row>
  );
};

export default ProductRegister1;
