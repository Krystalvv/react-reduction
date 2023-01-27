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
  ModalHeader
} from 'reactstrap';

import {
  MdKeyboardArrowDown,
  MdUnfoldMore,
  MdUnfoldLess,
  MdSettingsBackupRestore,
  MdAddCircle,
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

const Sales = () => {
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

  const [selIndex, setIndex] = useState(-1);
  const [detailView, setDetailOpen] = useState(false);
  const [portfolio, registerPortfolio] = useState(false);

  const productView = (index) => () => {
    setDetailOpen(!detailView);
    setIndex(index);
  };

  const openPortfolio = () => {
    registerPortfolio(!portfolio);
  };

    const [mainImg, setMainImg] = useState(""); // 파일 base64
  
  const handleChangeFile = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setMainImg(base64.toString()); // 파일 base64 상태 업데이트
      }
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
    } 
  }

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
          포트폴리오
        </Button>
        <Button
          onClick={toggle(1)}
          color=""
          className={category === 1 ? "category_button_active" : "category_button"}
        >
          포트폴리오 등록
        </Button>
      </ButtonGroup>
    </div>
    <div>
      {/* filter */}

      <div style={{ padding: "0 20px", backgroundColor: "white" }}>
        <Col style={{ padding: "10px", borderTop: "1px solid #8f8f8f", borderBottom: "1px solid #8f8f8f" }}>
          <Row className="align-items-center" style={{ margin: "0px" }}>
          <div style={{ width: "100px" }}>{'등록일'}</div>
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
        </Col>

        <Row className="align-items-center justify-content-center" style={{ padding: "10px" }}>
          <Button outline color="secondary" style={{ backgroundColor: "white", color: "black", borderRadius: "30px", padding: "5px 30px 5px 30px" }}>검색</Button>
        </Row>

      </div>
      <Row>
        <Col>
          <div style={{ padding: "20px", backgroundColor: "white" }}>
          <div className="can-click" style={{ fontSize:"18px", fontWeight:"bold", margin: "10px" }} onClick={openPortfolio}><MdAddCircle size={20}/>&nbsp; 등록하기
          <Modal
            backdrop="static"
              size="xl"
              isOpen={portfolio}
              toggle={openPortfolio}
              style={{ width: "997px", maxWidth: "80%", height: "800px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            >
              <ModalHeader toggle={openPortfolio} >
                새 포트폴리오 등록하기
              </ModalHeader>
              <ModalBody style={{height:"700px"}}>
                <Row className="justify-content-center" style={{ alignItems:"center", height:"100%", width:"100%"}}>
              <label for='addImage'>
        <div style={{padding:"10px", borderRadius:"20px", color:"white", backgroundColor:"#6f7070"}}>
          이미지 가져오기
        </div>
        <Input type="file" accept='image/jpg,impge/png,image/jpeg,image/gif'  name="addImage" id="addImage" onChange={handleChangeFile} style={{ display: "none" }} />
      </label>
      </Row>

              </ModalBody>
              </Modal>
              </div>
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
                          <Modal
                            isOpen={index === selIndex && detailView}
                            toggle={productView(selIndex)}
                            style={{ width: "997px", maxWidth: "80%", height: "800px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                          >
                            <ModalHeader toggle={productView(selIndex)}>
                              포트폴리오
                            </ModalHeader>
                            <ModalBody>
  
                            </ModalBody>

                          </Modal>
                        </div>
                        <div class="container">
                          <img className="box" onMouseOver={mouseOn(index + 1)} src={productTableData[index + 1].product_image}></img>
                          {hoverIndex === index + 1 && <div class="box stack-top" onClick={productView(index + 1)} onMouseOut={mouseOut(index + 1)} style={{ color: "white", background: 'black' }}>
                            <AiFillHeart style={{ margin: "10px" }} />{productTableData[index + 1].goods}<BsChat style={{ margin: "10px" }} />{productTableData[index + 1].review}
                          </div>
                          }
                          <Modal
                            isOpen={index + 1 === selIndex && detailView}
                            toggle={productView(selIndex)}
                            style={{ width: "997px", maxWidth: "80%", height: "800px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                          >
                            <ModalHeader toggle={productView(selIndex)}>
                            포트폴리오
                            </ModalHeader>
                            <ModalBody>

                            </ModalBody>

                          </Modal>
                        </div>
                        <div class="container">
                          <img className="box" onMouseOver={mouseOn(index + 2)} src={productTableData[index + 2].product_image}></img>
                          {hoverIndex === index + 2 && <div class="box stack-top" onClick={productView(index + 2)} onMouseOut={mouseOut(index + 2)} style={{ color: "white", background: 'black' }}>
                            <AiFillHeart style={{ margin: "10px" }} />{productTableData[index + 2].goods}<BsChat style={{ margin: "10px" }} />{productTableData[index + 2].review}
                          </div>
                          }
                          <Modal
                            isOpen={index + 2 === selIndex && detailView}
                            toggle={productView(selIndex)}
                            style={{ width: "997px", maxWidth: "80%", height: "800px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                          >
                            <ModalHeader toggle={productView(selIndex)}>
                            포트폴리오
                            </ModalHeader>
                            <ModalBody>
          
                            </ModalBody>

                          </Modal>
                        </div>
                      </Row>
                    ))}
                  </div>
                </Row>

          

            </div>
          </div>
        </Col>
      </Row>
    </div>
    </Page>
  );
};

export default Sales;
