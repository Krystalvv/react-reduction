import React, { useState } from "react";
import { Col, Row, Badge, FormGroup, Label, Input, Button, ButtonGroup } from 'reactstrap'
import Slider from "react-slick";

import {
  BiPencil,
  BiTrash
} from 'react-icons/bi'

import {
  AiFillHeart,
  AiOutlineShoppingCart,
  AiFillLeftCircle,
  AiFillRightCircle,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
} from 'react-icons/ai'

import {
  BsChat,
} from 'react-icons/bs'

import Barogo from '../../assets/img/icons/barogo_logo.png';
import { useHistory } from 'react-router-dom';

export const ProductSlider = ({ data }) => {

  const colorChip = ['#FF0000', '#FF5001', '#FFB800']
  const tag = ['#튤립', '#분홍튤립', '#꽃다발', '#기념일']

  const history = useHistory();

  const [category, setOpen] = useState(0);

  const toggle = (index) => () => {
    setOpen(index);
  };

  const [commentindex, setCommentIndex] = useState(-1);
  const [replyindex, setReplyIndex] = useState(-1);
  function openComment(index) {
    if (!(replyindex < 0)) {
      closeReply()
    }
    setCommentIndex(index);
  }
  function submitComment() {
    setCommentIndex(-1);
  }
  function openReply(index) {
    if (!(commentindex < 0)) {
      submitComment()
    }
    setReplyIndex(index);
  }
  function closeReply() {
    setReplyIndex(-1);
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", width: "40px", height: "40px", right: "-70px" }}
        onClick={onClick}
      >
        <AiOutlineRightCircle size={40} style={{ color: "white" }} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", width: "40px", height: "40px", left: "-70px" }}
        onClick={onClick}
      >
        <AiOutlineLeftCircle size={40} style={{ color: "white" }} />
      </div>
    );
  }

  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function productInfo() {
    return (
      <div style={{ height: '66vh', overflowX: 'hidden', overflowY: 'scroll' }} >
        <div style={{ padding: "10px" }}>
          <div style={{ fontSize: "16px", color: "#9fa1a3" }}>
            {data.date}
          </div>
          <div style={{ fontSize: "18px", whiteSpace: "pre-wrap" }}>
            {data.comment}
          </div>
        </div>
        {/*********************************************************************************************************/}
        <div style={{ borderTop: "2px solid #d9d9d9" }} />

        <div style={{ padding: "10px" }}>
          <div style={{ fontSize: "16px", fontWeight: "bold", margin: "5px" }}>검색필터</div>
          <Row style={{ margin: "0" }}>
            {tag.map((value, index) => (
              <div style={{ borderRadius: "5px", backgroundColor: "rgba(215,215,215,0.25)", padding: "5px 10px 5px 10px", margin: "5px" }}>
                {value}
              </div>
            ))}
          </Row>
          <Row style={{ margin: "5px" }}>
            {colorChip.map((value, index) => (
              <div style={{ margin: "1px" }}>
                <div style={{ margin: "1px", borderRadius: "4px", width: '25px', height: '25px', backgroundColor: value }} />
              </div>
            ))}
          </Row>
        </div>
        {/*********************************************************************************************************/}
        <div style={{ borderTop: "2px solid #d9d9d9" }} />

        <div style={{ padding: "10px" }}>
          <div style={{ fontSize: "16px", fontWeight: "bold", margin: "5px" }}>배송형태</div>
          {data.barogo &&
            <Row style={{ margin: "0px 5px" }}>
              <img width="25px" src={Barogo} />
              <div style={{ marginLeft: "10px" }}>{'배송(바로고)'}</div>
            </Row>}
          {data.delivery &&
            <div>
              <Badge color="primary" pill className="mr-1" style={{ display: "fixed", height: "20px", marginTop: "2px" }}>
                배송
              </Badge>{'배송(기타)'}
            </div>}
          {data.pickup &&
            <div>
              <Badge color="secondary" pill className="mr-1" style={{ display: "fixed", height: "20px", marginTop: "2px" }}>
                픽업
              </Badge>픽업
            </div>
          }
        </div>
        {/*********************************************************************************************************/}
        <div style={{ borderTop: "2px solid #d9d9d9" }} />
        <div style={{ padding: "10px" }}>
          <div style={{ fontSize: "16px", fontWeight: "bold", margin: "5px" }}>상품 카테고리</div>
          <div style={{ margin: "5px" }}>{data.category}</div>
        </div>
        {/*********************************************************************************************************/}
        <div style={{ borderTop: "2px solid #d9d9d9" }} />

        <div style={{ padding: "10px" }}>
          <div style={{ fontSize: "16px", fontWeight: "bold", margin: "5px" }}>판매가</div>
          <Row style={{ margin: "5px" }}>
            <div>{data.discount_cost} &nbsp;
              <strong style={{ fontSize: "18px", color: "#da4359" }}>{data.discount_rate}</strong></div> &nbsp;
            <div style={{ textDecorationLine: "line-through" }}>{data.cost}</div>
          </Row>
        </div>

        {/*********************************************************************************************************/}
        <div style={{ borderTop: "2px solid #d9d9d9" }} />

        <div style={{ padding: "10px" }}>
          <div style={{ fontSize: "16px", fontWeight: "bold", margin: "5px" }}>포인트</div>
          <div style={{ margin: "5px" }}>10%</div>
        </div>


        {/*********************************************************************************************************/}
        <div style={{ borderTop: "2px solid #d9d9d9" }} />

        <div style={{ padding: "10px" }}>
          <div style={{ fontSize: "16px", fontWeight: "bold", margin: "5px" }}>판매 기간</div>
          <div style={{ margin: "5px" }}>{data.start_date} {data.end_date && ' ~ '} {data.end_date}</div>
        </div>

        {/*********************************************************************************************************/}
        <div style={{ borderTop: "2px solid #d9d9d9" }} />
        <div style={{ padding: "10px" }}>
          <div style={{ fontSize: "16px", fontWeight: "bold", margin: "5px" }}>옵션사항</div>
          <div style={{ margin: "5px" }}>
            <div>{'옵션 01. 빨간장미 1송이  (+3,000원)'}</div>
            <div>{'옵션 02. 튤립 1송이 (+2,000원)'}</div>
            <div>{'옵션 03. 안개꽃 (+2,000원)'}</div>
          </div>
        </div>
      </div>
    )
  }

  function goodsInfo() {
    return (
      <div style={{ height: '66vh', overflowX: 'hidden', overflowY: 'scroll' }} >
        <Row className="justify-content-center" style={{ padding: "10px" }}>
          {data.goodsInfo &&
            <Col md={6}>
              {data.goodsInfo.map(({ }, index) => (
                <Row className="align-items-center justify-content-center">
                  <img style={{ margin: "5px 20px 5px 5px", width: "50px", height: "50px", borderRadius: "50px", backgroundColor: "#d9d9d9" }}
                    src={data.goodsInfo[index].profile}
                  />
                  <div style={{ margin: "5px", fontSize: "12px", height: "100%", borderRadius: "50px", paddingLeft: "5px", paddingRight: "5px", color: "green", border: "1px solid green" }}>
                    {data.goodsInfo[index].grade}
                  </div>
                  <div style={{ margin: "5px" }}>{data.goodsInfo[index].name}</div>

                </Row>
              ))}
            </Col>
          }
        </Row>
      </div>
    )
  }

  function reviewInfo() {
    return (
      <div style={{ maxHeight: '66vh', overflowX: 'hidden', overflowY: 'scroll' }} >
        <Row className="justify-content-center" style={{ padding: "10px" }}>
          {data.reviewInfo &&
            <Col md={12}>
              {data.reviewInfo.map(({ }, index) => (
                <Row>
                  <Col>
                    <Row className="align-items-end" style={{ margin: "10px" }}>
                      <Row className="align-items-center">
                        <img style={{ margin: "5px 10px 5px 5px", width: "50px", height: "50px", borderRadius: "50px", backgroundColor: "#d9d9d9" }}
                          src={data.reviewInfo[index].user.profile}
                        />
                        <div>
                          {data.reviewInfo[index].user.name}
                        </div>
                      </Row>
                      <div style={{ marginLeft: "auto" }}>
                        {data.reviewInfo[index].date}
                      </div>
                    </Row>
                    <Row>
                      <Col>
                        <ReviewImageSlider reviewImage={data.reviewInfo[index].images} />
                      </Col>
                    </Row>
                    <Row>
                      <div style={{ margin: "10px", paddingLeft: "10px" }}>
                        {data.reviewInfo[index].comment}
                      </div>
                    </Row>
                    <Row className="align-items-center" style={{ margin: "0" }}>
                      <div className="can-click" style={{ marginLeft: "5px" }} onClick={() => openComment(index)}>
                        답글달기
                      </div>
                      &nbsp;
                      <Row className="align-items-center can-click" style={{ margin: "0px" }} onClick={() => openReply(index)}>
                        <BsChat size={15} />
                        <div style={{ margin: "5px" }}>
                          {data.reviewInfo[index].reply.length}
                        </div>
                      </Row>
                      <div style={{ display: replyindex === index ? 'none' : '', marginLeft: "auto" }} className="can-click" onClick={() => openReply(index)}>
                        더보기
                      </div>
                      <div style={{ display: replyindex === index ? '' : 'none', marginLeft: "auto" }} className="can-click" onClick={closeReply}>
                        접기
                      </div>
                    </Row>
                    <div style={{ display: commentindex === index ? '' : 'none' }}>
                      <Row style={{ margin: "5px" }}>
                        <Input type="textarea" name="text" style={{ height: "100px" }} />
                      </Row>
                      <Row style={{ margin: "5px" }}>
                        <div className="can-click" style={{ marginLeft: 'auto', padding: '2px 20px 2px 20px', backgroundColor: '#6f7070', color: 'white', borderRadius: '50px' }} onClick={submitComment}>등록</div>
                      </Row>
                    </div>
                    <div style={{ display: replyindex === index ? '' : 'none' }}>
                      {data.reviewInfo[index].reply.map(({ }, replyIndex) => (
                        <Row style={{ margin: "5px" }}>
                          <Col md={12}>
                            <Row className="align-items-end" style={{ margin: "0 10px" }}>
                              <Row className="align-items-center">
                                <img style={{ margin: "5px 10px 5px 5px", width: "50px", height: "50px", borderRadius: "50px", backgroundColor: "#d9d9d9" }}
                                  src={data.reviewInfo[index].reply[replyIndex].user.profile}
                                />
                                <div>
                                  {data.reviewInfo[index].reply[replyIndex].user.name}
                                </div>
                              </Row>
                            </Row>
                            <Row>
                              <div style={{ margin: "0 10px 0 10px", paddingLeft: "10px" }}>
                                {data.reviewInfo[index].reply[replyIndex].comment}
                              </div>
                              <div style={{ margin: "0 10px", paddingLeft: "10px" }}>
                                <Row style={{ margin: "5px 0 5px 0", fontSize: "14px", fontColor: "#8c8c8c" }}>
                                  {data.reviewInfo[index].reply[replyIndex].date} &nbsp;
                                  <div> 수정 </div> &nbsp; | &nbsp;
                                  <div> 삭제 </div>
                                </Row>
                              </div>
                            </Row>
                          </Col>
                        </Row>
                      ))}
                    </div>
                    <div style={{ margin: "0 -10px 0 -10px", borderTop: "2px solid #d9d9d9" }} />
                  </Col>
                </Row>
              ))}
            </Col>
          }
        </Row>
      </div>
    )
  }

  return (
    <div>
      <Slider {...settings}>
        {/* {data.map(({ date, goods, review, main_image, comment, ...info }, index) => ( */}
        <div>
          <Row className="justify-content-center" style={{ padding: "15px" }}>
            <Col md={5} style={{ padding: "0 15px"}}>
              <div style={{ height: "100%", marginTop: "50px", alignItems: "center", justifyContent: "center" }}>
                {/* <Row className="align-middle" style={{ margin: 0 }}>
                  <AiFillHeart style={{ margin: "5px" }} /><div>{data.goods}</div>
                  <BsChat style={{ margin: "5px" }} /><div>{data.review}</div>
                </Row> */}
                <div style={{ width: "90%", height: "auto", marginBottom: "30px" }}>
                  <ImageSlider images={data.images} />
                </div>
              </div>
            </Col>
            <div style={{ background: "#d9d9d9", width: "2px" }}></div>
            <Col md={5} style={{ padding: "0px", height:"100%" }}>
              <Row className="align-middle" style={{ margin: "0px" }}>
                <ButtonGroup style={{ padding: "10px 10px 0 10px" }}>
                  <Button
                    onClick={toggle(0)}
                    color=""
                    className={category === 0 ? "category_button_active" : "category_button"}
                  >
                    상품조회
                  </Button>
                  <Button
                    onClick={toggle(1)}
                    color=""
                    className={category === 1 ? "category_button_active" : "category_button"}
                  >
                    관심&nbsp;{data.goods}
                  </Button>
                  <Button
                    onClick={toggle(2)}
                    color=""
                    className={category === 2 ? "category_button_active" : "category_button"}
                  >
                    리뷰&nbsp;{data.review}
                  </Button>
                </ButtonGroup>
                <ButtonGroup style={{ marginLeft: "auto", padding: "10px 10px 0 10px" }}>
                  <BiPencil className="can-click" size={25} style={{ margin: "5px" }} onClick={() => {
                    history.push({
                      pathname: `/product-edit`,
                    })
                  }} />
                  <BiTrash className="can-click" size={25} style={{ margin: "5px" }} />
                </ButtonGroup>
              </Row>
              {/*********************************************************************************************************/}
              <div style={{ borderTop: "2px solid #d9d9d9" }} />
              {/*********************************************************************************************************/}
              {category === 0 && productInfo()}
              {category === 1 && goodsInfo()}
              {category === 2 && reviewInfo()}


            </Col>
          </Row>
        </div>
        {/* ))} */}
      </Slider>
    </div>
  );

}

export const ImageSlider = ({images}) => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", width: "30px", height: "30px", right: "10px" }}
        onClick={onClick}
      >
        <AiFillRightCircle size={30} style={{ color: "rgba(255,255,255,0.75)" }} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", width: "30px", height: "30px", zIndex: "9", left: "10px" }}
        onClick={onClick}
      >
        <AiFillLeftCircle size={30} style={{ color: "rgba(255,255,255,0.75)" }} />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div >
      <Slider {...settings}>
        {images.map(({ }, index) => (
          <img src={images[index]} />
        ))}
      </Slider>
      <Row className="justify-content-center" style={{ margin: "40px 20px" }}>
        {images.map(({ }, index) => (
          <img src={images[index]} style={{ width: "50px", height: "50px", margin: "5px" }} />
        ))}
      </Row>
    </div>
  );

}

export const ReviewImageSlider = ({ reviewImage }) => {
  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3.5,
  //   slidesToScroll: 1,
  //   arrow: false,
    
  // };
  
  const getWidth = (count) => {
    return (80 * count + 10 * count) + 'px';
  }
  return (
    <div className="scroll-bar" style={{ overflowX: 'scroll', overflowY: 'hidden'}}>
    <Row style={{ width:getWidth(reviewImage.length), overflowX: 'scroll', overflowY: 'hidden', margin:"0px" }}>
              {reviewImage.map(({ }, index) => (
          <img src={reviewImage[index]} style={{width:"80px", height:"80px", margin:"5px"}} />
        ))}
      {/* <Slider {...settings}>
        {reviewImage.map(({ }, index) => (
          <img src={reviewImage[index]} />
        ))}
      </Slider> */}
    </Row>
    </div>
  );

}