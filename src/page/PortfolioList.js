import React, { useState } from 'react';
import {
  Col,
  Row,
  Input,
  Form,
  FormGroup,
  Label,
} from 'reactstrap';


import {
  BsChat
} from 'react-icons/bs'

import { AiFillHeart } from 'react-icons/ai'

import {
  productTableData,
} from 'demos/dashboardPage';

const PortfolioList = () => {
  const [hoverIndex, setHover] = useState(-1);
  const mouseOn = (index) => () => {
    setHover(index);
    console.log("asdfad");
  };

  const mouseOut = (index) => () => {
    setHover(-1);
  };

  const [selIndex, setIndex] = useState(-1);
  const [detailView, setDetailOpen] = useState(false);

  const productView = (index) => () => {
    setDetailOpen(!detailView);
    setIndex(index);
  };

  return (
    <Row>
      <Col>
        <div style={{ padding: "20px", backgroundColor: "white" }}>
          <Form style={{ margin: "10px" }}>
            <FormGroup check inline>
              <Label check>
                <Input type="radio" className="radio_button" />등록순
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="radio" className="radio_button" /> 관심순
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="radio" className="radio_button" /> 댓글순
              </Label>
            </FormGroup>
          </Form>

          {/* table */}
          <div>


            <Row className="justify-content-center">
              <div style={{ maxWidth: "800px", width: "100%" }}>

                {productTableData.map(({ }, index) => index % 3 === 0 && (
                  <Row style={{ margin: "1%" }} className="justify-content-center">
                    {/* overlay image */}
                    <div class="container">
                      <img className="box" onMouseOver={mouseOn(index)} src={productTableData[index].product_image}></img>
                      {hoverIndex === index && <div class="box stack-top" onClick={productView(index)} onMouseOut={mouseOut(index)} style={{ color: "white", background: 'black' }}>
                        <AiFillHeart style={{ margin: "10px" }} />{productTableData[index].goods}<BsChat style={{ margin: "10px" }} />{productTableData[index].review}
                      </div>
                      }

                    </div>
                    <div class="container">
                      <img className="box" onMouseOver={mouseOn(index + 1)} src={productTableData[index + 1].product_image}></img>
                      {hoverIndex === index + 1 && <div class="box stack-top" onClick={productView(index + 1)} onMouseOut={mouseOut(index + 1)} style={{ color: "white", background: 'black' }}>
                        <AiFillHeart style={{ margin: "10px" }} />{productTableData[index + 1].goods}<BsChat style={{ margin: "10px" }} />{productTableData[index + 1].review}
                      </div>
                      }

                    </div>
                    <div class="container">
                      <img className="box" onMouseOver={mouseOn(index + 2)} src={productTableData[index + 2].product_image}></img>
                      {hoverIndex === index + 2 && <div class="box stack-top" onClick={productView(index + 2)} onMouseOut={mouseOut(index + 2)} style={{ color: "white", background: 'black' }}>
                        <AiFillHeart style={{ margin: "10px" }} />{productTableData[index + 2].goods}<BsChat style={{ margin: "10px" }} />{productTableData[index + 2].review}
                      </div>
                      }
                    </div>
                  </Row>
                ))}
              </div>
            </Row>



          </div>
        </div>
      </Col>
    </Row>
  );
};

export default PortfolioList;
