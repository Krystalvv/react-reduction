import React, { useState } from 'react';
import PropTypes from 'utils/propTypes';

import {
  Media,
  Badge,
  Row,
} from 'reactstrap';

import Typography from 'components/Typography';

import BubbleChat from 'assets/img/icons/bubble_chat.svg';
import OrderDetailModal from './Modal/OrderDetailModal';
import { dashboardOrderDetail } from 'demos/dashboardPage';

const ProductMedia = ({ pk, type, name, product, description, time, state, detailData, ...restProps }) => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <Media {...restProps}>
        {type === 0 &&
          <Badge color="primary" pill className="mr-1" style={{ marginTop: "2px" }}>
            배송
          </Badge>
        }
        {type === 1 &&
          <Badge color="secondary" pill className="mr-1" style={{ marginTop: "2px" }}>
            픽업
          </Badge>
        }
        <div style={{ marginLeft: "10px", width: "100%" }} onClick={toggle()}>
          <Row>
            <Media body className="overflow-hidden" style={{ marginLeft: "10px", marginBottom: "-5px" }}>
              <Media state className="text-truncate">
                {time}
              </Media>
              <Media className="text-truncate">
                {name} 님 | {product}
              </Media>
              <p className="text-muted text-truncate"><img style={{ margin: "5px", width: "16px" }} src={BubbleChat} />{description}</p>
            </Media>
            <Media state className="align-self-center" style={{ marginRight: "0px" }}>
              <Typography>{state}</Typography>
            </Media>
          </Row>
        </div>


      </Media>
      {isOpen &&
        <OrderDetailModal
          pk={pk}
          show={isOpen}
          detailData={dashboardOrderDetail}
        />
      }
    </div>

  );
};

ProductMedia.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  right: PropTypes.node,
  detailData: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.string,
    })
  ),
};

export default ProductMedia;
