import React, { useState} from 'react';
import PropTypes from 'utils/propTypes';

import bn from 'utils/bemnames';

import { Breadcrumb, BreadcrumbItem, Button, ButtonGroup } from 'reactstrap';

import Typography from './Typography';
import { useHistory } from 'react-router-dom';

const bem = bn.create('page');

const Page = ({
  title,
  breadcrumbs,
  tag: Tag,
  className,
  children,
  category_buttons,
  ...restProps
}) => {
  const classes = bem.b('px-3', className);

  const history = useHistory();
  const [category, setOpen] = useState(localStorage.getItem('category'));

    // category button change
    const toggle = (index) => () => {
      history.push(category_buttons[index].to);
      setOpen(category_buttons[index].name);
      localStorage.setItem('category', category_buttons[index].name);
    };

  return (
    <div>
      {/* 카태고리 탭 */}
      <div style={{margin:"0 20px 0 20px", backgroundColor:"white"}}>
        <ButtonGroup style={{display: category_buttons ? "block":"none"}}>
          {category_buttons && category_buttons.map(({name}, index) => (
            <Button
              onClick={toggle(index)}
              color=""
              className={category === name ? "category_button_active" : "category_button"}
            >{name}
            </Button>
          ))}
        <div style={{ height: "1px", backgroundColor: "#d9d9d9" }} />
        </ButtonGroup>
      </div>
    <Tag className={classes} {...restProps}>
      {children}
    </Tag>
    </div>
  );
};

Page.propTypes = {
  tag: PropTypes.component,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  children: PropTypes.node,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
  category_buttons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};

Page.defaultProps = {
  tag: 'div',
  title: '',
};

export default Page;
