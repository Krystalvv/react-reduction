import React, { useState } from 'react';
import PropTypes from 'utils/propTypes';
import { MdCameraAlt, MdAttachFile } from 'react-icons/md';
import {
  Media,
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Col,
  Input,
  NavLink as BSNavLink,
} from 'reactstrap';

import Typography from 'components/Typography';

import BubbleChat from 'assets/img/icons/bubble_chat.svg';
import { orderDemoData, chatData } from 'demos/dashboardPage';
import FModalHeader from './Modal/FModalHeader';

import { useHistory } from "react-router-dom";

const ProductMedia = ({ origin_index, ...restProps}) => {
  const [isOpen, setOpen] = useState(false);
  const [isChat, setChat] = useState(false);
  let history = useHistory();
  // const index = data.id;
  const data = orderDemoData[origin_index];

  const toggle = () => () => {
    setOpen(!isOpen);
  };

  const chatting = () => () => {
    setOpen(!isOpen);
    setChat(!isChat);
  }

  return (
    <div onClick={() => {
      history.push({
        pathname: `/order-detail`,
        state: { index : origin_index }
      })
    }}>
      <Media {...restProps}>
        {data.trans_type === 0 &&
          <Badge color="primary" pill className="mr-1" style={{ marginTop: "2px" }}>
            배송
          </Badge>
        }
        {data.trans_type === 1 &&
          <Badge color="secondary" pill className="mr-1" style={{ marginTop: "2px" }}>
            픽업
          </Badge>
        }
        <div style={{ marginLeft: "10px", width: "100%" }} onClick={toggle()}>
          <Row>
            <Media body className="overflow-hidden" style={{ marginLeft: "10px", marginBottom: "-5px" }}>
              <Media state className="text-truncate">
                {data.time}
              </Media>
              <Media className="text-truncate">
                {data.sender.name} 님 | {data.product.name}
              </Media>
              <p className="text-muted text-truncate"><img style={{ margin: "5px", width: "16px" }} src={BubbleChat} />{data.sender.comment}</p>
            </Media>
            <Media state className="align-self-center" style={{ marginRight: "20px" }}>
              <Typography>{data.order.state}</Typography>
            </Media>
          </Row>
        </div>


      </Media>

      <Modal
        isOpen={isChat}
        toggle={chatting()}
        style={{ width: "750px", maxWidth: "90%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <ModalHeader toggle={chatting()}>
          <Row style={{ marginLeft: "10px" }}>
            <div>{data.sender.name}</div>
            {
              orderDemoData.map(({ custom_number }, index) => (data.id === index && <div style={{ marginLeft: "10px" }}>{custom_number}</div>))
            }
          </Row>
        </ModalHeader>
        <ModalBody className="none_scrollbar" style={{ padding: "0 15px 0 15px", height: '410px', overflowX: 'hidden', overflowY: 'scroll' }}>

          <div style={{ width: "100%" }}>
            {
              chatData.map(({ date, content }, index) => (
                <>
                  <Row style={{ justifyContent: "center" }}>
                    <div style={{ display: "fixed", margin: "10px", padding: "3px 10px 3px 10px", backgroundColor: "#d9d9d9", borderRadius: "20px" }}>
                      {date}
                    </div>
                  </Row>
                  <div style={{ width: "100%" }}>
                    {
                      content.map(({ trans, type, name, comment, image, product, discount, discount_cost, cost }, index) => (
                        <Row style={{ margin: "10px", justifyContent: trans === 0 ? "end" : "start" }}>
                          {trans === 1 && <div style={{ width: "40px", height: "40px", borderRadius: "20px", backgroundColor: "#d9d9d9" }}></div>}
                          <div style={{backgrondColor:"yellow"}}>
                            <div style={{ margin: "0 10px 0 10px", textAlign: trans === 1 ? "left" : "right" }}>{name}</div>
                            <div style={{ whiteSpace:"pre-wrap", maxWidth: "400px", margin: "0 10px", padding: "5px 10px 5px 10px", backgroundColor: trans === 0 ? "white" : "#d9d9d9", border : trans === 0? "1px solid black":"", borderRadius: trans === 0 ? "1.0rem 0 1.0rem 1.0rem" : "0px 1.0rem 1.0rem 1.0rem" }}>
                              {type === 0 ? comment : 
                              <Row style={{width:"300px"}}>
                                <Col md={6} style={{padding:"10px 20px"}}>
                                  <img src={image} style={{width:"100%"}}></img>
                                </Col>
                                <Col md={5} style={{marginLeft:"15px"}}>
                                  <Row style={{marginTop:"5px"}}>
                                    <strong>{product}</strong>
                                  </Row>
                                  <div style={{margin:"5px"}}>
                                    <Row>
                                      <div style={{color:"#DC4734"}}>{discount}</div>
                                      <div style={{marginLeft:"10px", fontSize:"18px"}}>{discount_cost}</div>
                                    </Row>
                                    <Row style={{marginTop:"-5px"}}>
                                    <del>{cost}</del>
                                    </Row>
                                  </div>
                                  <Row>
                                  <Button outline color="dark" style={{ color:"black", backgroundColor: "white", margin:"0px"}}>상품 보러가기</Button>
                                  </Row>
                                </Col>
                              </Row>
                              }
                            </div>
                          </div>
                          {trans === 0 && <div style={{ width: "40px", height: "40px", borderRadius: "20px", backgroundColor: "#d9d9d9" }}></div>}
                        </Row>
                      ))

                    }
                  </div>
                </>
              ))
            }

          </div>
        </ModalBody>
        <Row style={{ margin: "0px" }}>
          <div style={{ padding: "10px", width: "100%", backgroundColor: "#d9d9d9" }}>
            <Row style={{ margin: "0px" }}>
            <label for="input-file">
            <MdCameraAlt size={20} style={{ margin: "5px" }} />
            </label>
            <Input type="file" id="input-file" style={{display:"none"}}/>
              <MdAttachFile size={20} style={{ margin: "5px" }} />
            </Row>
            <Row style={{ margin: "0px" }}>
              <Input type="textarea" name="text" placeholder="메시지를 입력하세요" style={{ width: "80%", boxShadow: "none", outline: "none", backgroundColor: "transparent" }} />
              <Button outline color="secondary" style={{ backgroundColor: "white", color: "black", borderRadius: "30px", margin: "1% 2% 1% 2%", width: "16%", marginLeft: "auto" }}>전송</Button>
            </Row>
          </div>
        </Row>
        <ModalFooter>
          <div>고객 차단하기 / 신고</div>
        </ModalFooter>
      </Modal>
    </div>

  );
};

ProductMedia.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  right: PropTypes.node,
  detailData: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.string,
    })
  ),
};

export default ProductMedia;
