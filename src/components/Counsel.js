import React from 'react';
import PropTypes from 'utils/propTypes';

import { Media, Button, Badge } from 'reactstrap';

import Avatar from './Avatar';

const statusMap = {
  open: 'info',
  closed: 'muted',
  pending: 'success',
};

const Counsel = ({
  avatar,
  name,
  date,
  text,
  status,
  onClick,
  ...restProps
}) => {
  return (
    <div {...restProps}>
      <Media className="m-2">
        <Media left className="mr-2">
          <Avatar src={avatar} />
        </Media>
        <Media body>
          <Media heading tag="h6" className="m-0">
            {name}
          </Media>
          <p className="text-muted m-0">
            <small>{date}</small>
            <Badge color="secondary" pill className="mr-1" style={{marginLeft:"5px", marginTop:"2px"}}>
            {status}
        </Badge>
          </p>
        </Media>
      </Media>
      <Media>
        <p className="text-muted">{text}</p>
      </Media>
    </div>
  );
};

Counsel.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.date,
  text: PropTypes.string,
  status: PropTypes.oneOf(['open', 'closed', 'pending']),
  onClick: PropTypes.func,
};

Counsel.defualtProps = {
  avatar: '',
  name: '',
  date: '',
  text: '',
  status: 'pending',
  onClick: () => {},
};

export default Counsel;
