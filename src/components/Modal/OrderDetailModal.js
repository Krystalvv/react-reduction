import React, { useState } from 'react';

import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    Row,
    Col
} from 'reactstrap';

import FModalHeader from './FModalHeader';

const OrderDetailModal = ({ pk, type, name, product, description, time, state, detailData, ...restProps }) => {

    const [isOpen, setOpen] = useState(true);

    const toggle = () => () => {
        setOpen(!isOpen);
    };

    return (
        <Modal
            isOpen={isOpen}
            style={{ width: "750px", maxWidth: "90%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
            <div style={{ flexDirection: "row", padding: "10px", backgroundColor: "#d7d7d7" }}>
                <Row style={{ margin: "0 20px 0 20px" }}>
                    <div style={{ fontWeight: "bold" }}>주문 정보 상세</div>
                    <div style={{ marginLeft: "auto" }}>주문관리로 이동</div>
                </Row>
            </div>
            {detailData.map(({ image, product, option, count, product_number, state,
                custom_number, recipient, rec_number, reservation, address, zipCode, method, cost, fee, total_cost }, index) => (pk === index &&
                    <ModalBody className="none_scrollbar" style={{ padding: "1px", height: '610px', overflowX: 'hidden', overflowY: 'scroll' }}>
                        <Row style={{ margin: "10px" }}>
                            <Col md={4}>
                                <img src={image} style={{ display: "block", width: "100%", height: "auto", margin: "10px" }}></img>
                            </Col>
                            <Col md={8}>
                                <Row style={{ margin: "10px" }}><div>상품명</div><div style={{ marginLeft: "auto", textAlign: "right" }}>{product}</div></Row>
                                <Row style={{ margin: "10px" }}><div>옵션</div><div style={{ marginLeft: "auto", textAlign: "right" }}>{option}</div></Row>
                                <Row style={{ margin: "10px" }}><div>수량</div><div style={{ marginLeft: "auto", textAlign: "right" }}>{count}</div></Row>
                                <Row style={{ margin: "10px" }}><div>상품번호</div><div style={{ marginLeft: "auto", textAlign: "right" }}>{product_number}</div></Row>
                                <Row style={{ margin: "10px" }}><div>상태</div><div style={{ marginLeft: "auto", textAlign: "right" }}>{state}</div></Row>
                                <Row style={{ margin: "10px" }}><div>요청사항</div><div style={{ marginLeft: "auto", textAlign: "right" }}>{description}</div></Row>
                            </Col>
                        </Row>

                        <FModalHeader title={'주문자 정보'} />
                        <Row style={{ margin: "10px" }}>
                            <Col md={12}>
                                <Row style={{ margin: "10px" }}><div>주문자</div><div style={{ marginLeft: "auto", textAlign: "right" }}>{name}</div></Row>
                                <Row style={{ margin: "10px" }}><div>전화</div><div style={{ marginLeft: "auto", textAlign: "right" }}>{custom_number}</div></Row>
                            </Col>
                        </Row>

                        <FModalHeader title={'배송 정보'} />
                        <Row style={{ margin: "10px" }}>
                            <Col md={6}>
                                <Row style={{ margin: "10px" }}><div>픽업 / 배송</div><div style={{ marginLeft: "auto", textAlign: "right" }}>{type === 0 ? "배송" : "픽업"}</div></Row>
                                <Row style={{ margin: "10px" }}><div>받는 분</div><div style={{ marginLeft: "auto", textAlign: "right" }}>{recipient}</div></Row>
                                <Row style={{ margin: "10px" }}><div>전화</div><div style={{ marginLeft: "auto", textAlign: "right" }}>{rec_number}</div></Row>
                            </Col>
                            <Col md={6}>
                                <Row style={{ margin: "10px" }}><div>예약날짜</div><div style={{ marginLeft: "auto", textAlign: "right" }}>{reservation}</div></Row>
                                <Row style={{ margin: "10px" }}><div>주소</div>
                                    <Col style={{ padding: "0px", marginTop: "0px", marginRight: "0px", textAlign: "right" }}><div>{zipCode}</div><div>{address}</div></Col>
                                </Row>
                            </Col>
                        </Row>
                        <FModalHeader title={'결제 정보'} />
                        <Row style={{ margin: "10px" }}>
                            <Col md={12}>
                                <Row style={{ margin: "10px" }}><div>방법</div><div style={{ marginLeft: "auto", textAlign: "right" }}>{method}</div></Row>
                                <Row style={{ margin: "10px" }}><div>금액</div><div style={{ marginLeft: "auto", textAlign: "right" }}>{cost}</div></Row>
                                <Row style={{ margin: "10px" }}><div>배송비</div><div style={{ marginLeft: "auto", textAlign: "right" }}>{fee}</div></Row>
                            </Col>
                        </Row>

                        <FModalHeader title={'총 결제 금액'} />
                        <Row style={{ margin: "10px" }}>
                            <Col md={12}>
                                <Row style={{ margin: "10px" }}><div>총 결제 금액</div><div style={{ marginLeft: "auto", textAlign: "right" }}>{total_cost}</div></Row>
                            </Col>
                        </Row>
                    </ModalBody>
            ))}
            <ModalFooter>
                <Button outline color="dark" onClick={toggle()}>
                    닫기
                </Button>
                <Button outline color="dark" onClick={toggle()}>
                    채팅하기
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default OrderDetailModal;