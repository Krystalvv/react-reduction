import Page from 'components/Page';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

import { MdArrowBack } from 'react-icons/md'

import Combobox from '../components/Part/ComboBox';

import Barogo from '../assets/img/icons/barogo_logo.png';

import { useParams } from 'react-router-dom';
import { orderDemoData } from 'demos/dashboardPage';

const currentItem = (x) => {
  console.log(x);
};

function splitLine() {
  return (
    <div style={{
      height: '4px',
      backgroundColor: "#f3f3f3",
      borderTop: '1px solid #d9d9d9',
      margin: "0 20px 0px 20px"
    }}></div>
  )
}

function subTitle(title) {
  return (
    <div>
      {splitLine()}
      <div style={{ flexDirection: "row", padding: "7px" }}>
        <Row style={{ margin: "0 20px 0 20px" }}>
          <div style={{ fontWeight: "bold" }}>{title}</div>
        </Row>
      </div>
    </div>
  )
}

const OrderDetailPage = ({ match }) => {
  const { id } = useParams();
  const data = orderDemoData[0]
  const delivery = ['배송(바로고)', '배송(일반)', '픽업']

  return (
    <Page style={{ backgroundColor: "white" }}>
      {/* <NavLink className="nav-link can-click" to={`/order`}>
        <MdArrowBack size={30} />
      </NavLink> */}
      <div style={{ padding: '20px', margin: "auto", maxWidth: "1200px", backgroundColor: "white" }}>
        <div style={{ flexDirection: "row", padding: "7px" }}>
          <Row style={{ margin: "0 20px 0 20px" }}>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>주문 정보 상세</div>
          </Row>
        </div>
        {splitLine()}
        <Col md={12}>
          <Row style={{ margin: "10px" }}>
            <div>주문번호 :&nbsp;</div>
            <div>{data.order.number}</div>
            <div>&nbsp; | 주문일자 :&nbsp;</div>
            <div>{data.order.date}</div>
          </Row>
        </Col>

        {subTitle('주문상품')}

        <Row className="align-items-center" style={{ margin: "0 20px 0 20px", width: "100%", height: "100%" }}>
          <img src={data.product.image} style={{ width: "100px", height: "auto" }}></img>
          <div>
            <div style={{ margin: "10px" }}>{data.product.name}{"("}{data.product.number}{")"}</div>
            <Row style={{ margin: "5px" }}>
              {data.product.option.map(({ }, i) => (
                <div style={{ margin: "5px", color: "#8c8c8c" }}>{data.product.option[i]} {i < data.product.option.length - 1 ? "/" : ""}</div>
              ))}
            </Row>
            <div style={{ fontWeight: "bold", margin: "10px" }}>{data.product.cost}&nbsp; | &nbsp;{data.product.count}</div>
          </div>
        </Row>

        {subTitle('상태 정보')}

        {subTitle('주문자 정보')}
        <Row style={{ margin: "10px" }}>
          <Col md={1}></Col>
          <Col md={10}>
            <Row style={{ margin: "0 10px" }}>
              <div style={{ width: "150px" }}>주문자</div>
              <div>{data.sender.name}</div></Row>
            <Row style={{ margin: "10px" }}>
              <div style={{ width: "150px" }}>전화</div>
              <div>{data.sender.number}</div></Row>
            <Row style={{ margin: "10px" }}>
              <div style={{ width: "150px" }}>배송 희망일</div>
              <div>{data.sender.date}</div></Row>
            <Row style={{ margin: "10px" }}>
              <div style={{ width: "150px" }}>요청사항</div>
              <div>{data.sender.comment}</div></Row>
          </Col>
        </Row>

        {subTitle('수령인 정보')}
        <Row style={{ margin: "10px" }}>
          <Col md={1}></Col>
          <Col md={10}>
            <Row style={{ margin: "0 10px" }}>
              <div style={{ width: "150px" }}>수령인</div>
              <div>{data.receiver.name}</div></Row>
            <Row style={{ margin: "10px" }}>
              <div style={{ width: "150px" }}>전화</div>
              <div>{data.receiver.number}</div></Row>
            <Row style={{ margin: "10px" }}>
              <div style={{ width: "150px" }}>주소</div>
              <div>
                <div>{data.receiver.zipCode}</div>
                <div>{data.receiver.address}</div>
              </div>
            </Row>
            <Row style={{ margin: "10px" }}>
              <div style={{ width: "150px" }}>상세주소</div>
              <div>{data.receiver.detail_address}</div></Row>
          </Col>
        </Row>

        {subTitle('결제 정보')}
        <Row style={{ margin: "10px" }}>
          <Col md={1}></Col>
          <Col md={10}>
            <Row style={{ margin: "0 10px" }}>
              <div style={{ width: "150px" }}>방법</div>
              <div>{data.payment.method}</div></Row>
            <Row style={{ margin: "10px" }}>
              <div style={{ width: "150px" }}>금액</div>
              <div>{data.product.cost}</div></Row>
            <Row style={{ margin: "10px" }}>
              <div style={{ width: "150px" }}>배송비</div>
              <div>{data.payment.delivery}</div>
            </Row>
          </Col>
          <Row style={{ width: "100%", margin: "0 10px 0 10px", padding: "20px 110px", backgroundColor: "#e8e8e8", fontWeight: "bold", borderTop: "1px solid #d9d9d9" }}>
            <div style={{ width: "150px" }}>총 결제금액</div>
            <div>{data.payment.cost}</div>
          </Row>
        </Row>

        {subTitle('배송 정보')}
        <Row style={{ margin: "10px" }}>
          <Col md={1}></Col>
          <Col md={10}>
            <Row style={{ margin: "0" }}>
              <Combobox items={delivery} currentItem={currentItem} /></Row>
            <Row style={{ margin: "10px" }}>
              <div style={{ width: "150px" }}>바로고</div>
              <div>{data.barogo.point}</div></Row>
            <Row style={{ margin: "10px" }}>
              <div style={{ width: "150px" }}>라이더</div>
              <div>{data.barogo.rider_name}&nbsp;|&nbsp;{data.barogo.rider_number}</div>
            </Row>
          </Col>
        </Row>
        <Row style={{ width: "100%", margin: "0", padding: "10px", backgroundColor: "#e8e8e8", borderTop: "1px solid #d9d9d9" }}>
          <Col md={1}></Col>
          <Col md={10}>
            <Row style={{ margin: "10px" }}>
              <img width="25px" src={Barogo} />
              <div>&nbsp;바로고</div>
              <div style={{ marginLeft: "auto" }}>대행료 합계 {data.barogo.total}</div>
            </Row>
            <div style={{
              height: '1px',
              backgroundColor: "#f3f3f3",
              borderTop: '1px solid #d9d9d9',
            }}></div>
            <Row style={{ margin: "10px", color: "#8c8c8c" }}>
              <div>거리 비례 대행료&nbsp;{`(거리${data.barogo.distance})`}</div>
              <div style={{ marginLeft: "auto" }}>{data.barogo.distance_fee}</div>
            </Row>
            <Row style={{ margin: "10px", color: "#8c8c8c" }}>
              <div>우천할증</div>
              <div style={{ marginLeft: "auto" }}>{data.barogo.weather}</div>
            </Row>
            <Row style={{ margin: "10px", color: "#8c8c8c" }}>
              <div>부가세</div>
              <div style={{ marginLeft: "auto" }}>{data.barogo.vat}</div>
            </Row>
          </Col>
        </Row>

      </div>
    </Page>
  );
};

export default OrderDetailPage;
