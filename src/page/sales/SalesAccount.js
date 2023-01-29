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

import { salesData } from '../../demos/dashboardPage';
import { useHistory } from 'react-router-dom';

import SalesTableView from '../../components/SalesTableView';
import SearchInput from '../../components/SearchInput';
import Page from '../../components/Page';
import { sales_url } from '../../common';
import Combobox from '../../components/Part/ComboBox';
import { MdAddCircle } from 'react-icons/md';

const SalesAccount = () => {
  const history = useHistory();

  const refresh = () => {
    console.log("refresh")
  }

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

  const searchDate = ['일별 매출', '주별 매출', '월별 매출', '구간별 매출']; // date range

  // state
  // const [graph, setGraph] = useState(window.location.href.split('/')[window.location.href.split('/').length - 1]);
  const [graph, setGraph] = useState(localStorage.getItem('graphIndex'));

  // change graph date range
  const currentItem = (x) => {
    let val;
    switch (x) {
      case '일별 매출':
        val = 0; break;
      case '주별 매출':
        val = 1; break;
      case '월별 매출':
        val = 2; break;
      default:
        val = 3; break;
    }
    setGraph(val);
    localStorage.setItem('graphIndex', val);
  };

  return (
    <Page category_buttons={sales_url}>
      {/* 필터 */}
      <div className='sales_container'>
        <Row className='sales_row_right'>
          <Combobox items={searchDate} currentItem={currentItem} index={graph} />
          <Input
            className="sales_input"
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
            style={{ visibility: graph !== 3 ? "visible" : "hidden" }}
          />
        </Row>
        {graph === 3 &&
          <Row className="sales_row_right">
            <Input
              className="sales_input"
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
            />
            -
            <Input
              className="sales_input"
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
            />
          </Row>
        }
      </div>
      <div style={{ padding: "20px", backgroundColor: "white" }}>
        <div className="can-click" style={{ fontSize: "18px", fontWeight: "bold" }} onClick={() => history.push('/account')}>
          <MdAddCircle size={20} />&nbsp; 등록하기
          </div>
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
    </Page>
  );
};

export default SalesAccount;
