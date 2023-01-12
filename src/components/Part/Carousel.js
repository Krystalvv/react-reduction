import React, { useState } from "react";
import { Col, Row, Badge, FormGroup, Label, Input, Button } from 'reactstrap'
import Slider from "react-slick";

import {
  MdVerticalAlignBottom,
  MdEdit,
  MdDelete,
} from 'react-icons/md'

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


export const ProductSlider = ({ data }) => {

  const colorChip = ['#FF0000', '#FF5001', '#FFB800']
  const tag = ['#튤립', '#분홍튤립', '#꽃다발', '#기념일']

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
  return (
    <div>
      <Slider {...settings}>
        {data.map(({ date, goods, review, main_image, comment, ...info }, index) => (
          <div>
            <Row style={{ padding: "15px" }}>
              <Col md={6} style={{ padding: "0 15px" }}>
                <div style={{ height: "100%", padding: "50px 0 50px 0", alignItems: "center", justifyContent: "center" }}>
                  <Row className="align-middle" style={{ margin: 0 }}>
                    <AiFillHeart style={{ margin: "5px" }} /><div>{goods}</div>
                    <BsChat style={{ margin: "5px" }} /><div>{review}</div>
                    <div style={{ marginLeft: "auto" }}>
                      <Button href="/product_edit" color="white" size={20} style={{ margin: "5px" }}>
                      <MdEdit className="can-click" size={20} style={{ margin: "5px" }} />
                      </Button>
                      <MdDelete className="can-click" size={20} style={{ margin: "5px" }} />
                    </div>
                  </Row>
                  <div style={{ marginBottom: "30px" }}>
                    <ImageSlider mainImage={main_image} />
                  </div>
                </div>
              </Col>
              <Col md={6} style={{ padding: "10px" }}>
                {/*********************************************************************************************************/}
                <div style={{ padding: "10px" }}>
                  <div style={{ whiteSpace: "pre-wrap" }}>
                    {comment}
                  </div>
                  <div style={{ fontSize: "16px", color: "#9fa1a3" }}>
                    {date}
                  </div>
                </div>
                {/*********************************************************************************************************/}
                <div style={{ borderTop: "1px solid #8f8f8f" }} />

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
                <div style={{ borderTop: "1px solid #8f8f8f" }} />

                <div style={{ padding: "10px" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", margin: "5px" }}>배송형태</div>
                  {info.barogo &&
                    <Row style={{ margin: "0px 5px" }}>
                      <img width="25px" src={Barogo} />
                      <div style={{ marginLeft: "10px" }}>{'배송(바로고)'}</div>
                    </Row>}
                  {info.delivery &&
                    <div>
                      <Badge color="primary" pill className="mr-1" style={{ display: "fixed", height: "20px", marginTop: "2px" }}>
                        배송
                      </Badge>{'배송(기타)'}
                    </div>}
                  {info.pickup &&
                    <div>
                      <Badge color="secondary" pill className="mr-1" style={{ display: "fixed", height: "20px", marginTop: "2px" }}>
                        픽업
                      </Badge>픽업
                    </div>
                  }
                </div>
                {/*********************************************************************************************************/}
                <div style={{ borderTop: "1px solid #8f8f8f" }} />
                <div style={{ padding: "10px" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", margin: "5px" }}>상품 카테고리</div>
                  <div style={{ margin: "5px" }}>{info.category}</div>
                </div>
                {/*********************************************************************************************************/}
                <div style={{ borderTop: "1px solid #8f8f8f" }} />

                <div style={{ padding: "10px" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", margin: "5px" }}>판매가</div>
                  <Row style={{ margin: "5px" }}>
                    <div>{info.discount_cost} &nbsp;
                      <strong style={{ fontSize: "18px", color: "#da4359" }}>{info.discount_rate}</strong></div> &nbsp;
                    <div style={{ textDecorationLine: "line-through" }}>{info.cost}</div>
                  </Row>
                </div>

                {/*********************************************************************************************************/}
                <div style={{ borderTop: "1px solid #8f8f8f" }} />

                <div style={{ padding: "10px" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", margin: "5px" }}>판매 기간</div>
                  <div style={{ margin: "5px" }}>{info.start_date} {info.end_date && ' ~ '} {info.end_date}</div>
                </div>

                {/*********************************************************************************************************/}
                <div style={{ borderTop: "1px solid #8f8f8f" }} />
                <div style={{ padding: "10px" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", margin: "5px" }}>옵션사항</div>
                  <div style={{ margin: "5px" }}>
                    <div>{'옵션 01. 빨간장미 1송이  (+3,000원)'}</div>
                    <div>{'옵션 02. 튤립 1송이 (+2,000원)'}</div>
                    <div>{'옵션 03. 안개꽃 (+2,000원)'}</div>
                  </div>
                </div>


              </Col>
            </Row>
          </div>
        ))}
      </Slider>
    </div>
  );

}

export const ImageSlider = ({ mainImage }) => {

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
        <img src={mainImage}>

        </img>
        <img src={mainImage}>

        </img>
      </Slider>
    </div>
  );

}