// package
import React, { useState } from 'react';
import {
  Col,
  Row,
  Button,
  ButtonGroup,
  Input,
  Form,
  FormGroup,
  Label,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { MdCancel } from 'react-icons/md';

// demo data
import { salesData, barChartOptions, DayData, MonthData, WeekData } from 'demos/dashboardPage';

// component
import SalesTableView from '../components/SalesTableView';
import SearchInput from '../components/SearchInput';

const SalesTotal = ({graph}) => {
  const history = useHistory(); // change page url

  // state
  const [sales, popupSales] = useState(false);
  const [purchase, popupPurchase] = useState(false);
  const [type, setType] = useState('전체');
  const [date, setDate] = useState(() => new Date());
  // const [graph, setGraph] = useState(window.location.href.split('/')[window.location.href.split('/').length - 1]);

  // get dummy data
  const getData = (item) => {
    if (item === 0) return DayData()
    else if (item === 1) return WeekData()
    else if (item === 2) return MonthData()
    else return DayData()
  }

  // get searched list count
  function getCount(filter, item) {
    let count = 0;
    {
      salesData.map(({ type, method }, index) => (filter === 'type' && (item === type || item === '전체')) && (
        count++
      ))
    }
    return count;
  }

  // popup sales
  const toggleSales = () => {
    popupSales(!sales);
    if (!sales) {
      popupPurchase(false)
    }
  };

  // popup purchase
  const togglePurchase = () => {
    popupPurchase(!purchase)
    if (!purchase) {
      popupSales(false)
    }
  }

  // toggle radio button - 전체, 매출, 매입
  const typeRadio = name => () => {
    setType(name)
  };

  const LineSplit = () => {
    return (
      <div style={{ height: "1px", backgroundColor: "#d9d9d9" }} />
    )
  }

  return (
    <div>

      {/* 매출 현황 */}
      <div className='sales_container'>
        <div className='sales_title'>
          <strong>매출 현황</strong>
        </div>
        <Row className="align-middle" style={{ margin: "10px 10px 0 10px", borderTop: "1px solid #d9d9d9", borderBottom: "1px solid #d9d9d9" }}>
          <Col style={{ margin: "0", padding: "10px", borderRight: "1px solid #d9d9d9", }}>
            <div align="right" style={{ display: "table-cell", verticalAlign: "middle" }}>
              <div className='sales_content'>
                최종 업데이트 일시 :
                {date.getFullYear()}.
                {('0' + (date.getMonth() + 1)).slice(-2)}.
                {('0' + date.getDate()).slice(-2)}&nbsp;
                {('0' + date.getHours()).slice(-2)}:
                {('0' + date.getMinutes()).slice(-2)}:
                {('0' + date.getSeconds()).slice(-2)}
              </div>
              <div style={{ margin: "5px", fontSize: "1.5rem" }}>2,000,000 원</div>
            </div>
          </Col>
          <Col style={{ margin: "0" }}>
            <Row onClick={toggleSales} className="align-items-center" style={{ padding: "10px", borderBottom: "1px solid #d9d9d9" }}>
              <div className='sales_title'>총 매출액</div>
              <Row className="align-items-center" style={{ marginLeft: "auto" }}>
                <div style={{ margin: "5px", fontSize: "1.0rem" }}>플릿 1,500,000 + 가계부 1,000,000</div>
                <div style={{ margin: "5px 10px 5px 10px", fontSize: "1.2rem" }}>2,500,000 원</div>
              </Row>
            </Row>

            <div style={{ display: sales ? "block" : "none" }} className="gradation_box">
              <Col>
                <Row className="justify-content-between" style={{ padding: "10px", fontSize: "1.2rem" }}>
                  <div>총 매출액</div>
                  <div>2,5000,000원 | 29건</div>
                  <MdCancel className="can-click" size={30} onClick={toggleSales} />
                </Row>
                <LineSplit />
                <Row style={{ margin: "0px" }}>
                  <Col style={{ borderRight: "1px solid #d9d9d9" }}>
                  <Row className="sales_row_center sales_row_center__popup">
                      플릿
                    </Row>
                    <Col>
                      <Row className="sales_row">
                        <div>카드결제</div>
                        <div>1,500,000원 | 15건</div>
                      </Row>
                      <Row className="sales_row">
                        <div>{'현장결제(POS)'}</div>
                        <div>150,000원 | 4건</div>
                      </Row>
                      <Row className="sales_row">
                        <div>계좌이체</div>
                        <div>50,000원 | 1건</div>
                      </Row>
                    </Col>
                  </Col>
                  <Col>
                    <Row className="sales_row_center sales_row_center__popup">
                      가계부
                    </Row>
                    <Col>
                      <Row className="sales_row">
                        <div>카드결제</div>
                        <div>400,000원 | 5건</div>
                      </Row>
                      <Row className="sales_row">
                        <div>{'현장결제(POS)'}</div>
                        <div>400,000원 | 4건</div>
                      </Row>
                      <Row className="sales_row">
                        <div>기타</div>
                        <div>0원 | 0건</div>
                      </Row>
                    </Col>
                  </Col>
                </Row>
              </Col>
            </div>

            <Row onClick={togglePurchase} className="align-items-center" style={{ padding: "10px" }}>
              <div style={{ margin: "5px", fontSize: "1.2rem" }}>총 매입액</div>
              <Row className="align-items-center" style={{ marginLeft: "auto" }}>
                <div style={{ margin: "5px", fontSize: "1.0rem" }}>플릿 350,000 + 가계부 150,000</div>
                <div style={{ margin: "5px 10px 5px 10px", fontSize: "1.2rem" }}>500,000 원</div>
              </Row>
            </Row>

            <div style={{ display: purchase ? "block" : "none" }} className="gradation_box">
              <Col>
                <Row className="justify-content-between" style={{ padding: "10px", fontSize: "1.2rem" }}>
                  <div>총 매입액</div>
                  <div>5000,000원 | 10건</div>
                  <MdCancel className="can-click" size={30} onClick={togglePurchase} />
                </Row>
                <LineSplit />
                <Row style={{ margin: "0px" }}>
                  <Col style={{ borderRight: "1px solid #d9d9d9" }}>
                  <Row className="sales_row_center sales_row_center__popup">
                      플릿
                    </Row>
                    <Col>
                      <Row className="sales_row">
                        <div>플릿</div>
                        <div>50,000원 | 3건</div>
                      </Row>
                    </Col>
                  </Col>
                  <Col>
                  <Row className="sales_row_center sales_row_center__popup">
                      가계부
                    </Row>
                    <Col>
                      <Row className="sales_row">
                        <div>꽃 사입</div>
                        <div>300,000원 | 3건</div>
                      </Row>
                      <Row className="sales_row">
                        <div>{'배달료'}</div>
                        <div>145,000원 | 5건</div>
                      </Row>
                      <Row className="sales_row">
                        <div>기타</div>
                        <div>0원 | 0건</div>
                      </Row>
                    </Col>
                  </Col>
                </Row>
              </Col>
            </div>
          </Col>
        </Row>
      </div>

      {/* 구간별 */}
      <div style={{ display: graph === 3 ? "block" : "none" }}>
      <div className='sales_container'>
        <div className='sales_title'>
          <strong>플릿 매출 현황</strong>
        </div>
        <Row className="align-middle" style={{ margin: "10px 10px 0 10px", borderTop: "1px solid #d9d9d9", borderBottom: "1px solid #d9d9d9" }}>
          <Col style={{ margin: "0", padding: "10px", borderRight: "1px solid #d9d9d9", }}>
            <div align="right" style={{ display: "table-cell", verticalAlign: "middle" }}>
              <div className='sales_content'>
                최종 업데이트 일시 :
                {date.getFullYear()}.
                {('0' + (date.getMonth() + 1)).slice(-2)}.
                {('0' + date.getDate()).slice(-2)}&nbsp;
                {('0' + date.getHours()).slice(-2)}:
                {('0' + date.getMinutes()).slice(-2)}:
                {('0' + date.getSeconds()).slice(-2)}
              </div>
              <div style={{ margin: "5px", fontSize: "1.5rem" }}>2,000,000 원</div>
            </div>
          </Col>
          <Col style={{ margin: "0" }}>
            <Row onClick={toggleSales} className="align-items-center" style={{ padding: "10px", borderBottom: "1px solid #d9d9d9" }}>
              <div className='sales_title'>총 매출액</div>
              <Row className="align-items-center" style={{ marginLeft: "auto" }}>
                <div style={{ margin: "5px", fontSize: "1.0rem" }}>플릿 1,500,000 + 가계부 1,000,000</div>
                <div style={{ margin: "5px 10px 5px 10px", fontSize: "1.2rem" }}>2,500,000 원</div>
              </Row>
            </Row>

            <div style={{ display: sales ? "block" : "none" }} className="gradation_box">
              <Col>
                <Row className="justify-content-between" style={{ padding: "10px", fontSize: "1.2rem" }}>
                  <div>총 매출액</div>
                  <div>2,5000,000원 | 29건</div>
                  <MdCancel className="can-click" size={30} onClick={toggleSales} />
                </Row>
                <LineSplit />
                <Row style={{ margin: "0px" }}>
                  <Col style={{ borderRight: "1px solid #d9d9d9" }}>
                  <Row className="sales_row_center sales_row_center__popup">
                      플릿
                    </Row>
                    <Col>
                      <Row className="sales_row">
                        <div>카드결제</div>
                        <div>1,500,000원 | 15건</div>
                      </Row>
                      <Row className="sales_row">
                        <div>{'현장결제(POS)'}</div>
                        <div>150,000원 | 4건</div>
                      </Row>
                      <Row className="sales_row">
                        <div>계좌이체</div>
                        <div>50,000원 | 1건</div>
                      </Row>
                    </Col>
                  </Col>
                  <Col>
                    <Row className="sales_row_center sales_row_center__popup">
                      가계부
                    </Row>
                    <Col>
                      <Row className="sales_row">
                        <div>카드결제</div>
                        <div>400,000원 | 5건</div>
                      </Row>
                      <Row className="sales_row">
                        <div>{'현장결제(POS)'}</div>
                        <div>400,000원 | 4건</div>
                      </Row>
                      <Row className="sales_row">
                        <div>기타</div>
                        <div>0원 | 0건</div>
                      </Row>
                    </Col>
                  </Col>
                </Row>
              </Col>
            </div>

            <Row onClick={togglePurchase} className="align-items-center" style={{ padding: "10px" }}>
              <div style={{ margin: "5px", fontSize: "1.2rem" }}>총 매입액</div>
              <Row className="align-items-center" style={{ marginLeft: "auto" }}>
                <div style={{ margin: "5px", fontSize: "1.0rem" }}>플릿 350,000 + 가계부 150,000</div>
                <div style={{ margin: "5px 10px 5px 10px", fontSize: "1.2rem" }}>500,000 원</div>
              </Row>
            </Row>

            <div style={{ display: purchase ? "block" : "none" }} className="gradation_box">
              <Col>
                <Row className="justify-content-between" style={{ padding: "10px", fontSize: "1.2rem" }}>
                  <div>총 매입액</div>
                  <div>5000,000원 | 10건</div>
                  <MdCancel className="can-click" size={30} onClick={togglePurchase} />
                </Row>
                <LineSplit />
                <Row style={{ margin: "0px" }}>
                  <Col style={{ borderRight: "1px solid #d9d9d9" }}>
                  <Row className="sales_row_center sales_row_center__popup">
                      플릿
                    </Row>
                    <Col>
                      <Row className="sales_row">
                        <div>플릿</div>
                        <div>50,000원 | 3건</div>
                      </Row>
                    </Col>
                  </Col>
                  <Col>
                  <Row className="sales_row_center sales_row_center__popup">
                      가계부
                    </Row>
                    <Col>
                      <Row className="sales_row">
                        <div>꽃 사입</div>
                        <div>300,000원 | 3건</div>
                      </Row>
                      <Row className="sales_row">
                        <div>{'배달료'}</div>
                        <div>145,000원 | 5건</div>
                      </Row>
                      <Row className="sales_row">
                        <div>기타</div>
                        <div>0원 | 0건</div>
                      </Row>
                    </Col>
                  </Col>
                </Row>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
      <div className='sales_container'>
        <div className='sales_title'>
          <strong>가계부 매출 현황</strong>
        </div>
        <Row className="align-middle" style={{ margin: "10px 10px 0 10px", borderTop: "1px solid #d9d9d9", borderBottom: "1px solid #d9d9d9" }}>
          <Col style={{ margin: "0", padding: "10px", borderRight: "1px solid #d9d9d9", }}>
            <div align="right" style={{ display: "table-cell", verticalAlign: "middle" }}>
              <div className='sales_content'>
                최종 업데이트 일시 :
                {date.getFullYear()}.
                {('0' + (date.getMonth() + 1)).slice(-2)}.
                {('0' + date.getDate()).slice(-2)}&nbsp;
                {('0' + date.getHours()).slice(-2)}:
                {('0' + date.getMinutes()).slice(-2)}:
                {('0' + date.getSeconds()).slice(-2)}
              </div>
              <div style={{ margin: "5px", fontSize: "1.5rem" }}>2,000,000 원</div>
            </div>
          </Col>
          <Col style={{ margin: "0" }}>
            <Row onClick={toggleSales} className="align-items-center" style={{ padding: "10px", borderBottom: "1px solid #d9d9d9" }}>
              <div className='sales_title'>총 매출액</div>
              <Row className="align-items-center" style={{ marginLeft: "auto" }}>
                <div style={{ margin: "5px", fontSize: "1.0rem" }}>플릿 1,500,000 + 가계부 1,000,000</div>
                <div style={{ margin: "5px 10px 5px 10px", fontSize: "1.2rem" }}>2,500,000 원</div>
              </Row>
            </Row>

            <div style={{ display: sales ? "block" : "none" }} className="gradation_box">
              <Col>
                <Row className="justify-content-between" style={{ padding: "10px", fontSize: "1.2rem" }}>
                  <div>총 매출액</div>
                  <div>2,5000,000원 | 29건</div>
                  <MdCancel className="can-click" size={30} onClick={toggleSales} />
                </Row>
                <LineSplit />
                <Row style={{ margin: "0px" }}>
                  <Col style={{ borderRight: "1px solid #d9d9d9" }}>
                  <Row className="sales_row_center sales_row_center__popup">
                      플릿
                    </Row>
                    <Col>
                      <Row className="sales_row">
                        <div>카드결제</div>
                        <div>1,500,000원 | 15건</div>
                      </Row>
                      <Row className="sales_row">
                        <div>{'현장결제(POS)'}</div>
                        <div>150,000원 | 4건</div>
                      </Row>
                      <Row className="sales_row">
                        <div>계좌이체</div>
                        <div>50,000원 | 1건</div>
                      </Row>
                    </Col>
                  </Col>
                  <Col>
                    <Row className="sales_row_center sales_row_center__popup">
                      가계부
                    </Row>
                    <Col>
                      <Row className="sales_row">
                        <div>카드결제</div>
                        <div>400,000원 | 5건</div>
                      </Row>
                      <Row className="sales_row">
                        <div>{'현장결제(POS)'}</div>
                        <div>400,000원 | 4건</div>
                      </Row>
                      <Row className="sales_row">
                        <div>기타</div>
                        <div>0원 | 0건</div>
                      </Row>
                    </Col>
                  </Col>
                </Row>
              </Col>
            </div>

            <Row onClick={togglePurchase} className="align-items-center" style={{ padding: "10px" }}>
              <div style={{ margin: "5px", fontSize: "1.2rem" }}>총 매입액</div>
              <Row className="align-items-center" style={{ marginLeft: "auto" }}>
                <div style={{ margin: "5px", fontSize: "1.0rem" }}>플릿 350,000 + 가계부 150,000</div>
                <div style={{ margin: "5px 10px 5px 10px", fontSize: "1.2rem" }}>500,000 원</div>
              </Row>
            </Row>

            <div style={{ display: purchase ? "block" : "none" }} className="gradation_box">
              <Col>
                <Row className="justify-content-between" style={{ padding: "10px", fontSize: "1.2rem" }}>
                  <div>총 매입액</div>
                  <div>5000,000원 | 10건</div>
                  <MdCancel className="can-click" size={30} onClick={togglePurchase} />
                </Row>
                <LineSplit />
                <Row style={{ margin: "0px" }}>
                  <Col style={{ borderRight: "1px solid #d9d9d9" }}>
                  <Row className="sales_row_center sales_row_center__popup">
                      플릿
                    </Row>
                    <Col>
                      <Row className="sales_row">
                        <div>플릿</div>
                        <div>50,000원 | 3건</div>
                      </Row>
                    </Col>
                  </Col>
                  <Col>
                  <Row className="sales_row_center sales_row_center__popup">
                      가계부
                    </Row>
                    <Col>
                      <Row className="sales_row">
                        <div>꽃 사입</div>
                        <div>300,000원 | 3건</div>
                      </Row>
                      <Row className="sales_row">
                        <div>{'배달료'}</div>
                        <div>145,000원 | 5건</div>
                      </Row>
                      <Row className="sales_row">
                        <div>기타</div>
                        <div>0원 | 0건</div>
                      </Row>
                    </Col>
                  </Col>
                </Row>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
      </div>

      {/* 매입매출 그래프 */}
      <div style={{ display: graph !== 3 ? "block" : "none", padding: "5px 5px 0 5px", backgroundColor: "white" }}>
        <div style={{ margin: "5px", fontSize: "1.2rem", }}>
          <strong>매입매출 그래프</strong>
        </div>
        <div style={{ padding: "20px", margin: "10px", marginBottom: "0", border: "1px solid #d9d9d9" }}>
          <Form style={{ marginBottom: "20px" }}>
            <FormGroup check inline>
              <Label check>
                <Input type="radio" className="radio_button" />총매출
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="radio" className="radio_button" /> 카드결제
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="radio" className="radio_button" /> {'현장결제(POS)'}
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="radio" className="radio_button" /> 계좌이체
              </Label>
            </FormGroup>
          </Form>
          <Bar height="100%" data={getData(graph)} options={barChartOptions} />
        </div>
      </div>

      <div style={{ padding: "20px", backgroundColor: "white" }}>
        <div style={{ margin: "5px", fontSize: "1.2rem", }}>
          <strong>상세내역</strong>
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
        <SalesTableView rowData={salesData} filter='type' item={type} />
        <Row style={{ margin: "0" }}>
          <div style={{ marginLeft: "auto" }}>{`(총${getCount('type', type)}/${salesData.length}개)`} </div>
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

export default SalesTotal;
