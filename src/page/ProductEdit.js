import React, { useState } from 'react';
import {
  Row, Col, Button
} from 'reactstrap';

import {
  BsDot
} from 'react-icons/bs';

import {
  AiOutlineCheckCircle
} from 'react-icons/ai';


import Page from 'components/Page';

import ProductRegister1 from './ProductRegister1';
import ProductRegister2 from './ProductRegister2';
import ProductRegister3 from './ProductRegister3';
import ProductRegister4 from './ProductRegister4';

const ProductEdit = ({ registerProduct, ...restProps }) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if(step > 4) return
    setStep(step + 1);
  }

  const prevStep = () => {
    if(step < 1) return
    setStep(step - 1);
  }

  

  return (
    <Page
      title="Input Groups"
      breadcrumbs={[{ name: 'Input Groups', active: true }]}
    >
      <div style={{fontSize:"20px", fontWeight:"bold", backgroundColor:"white", padding:"10px"}}> 상품 수정</div>
      { step < 4 && 
      <Row style={{ padding: "0 10px 0 10px", backgroundColor: "white" }}>
        <div style={{ margin: "0 10px", backgroundColor: "white" }}>
          <Row className="align-items-center" style={{ margin: "0px", padding: "20px" }}>
            <div className={step >= 0 ? "step step_set" : "step"}>{'1'}</div>
            <div style={{ backgroundColor: step >= 0 ? "#da4359" : "#b4b4b4", width: "100px", height: "3px" }}></div>
            <div className={step >= 1 ? "step step_set" : "step"}> {'2'}</div>
            <div style={{ backgroundColor: step >= 1 ? "#da4359" : "#b4b4b4", width: "100px", height: "3px" }}></div>
            <div className={step >= 2 ? "step step_set" : "step"}> {'3'}</div>
            <div style={{ backgroundColor: step >= 2 ? "#da4359" : "#b4b4b4", width: "100px", height: "3px" }}></div>
            <div className={step >= 3 ? "step step_set" : "step"}> {'4'}</div>
          </Row>
          <Row className="align-items-center" style={{ margin: "10px" }}>
            <BsDot style={{ color: "#da4359" }} />필수항목
          </Row>
        </div>
      </Row>
      }
      {step === 0 && <ProductRegister1 />}
      {step === 1 && <ProductRegister2 />}
      {step === 2 && <ProductRegister3 />}
      {step === 3 && <ProductRegister4 />}
      { step < 4 && 
      <Row className="align-items-center" style={{ padding:"10px", margin: "0px", backgroundColor: "white" }}>
        <Button style={{ marginLeft:"auto", width: "123px" }} outline color="dark">취소</Button>
        {step > 0 && <Button style={{ marginLeft:"10px", width: "123px" }} outline color="dark" onClick={prevStep}>이전</Button>}
        {step < 3 && <Button style={{ width: "123px", marginLeft: "10px" }} color="dark" onClick={nextStep}>다음</Button>}
        {step === 3 && <Button style={{ width: "123px", marginLeft: "10px" }} color="dark" onClick={nextStep}>수정하기</Button>}
      </Row>
      }
      { step === 4 && 
      <Row style={{ padding: "0 10px 0 10px", backgroundColor: "white" }}>
      <Col style={{padding:"15% 0 15% 0"}}>
      <Row className="align-items-center justify-content-center" style={{padding:"10px 0"}}>
      <AiOutlineCheckCircle size={100} style={{color:"#da4359"}}/>
      </Row>
      <Row className="align-items-center justify-content-center" style={{fontSize:"20px", padding:"10px 0"}}>
      <strong>상품이 수정 되었습니다.</strong>
      </Row>
      <Row className="can-click align-items-center justify-content-center" style={{fontSize:"18px", color:"##6F7070", padding:"10px 0"}}>
        <Button href="/product" color="white">상품조회로 이동</Button>
      </Row>
      </Col>
      </Row>
      }
    </Page>
  );
};

export default ProductEdit;
