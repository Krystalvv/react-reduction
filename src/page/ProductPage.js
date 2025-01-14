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
  Label
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
import Combobox from '../components/Part/ComboBox';
import ProductManage from './ProductManage';
import ProductRegister from './ProductRegister';
import { useHistory } from 'react-router-dom';

const ProductPage = () => {
  const history = useHistory();
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

  const registerProduct = () => {
    setOpen(0);
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
            상품조회
          </Button>
          <Button
            onClick={toggle(1)}
            color=""
            className={category === 1 ? "category_button_active" : "category_button"}
          >
            상품등록
          </Button>
          <Button
            onClick={toggle(2)}
            color=""
            className={category === 2 ? "category_button_active" : "category_button"}
          >
            정기배송상품 등록
          </Button>
        </ButtonGroup>
      </div>

      {category === 0 && <ProductManage/>}
      {category === 1 && <ProductRegister registerProduct={registerProduct}/>}
      {category === 2 &&
              <Row style={{ padding: "0 15px 0 15px", color:"#dadada" }}>
              <Col style={{ padding: "15% 0 15% 0", backgroundColor: "white",}}>
                <Row className="align-items-center justify-content-center" style={{ fontSize: "3rem", padding: "10px 0" }}>
                  <strong>To Be Continue...</strong>
                </Row>
                <Row className="can-click align-items-center justify-content-center" style={{ fontSize: "18px", color: "##6F7070", padding: "10px 0" }} onClick={() => history.goBack()}>
                  <Button to="/product" color="white">이전으로 돌아가기</Button>
                </Row>
              </Col>
            </Row>
      }
    </Page>
  );
};

export default ProductPage;
