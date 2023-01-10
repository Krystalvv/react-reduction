import Page from 'components/Page';
import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
  Button,
  ButtonGroup,
  Input,
  Form,
  FormGroup,
  Label
} from 'reactstrap';

import {
  MdKeyboardArrowDown,
  MdUnfoldMore,
  MdUnfoldLess,
  MdSettingsBackupRestore
} from 'react-icons/md';

import OrderTableView from 'components/OrderTableView';
import {
  orderTableData,
} from 'demos/dashboardPage';
import Combobox from '../components/Part/ComboBox';

const OrderPage = () => {
  const searchDate = ['주문 접수 일', '예약일'];
  const categoryDep1 = ['꽃', '식물'];
  const categoryDep2 = ['전체', '꽃다발', '꽃바구니', '화분'];
  const detailSearch = ['주문번호', '보내는 사람', '받는 사람', '주소'];
  const buttons = ['오늘', '1주일', '1개월', '3개월'];
  const [category, setOpen] = useState(0);
  const [selButton, setButton] = useState(0);
  const [isOpen, setMenuOpen] = useState(false);

  const currentItem = (x) => {
    console.log(x);
  };

  const reset = () => {

  }

  const toggle = (index) => () => {
    setOpen(index);
  };

  const toggleMenu = () => {
    setMenuOpen(!isOpen)
  }

  const toggleButtonGroup = (index) => () => {
    setButton(index);
  };

  return (
    <Page
      title="Tables"
      breadcrumbs={[{ name: 'tables', active: true }]}
      className="TablePage"
    >
      {/* tab button */}
      <div style={{ backgroundColor: "white" }}>
        <ButtonGroup style={{ padding: "10px 10px 0 10px" }}>
          <Button
            onClick={toggle(0)}
            color=""
            className={category === 0 ? "category_button_active" : "category_button"}
          >
            주문조회
          </Button>
          <Button
            onClick={toggle(1)}
            color=""
            className={category === 1 ? "category_button_active" : "category_button"}
          >
            정기배송조회
          </Button>
        </ButtonGroup>
      </div>

      {/* filter */}
      <div style={{ padding: "0 20px", backgroundColor: "white" }}>
        <Col style={{ padding: "10px", borderTop: "1px solid #8f8f8f", borderBottom: "1px solid #8f8f8f" }}>
          <Row className="align-items-center" style={{ margin: "0px" }}>
            <div style={{ width: "100px" }}>{'조회기간'}</div>
            <Combobox items={searchDate} currentItem={currentItem}/>
            <div className="can-click" onClick={toggleMenu} style={{ marginLeft: "auto", marginRight: "10px" }}>{isOpen ? <MdUnfoldLess style={{ color: "#da4359" }} size={25} /> : <MdUnfoldMore size={25} />}</div>
          </Row>
          <Row style={{ marginLeft: "100px" }}>
            <ButtonGroup style={{ margin: "10px" }} size="sm">
              {buttons.map(({ }, index) => (
                <Button onClick={toggleButtonGroup(index)} outline color={index === selButton ? "secondary" : "dark"} className="button_item">{buttons[index]}</Button>

              ))}
            </ButtonGroup>
            <Row className="align-items-center" style={{ margin: "0px" }}>
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
          </Row>
          {isOpen &&
            <Row className="align-items-center" style={{ margin: "0px" }}>
              <div style={{ width: "100px" }}>{'카테고리'}</div>
              <Row style={{ margin: "0px" }}>
                <Combobox items={categoryDep1} currentItem={currentItem}/>
                <Combobox items={categoryDep2} currentItem={currentItem}/>
              </Row>
            </Row>
          }
          {isOpen &&
            <div>
              <Row className="align-items-center" style={{ margin: "0px" }}>
                <div style={{ width: "100px" }}>{'상세검색'}</div>
                <Combobox items={detailSearch} currentItem={currentItem}/>
              </Row>

              <Row className="align-items-center" style={{ margin: "0px" }}>
                <div className="can-click" style={{ marginLeft: "auto" }} onClick={reset}>
                  <MdSettingsBackupRestore style={{ color: "#da4359" }} />{' 초기화'}
                </div>
              </Row>
            </div>
          }
        </Col>

        <Row className="align-items-center justify-content-center" style={{ padding: "10px" }}>
          <Button outline color="secondary" style={{ backgroundColor: "white", color: "black", borderRadius: "30px", padding: "5px 30px 5px 30px" }}>검색</Button>
        </Row>

      </div>
      <Row>
        <Col>
          <div style={{ padding: "20px", backgroundColor: "white" }}>
            <Form style={{ margin: "10px" }}>
              <FormGroup check inline>
                <Label check>
                  <Input type="radio" className="radio_button" />전체
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="radio" className="radio_button" /> 배송
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="radio" className="radio_button" /> 픽업
                </Label>
              </FormGroup>
            </Form>
            <Form style={{ margin: "10px" }}>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" className="checkbox" />미접수
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" className="checkbox" /> 거부
                </Label>
              </FormGroup>
            </Form>

            <div style={{ margin: "10px" }}>
              {'(총 5 / 100 개)'}
            </div>

            <OrderTableView
              rowData={orderTableData} />
            <Row style={{ margin: "0px" }}>
              <Button style={{ width: "123px"}} outline color="dark">전체선택</Button>
              <Button style={{ width: "123px", marginLeft: "10px" }} outline color="dark">선택삭제</Button>
            </Row>
            <Row className="align-items-center justify-content-center">
            <ButtonGroup size="sm">
                <Button className="pagination_sel" color="">1</Button>
                <Button className="pagination" color="">2</Button>
                <Button className="pagination" color="">3</Button>
                <Button className="pagination" color="">4</Button>
                <Button className="pagination" color="">5</Button>
            </ButtonGroup>
            </Row>
          </div>
        </Col>
      </Row>
    </Page>
  );
};

export default OrderPage;
