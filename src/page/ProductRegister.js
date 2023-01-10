import React, { useState } from 'react';
import {
  Row, Col, Button
} from 'reactstrap';

import {
  BsDot
} from 'react-icons/bs';


import Page from 'components/Page';

import ProductRegister1 from './ProductRegister1';
import ProductRegister2 from './ProductRegister2';

const ProductRegister = () => {
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
      {step === 0 && <ProductRegister1 />}
      {step === 1 && <ProductRegister2 />}
      <Row className="align-items-center" style={{ padding:"10px", margin: "0px", backgroundColor: "white" }}>
        <Button style={{ marginLeft:"auto", width: "123px" }} outline color="dark">취소</Button>
        {step > 0 && <Button style={{ marginLeft:"10px", width: "123px" }} outline color="dark" onClick={prevStep}>이전</Button>}
        {step < 3 && <Button style={{ width: "123px", marginLeft: "10px" }} color="dark" onClick={nextStep}>다음</Button>}
        {step === 3 && <Button style={{ width: "123px", marginLeft: "10px" }} color="dark" onClick={nextStep}>등록하기</Button>}
      </Row>
    </Page>
  );
};

export default ProductRegister;
