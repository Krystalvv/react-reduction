import Page from 'components/Page';
import React from 'react';

import { MdArrowBack } from 'react-icons/md'
import { useHistory, useLocation } from 'react-router-dom';
import { productTableData } from 'demos/dashboardPage';
import { ProductSlider } from '../components/Part/Carousel';

const ProductDetailPage = ({ match }) => {
  const location = useLocation();
  const history = useHistory();
  const data = productTableData[location.state.index]

  return (
    <div style={{ backgroundColor: "white", height:"100vh" }}>
      <MdArrowBack className='can-click' size={30} onClick={() => history.goBack()} />
      <ProductSlider data={data}>

      </ProductSlider>
    </div>
  );
};

export default ProductDetailPage;
