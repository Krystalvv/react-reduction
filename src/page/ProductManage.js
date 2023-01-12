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
  FormText,
  Label,
  Modal,
  ModalBody,
} from 'reactstrap';

import {
  MdKeyboardArrowDown,
  MdUnfoldMore,
  MdUnfoldLess,
  MdSettingsBackupRestore
} from 'react-icons/md';

import {
  BsGrid3X3,
  BsInfoCircleFill,
  BsList,
  BsChat
} from 'react-icons/bs'

import { AiFillHeart } from 'react-icons/ai'

import ProductTableView from 'components/ProductTableView';
import {
  productTableData,
} from 'demos/dashboardPage';

import { ProductSlider } from '../components/Part/Carousel';

import Combobox from '../components/Part/ComboBox';

const ProductManage = () => {
  const searchDate = ['주문 접수 일', '예약일'];
  const categoryDep1 = ['꽃', '식물'];
  const categoryDep2 = ['전체', '꽃다발', '꽃바구니', '화분'];
  const detailSearch = ['주문번호', '보내는 사람', '받는 사람', '주소'];
  const buttons = ['오늘', '1주일', '1개월', '3개월'];
  const [hoverIndex, setHover] = useState(-1);
  const [category, setOpen] = useState(0);
  const [listStyle, setList] = useState(true);
  const [selButton, setButton] = useState(0);
  const [isOpen, setMenuOpen] = useState(false);

  const currentItem = (x) => {
    console.log(x);
  };

  const mouseOn = (index) => () => {
    setHover(index);
    console.log("asdfad");
  };

  const mouseOut = (index) => () => {
    setHover(-1);
  };

  const reset = () => {

  };

  const toggle = (index) => () => {
    setOpen(index);
  };

  const toggleList = () => {
    setList(!listStyle);
  };

  const toggleMenu = () => {
    setMenuOpen(!isOpen)
  }

  const toggleButtonGroup = (index) => () => {
    setButton(index);
  };

  const [selIndex, setIndex] = useState(false);
  const [detailView, setDetailOpen] = useState(false);

  const productView = (index) => () => {
    setDetailOpen(!detailView);
    setIndex(index);
  };

  const toggleProductView = () => () => {
    setDetailOpen(!detailView);
  };

  return (
    <div>
      {/* filter */}

      <div style={{ padding: "0 20px", backgroundColor: "white" }}>
        <Col style={{ padding: "10px", borderTop: "1px solid #8f8f8f", borderBottom: "1px solid #8f8f8f" }}>
          <Row className="align-items-center" style={{ margin: "0px" }}>
            <div style={{ width: "100px" }}>{'조회기간'}</div>
            <Combobox items={searchDate} currentItem={currentItem} />
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

          <Row className="align-items-center" style={{ margin: "0px" }}>
            <div style={{ width: "100px" }}>{'판매상태'}</div>
            <Form style={{ margin: "10px" }}>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" className="checkbox" /> 전체
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" className="checkbox" /> 판매중
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" className="checkbox" /> 품절
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" className="checkbox" /> 판매종료
                </Label>
              </FormGroup>
            </Form>
          </Row>
          {isOpen &&
            <Row className="align-items-center" style={{ margin: "0px" }}>
              <div style={{ width: "100px" }}>{'카테고리'}</div>
              <Row style={{ margin: "0px" }}>
                <Combobox items={categoryDep1} currentItem={currentItem} />
                <Combobox items={categoryDep2} currentItem={currentItem} />
              </Row>
            </Row>
          }
          {isOpen &&
            <div>
              <Row className="align-items-center" style={{ margin: "0px" }}>
                <div style={{ width: "100px" }}>{'상세검색'}</div>
                <Combobox items={detailSearch} currentItem={currentItem} />
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
                  <Input type="radio" className="radio_button" /> 판매순
                </Label>
              </FormGroup>
            </Form>

            {/* table */}
            <div>
              <Row style={{ margin: "10px" }}>
                {listStyle && <div>{'(총 '} <strong style={{ color: "#DA4359" }}>6</strong> {' / 100 개)'}</div>}
                <div style={{ marginLeft: "auto" }}>
                  {listStyle ?
                    <BsGrid3X3 className="can-click" size={20} style={{ margin: "10px" }} onClick={toggleList} /> :
                    <BsList className="can-click" size={20} style={{ margin: "10px" }} onClick={toggleList} />
                  }
                  <BsInfoCircleFill className="can-click" size={20} style={{ margin: "10px 0" }} />
                </div>
              </Row>
              {listStyle ? <ProductTableView
                rowData={productTableData} /> :
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
                  <Modal
                    isOpen={detailView}
                    toggle={toggleProductView()}
                    style={{ width: "997px", maxWidth: "80%", height: "800px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  >
                    <ModalHeader toggle={productView(index)}>
                      상품 상세 정보
                    </ModalHeader>
                    <ModalBody>
                      <ProductSlider data={productTableData}>

                      </ProductSlider>
                    </ModalBody>

                  </Modal>
                </Row>

              }

            </div>
            {listStyle && <div>
              <Row style={{ margin: "0px" }}>
                <Button style={{ width: "123px" }} outline color="dark">전체선택</Button>
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
            }
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductManage;
