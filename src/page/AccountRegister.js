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
  Button,
} from 'reactstrap';

import {
  MdSettingsBackupRestore,
  MdUnfoldMore,
  MdUnfoldLess,
  MdArrowBack,
} from 'react-icons/md';

import {
  BsDot
} from 'react-icons/bs';

import { useHistory } from 'react-router-dom';

import Page from 'components/Page';

import Combobox from '../components/Part/ComboBox';
import InsertImage from '../components/Part/InsertImage';

const AccountRegister = () => {
  const history = useHistory();
  const categoryDep1 = ['꽃', '식물'];
  const categoryDep2 = ['전체', '꽃다발', '꽃바구니', '화분'];
  const payment = ['카드결제', '현금결제', '계좌이체'];
  const purchase = ['꽃 사입', '배달료', '자사몰', '기타'];

  const [dep1, setDep1] = useState('꽃');
  const [dep2, setDep2] = useState('전체');
  const [input, setInput] = useState("");

  const currentItem = (x) => {
    console.log(x)
  };

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

  const onChangeAccount = (e) => {
    setInput(e.target.value);
  };

  const [type, setType] = useState('매출');
  const typeRadio = name => () => {
    setType(name)
  };

  return (
    <Page
      title="Input Groups"
      breadcrumbs={[{ name: 'Input Groups', active: true }]}
    >
      {/****************** title ******************/}
      <div style={{ padding: "10px", backgroundColor: "white" }}>
        <MdArrowBack className='can-click' size={30} onClick={() => history.goBack()} />
        <strong className="sales_title">가계부 등록하기</strong>
      </div>

      <div style={{ padding: "10px", backgroundColor: "white" }}>
        <Row className="align-items-center" style={{ margin: "10px" }}>
          <BsDot size={30} style={{ color: "#da4359" }} />필수항목
        </Row>

        {/****************** 매입 / 매출 ******************/}
        <Col md={12} style={{ margin: "0" }}>
          <div class="sales_inner">
            <Row className="align-items-center">
              <BsDot size={30} style={{ color: "#da4359" }} />
              <div className='sales_header'>{'매입매출설정'}</div>
              <Form style={{ margin: "10px" }}>
                <FormGroup check inline>
                  <Label check>
                    <Input value={0} type="radio" className="radio_button" checked={type === '매출'} onChange={typeRadio('매출')} />매출
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input value={1} type="radio" className="radio_button" checked={type === '매입'} onChange={typeRadio('매입')} /> 매입
                  </Label>
                </FormGroup>
              </Form>
            </Row>
          </div>
        </Col>

        {/****************** 날짜 / 시간 ******************/}
        <Col md={12}>
          <div className='sales_inner'>
            <Row className="align-items-center">
              <BsDot size={30} style={{ color: "#da4359" }} />
              <div className='sales_header'>{'날짜설정'}</div>
              <Input
                className="sales_input"
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
              />
            </Row>
          </div>
        </Col>

        <Col md={12}>
          <div className='sales_inner'>
            <Row className="align-items-center">
              <BsDot size={30} style={{ color: type === '매출' ? "#da4359" : "white" }} />
              <div className='sales_header'>{'시간설정'}</div>
              <Input
                className="sales_input"
                type="time"
                name="time"
                id="exampleDate"
                placeholder="date placeholder"
              />
            </Row>
          </div>
        </Col>

        {/****************** 카테고리 ******************/}
        {type === '매출' ?
          <Col md={12}>
            <div className='sales_inner'>
              <Row>
                <BsDot size={30} style={{ color: "#da4359" }} />
                <div className='sales_header'>{'카테고리'}</div>
                <Col style={{ margin: "0px" }}>
                  <Row style={{ marginTop: "-10px" }}>
                    <Combobox items={categoryDep1} currentItem={currentItem1} />
                    <Combobox items={categoryDep2} currentItem={currentItem2} />
                  </Row>
                  <Row>
                    <Row className="justify-content-center align-items-center" style={{ color: "#da4359", margin: '5px 10px', maxWidth: "495px", width: '100%', height: '35px', border: "1px solid #8c8c8c", borderRadius: "4px" }}>
                      <strong>{dep1 + ' > ' + dep2}</strong>
                    </Row>
                    <Row className="can-click justify-content-center align-items-center" style={{ marginLeft: "10px" }} onClick={reset}>
                      <MdSettingsBackupRestore style={{ color: "#da4359" }} />{' 초기화'}
                    </Row>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col> :
          <Col md={12}>
            <div className='sales_inner'>
              <Row className="align-items-center">
                <BsDot size={30} style={{ color: "#da4359" }} />
                <div className='sales_header'>{'카테고리'}</div>
                <Combobox items={purchase} currentItem={currentItem} />
                <MdSettingsBackupRestore style={{ color: "#da4359" }} />{' 초기화'}
              </Row>
            </div>
          </Col>
        }

        {/****************** 상품명 ******************/}
        <Col md={12}>
          <div className='sales_inner'>
            <Row className="align-items-center">
              <BsDot size={30} style={{ color: "#da4359" }} />
              <div className='sales_header'>{type === '매출' ? '상품명' : "제목"}</div>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <InputGroup style={{ width: "350px" }}>
                  <Input id='input' type='text' maxLength='15' onChange={onChangeAccount} />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      {input.length} / 15
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Row>
            </Row>
          </div>
        </Col>

        {/****************** 원가 ******************/}
        {type === '매출' &&
        <Col md={12}>
          <div className='sales_inner'>
            <Row className="align-items-center">
              <BsDot size={30} style={{ color: "white" }} />
              <div className='sales_header'>{'원가'}</div>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <InputGroup style={{ width: "350px" }} >
                  <Input id='input' type='text' placeholder="숫자만 입력" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      원
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Row>
            </Row>
          </div>
        </Col>
        }

        {/****************** 판매가 ******************/}
        <Col md={12}>
          <div className='sales_inner'>
            <Row className="align-items-center">
              <BsDot size={30} style={{ color: "#da4359" }} />
              <div className='sales_header'>{type === '매출' ? '판매가' : "금액"}</div>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <InputGroup style={{ width: "350px" }} >
                  <Input id='input' type='text' placeholder="숫자만 입력" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      원
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Row>
            </Row>
          </div>
        </Col>

        {/****************** 결제방법 ******************/}
        <Col md={12}>
          <div className='sales_inner'>
            <Row className="align-items-center">
              <BsDot size={30} style={{ color: type === '매출' ? "#da4359" : "white" }} />
              <div className='sales_header'>{'결제방법'}</div>
              <Combobox items={payment} currentItem={currentItem} />
            </Row>
          </div>
        </Col>

        {/****************** 배송 ******************/}
        {type === '매출' &&
        <Col md={12}>
          <div class="sales_inner">
            <Row className="align-items-center">
              <BsDot size={30} style={{ color: "white" }} />
              <div className='sales_header'>{'배송'}</div>
              <Form style={{ margin: "10px" }}>
                <FormGroup check inline>
                  <Label check>
                    <Input value={0} type="radio" className="radio_button" />배송
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input value={1} type="radio" className="radio_button" /> 픽업
                  </Label>
                </FormGroup>
              </Form>
            </Row>

            <div style={{ padding: "10px", backgroundColor: 'rgba(215, 215, 215, 0.25)' }}>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <div style={{ width: "100px" }}>{'주문자'}</div>
                <Input style={{ width: "300px" }} />
              </Row>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <div style={{ width: "100px" }}>{'수령인'}</div>
                <Input style={{ width: "300px" }} />
              </Row>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <div style={{ width: "100px" }}>{'주소'}</div>
                <Input style={{ width: "600px" }} />
                <Button outline color="dark" style={{ backgroundColor: "white", marginLeft: "10px" }}>주소 찾기</Button>
              </Row>
              <Row className="align-items-center" style={{ margin: "10px" }}>
                <div style={{ width: "100px" }}>{'상세주소'}</div>
                <Input style={{ width: "600px" }} />
              </Row>
            </div>
          </div>
        </Col>
        }

        {/****************** 상세내용 ******************/}
        <Col md={12}>
          <div className='sales_inner'>
            <Row className="align-items-center" style={{ marginBottom: "10px" }}>
              <BsDot size={30} style={{ color: "white" }} />
              <div className='sales_header'>{'상세내용'}</div>
            </Row>
            <Col sm={12}>
              <Input type="textarea" name="text" style={{ height: "200px" }} />
            </Col>
          </div>
        </Col>

        <div align="right" style={{ margin: "20px" }}>
          <Button onClick={() => history.goBack()} outline color="dark" style={{ marginRight: "20px", width: "100px" }}>취소</Button>
          <Button onClick={() => history.goBack()} color="dark" style={{ marginRight: "20px", width: "100px" }}>저장</Button>
        </div>
      </div>
    </Page>
  );
};

export default AccountRegister;
