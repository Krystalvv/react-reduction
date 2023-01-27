// package
import React, { useState } from 'react';
import { Row, Button, ButtonGroup, Input, } from 'reactstrap';
import { useHistory } from 'react-router-dom';

// component
import Page from 'components/Page';
import Combobox from '../components/Part/ComboBox';

// page
import SalesTotal from './SalesTotal';
import SalesFlit from './SalesFlit';
import SalesAccount from './SalesAccount';

const Sales = () => {
  const history = useHistory(); // chage page url
  const category_buttons = ['전체', '플릿', '가계부']; // category
  const searchDate = ['일별 매출', '주별 매출', '월별 매출', '구간별 매출']; // date range

  // state
  const [category, setOpen] = useState(0);
  const [graph, setGraph] = useState(window.location.href.split('/')[window.location.href.split('/').length - 1]);

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
    // console.log(window.location.href.split('/')[window.location.href.split('/').length - 1])
    history.push({
      pathname: `./${val}`
    })
  };

  // category button change
  const toggle = (index) => () => {
    setOpen(index);
  };

  return (
    <Page>
      {/* 카태고리 탭 */}
      <div className='sales_container'>
        <ButtonGroup>
          {category_buttons.map((val, index) => (
            <Button
              onClick={toggle(index)}
              color=""
              className={category === index ? "category_button_active" : "category_button"}
            >{val}
            </Button>
          ))}
        </ButtonGroup>
        <div style={{ height: "1px", backgroundColor: "#d9d9d9" }} />
      </div>

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

      {category === 0 && <SalesTotal graph={graph}/> /* 전체 */}
      {category === 1 && <SalesFlit /> /* 플릿 */}
      {category === 2 && <SalesAccount /> /* 가계부 */}
    </Page>
  );
};

export default Sales;
