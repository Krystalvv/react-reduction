import logo200Image from 'assets/img/logo/logo_200.png';
import SourceLink from 'components/SourceLink';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  MdAccountCircle,
  MdArrowDropDownCircle,
  MdBorderAll,
  MdBrush,
  MdChromeReaderMode,
  MdDashboard,
  MdExtension,
  MdGroupWork,
  MdInsertChart,
  MdKeyboardArrowDown,
  MdNotificationsActive,
  MdPages,
  MdRadioButtonChecked,
  MdSend,
  MdStar,
  MdTextFields,
  MdViewCarousel,
  MdViewDay,
  MdViewList,
  MdWeb,
  MdWidgets,
  MdHome,
  MdLocalDining
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const navComponents = [
  // { to: '/buttons', name: 'buttons', exact: false, Icon: MdRadioButtonChecked },
  // {
  //   to: '/button-groups',
  //   name: 'button groups',
  //   exact: false,
  //   Icon: MdGroupWork,
  // },
  // { to: '/forms', name: 'forms', exact: false, Icon: MdChromeReaderMode },
  // { to: '/input-groups', name: 'input groups', exact: false, Icon: MdViewList },
  // {
  //   to: '/dropdowns',
  //   name: 'dropdowns',
  //   exact: false,
  //   Icon: MdArrowDropDownCircle,
  // },
  // { to: '/badges', name: 'badges', exact: false, Icon: MdStar },
  // { to: '/alerts', name: 'alerts', exact: false, Icon: MdNotificationsActive },
  // { to: '/progress', name: 'progress', exact: false, Icon: MdBrush },
  // { to: '/modals', name: 'modals', exact: false, Icon: MdViewDay },
];

const navContents = [
  // { to: '/typography', name: 'typography', exact: false, Icon: MdTextFields },
  // { to: '/tables', name: 'tables', exact: false, Icon: MdBorderAll },
];

const pageContents = [
  // { to: '/login', name: 'login / signup', exact: false, Icon: MdAccountCircle },
  // {
  //   to: '/login-modal',
  //   name: 'login modal',
  //   exact: false,
  //   Icon: MdViewCarousel,
  // },
];

const navItems = [
  { to: '/', name: 'home', exact: true, Icon: MdHome },
  { to: '/order', name: '주문관리', exact: true, Icon: MdLocalDining },
  { to: '/b2b', name: '수발주관리', exact: true, Icon: MdAccountCircle },
  { to: '/product', name: '상품관리', exact: true, Icon: MdBorderAll },
  { to: '/portfolio', name: '포트폴리오', exact: true, Icon: MdBrush },
  { to: '/', name: '매출관리', exact: true, Icon: MdDashboard },
  { to: '/input-groups', name: '광고', exact: true, Icon: MdViewList },
  { to: '/forms', name: 'my shop', exact: true, Icon: MdNotificationsActive },
  { to: '/tables', name: 'flens', exact: true, Icon: MdTextFields },
];

const bem = bn.create('sidebar-large');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
    activeItem: 0,
  };

  setActiveItem(index) {
    this.setState({activeItem : index});
  }

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()}>
        <div className={bem.e('content')}>
        <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                  onClick={() => this.setActiveItem(index)}
                >
                  <Icon className={index === this.state.activeItem ?  bem.e('nav-item-icon__active') : bem.e('nav-item-icon')} />
                  <span className={index === this.state.activeItem ?  bem.e('nav-name__active') : bem.e('nav-name')}>{name}</span>
                </BSNavLink>
              </NavItem>
            ))}

            {/* <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Components')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdExtension className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">Components</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenComponents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem> */}
            <Collapse isOpen={this.state.isOpenComponents}>
              {navComponents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            {/* <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Contents')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdSend className={bem.e('nav-item-icon')} />
                  <span className="">Contents</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenContents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem> */}
            <Collapse isOpen={this.state.isOpenContents}>
              {navContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            {/* <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Pages')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="">Pages</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenPages
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem> */}
            <Collapse isOpen={this.state.isOpenPages}>
              {pageContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
