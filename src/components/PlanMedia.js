import React from 'react';
import PropTypes from 'utils/propTypes';

import { Media, Badge, Row, Col } from 'reactstrap';

import Typography from 'components/Typography';

import BubbleChat from 'assets/img/icons/bubble_chat.svg';

const PlanMedia = ({ key, done, description, start, end, ...restProps }) => {
  return (
    <Row {...restProps} className="align-items-center" style={{marginLeft:"0px", marginRight:"0px", padding:"5px"}}>
      {done === 0 &&
        <div style={{marginRight:"10px", width:"10px", height:"45px", backgroundColor:"#272727"}}></div>
      }
      {done === 1 &&
        <div style={{marginRight:"10px",width:"10px", height:"45px", backgroundColor:"#d7d7d7"}}></div>
      }
      <div>
        {description}
      </div>
      <div style={{textAlign:"right", marginLeft:"auto"}}>
        <Col style={{margin:"0px"}}>
          <div>{start}</div>
          <div>{end}</div>
        </Col>
      </div>
    </Row>
  );
};

PlanMedia.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  right: PropTypes.node,
};

export default PlanMedia;
