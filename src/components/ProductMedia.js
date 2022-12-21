import React from 'react';
import PropTypes from 'utils/propTypes';

import { Media, Badge } from 'reactstrap';

import Typography from 'components/Typography';

import BubbleChat from 'assets/img/icons/bubble_chat.svg';

const ProductMedia = ({ type, name, product, description, time, state, ...restProps }) => {
  return (
    <Media {...restProps}>
      {type === 0 &&
        <Badge color="primary" pill className="mr-1" style={{marginTop:"2px"}}>
          배달
        </Badge>
      }
      {type === 1 &&
        <Badge color="secondary" pill className="mr-1" style={{marginTop:"2px"}}>
          픽업
        </Badge>
      }
      <Media body className="overflow-hidden" style={{marginLeft:"10px"}}>
      <Media state className="text-truncate">
          {time}
      </Media>
        <Media className="text-truncate">
          {name} 님 | {product}
        </Media>
        <p className="text-muted text-truncate"><img style={{margin:"5px", width:"16px"}} src={BubbleChat}/>{description}</p>
      </Media>
      <Media state className="align-self-center">
          <Typography>{state}</Typography>
      </Media>
    </Media>
  );
};

ProductMedia.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  right: PropTypes.node,
};

export default ProductMedia;
