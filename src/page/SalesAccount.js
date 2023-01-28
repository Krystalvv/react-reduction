import React, { useState } from 'react';
import {
  Row,
  Button,
  ButtonGroup,
  Input,
  Form,
  FormGroup,
  Label,
} from 'reactstrap';

import { salesData } from '../demos/dashboardPage';
import { useHistory } from 'react-router-dom';

import SalesTableView from '../components/SalesTableView';
import SearchInput from '../components/SearchInput';

const SalesAccount = () => {
  const history = useHistory();

  function getCount(filter, item, filter1, item1) {
    let count = 0;
    {
      salesData.map(({ type, method }, index) => (filter === 'type' && (item === type || item === '전체')) && (filter1 ? filter1 === 'method' && item1 === method : true) && (
        count++
      ))
    }
    return count;
  }

  const [type, setType] = useState('전체');
  const typeRadio = name => () => {
    setType(name)
  };

  return (
    <div>
      <div style={{ padding: "20px", backgroundColor: "white" }}>
      <Button style={{ width: "123px", marginLeft: "auto", marginTop:"-100px" }} color="dark"
      onClick={() => history.push('/account')}
      >등록하기</Button>
        <div style={{ margin: "5px" }}>
          <strong style={{ fontSize: "1.2rem", }}>상세내역</strong>
          <Row className="justify-content-between align-items-center" style={{ margin: "0px" }}>
            <Form>
              <FormGroup check inline>
                <Label check>
                  <Input value={'전체'} type="radio" className="radio_button" checked={type === '전체'} onChange={typeRadio('전체')} />전체
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input value={'매출'} type="radio" className="radio_button" checked={type === '매출'} onChange={typeRadio('매출')} /> 매출
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input value={'매입'} type="radio" className="radio_button" checked={type === '매입'} onChange={typeRadio('매입')} /> 매입
                </Label>
              </FormGroup>
            </Form>
            <SearchInput width='300px' />
          </Row>
        </div>
        <SalesTableView rowData={salesData} filter='type' item={type} filter1='method' item1='가계부' />
        <Row style={{ margin: "0" }}>
          <div style={{ marginLeft: "auto" }}>{`(총${getCount('type', type, 'method', '가계부')}/${salesData.length}개)`} </div>
        </Row>
        <Row style={{ margin: "0px" }}>
          <Button style={{ width: "123px" }} outline color="dark">전체선택</Button>
          <Button style={{ width: "123px", marginLeft: "10px" }} outline color="dark">선택삭제</Button>
          <Button style={{ width: "123px", marginLeft: "10px" }} outline color="dark">전체다운로드</Button>
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
    </div>
  );
};

export default SalesAccount;
