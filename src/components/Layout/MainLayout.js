import { Content, Footer, Header, Sidebar, SidebarTablet } from 'components/Layout';
import React from 'react';
import {
  MdImportantDevices,
  // MdCardGiftcard,
  MdLoyalty,
} from 'react-icons/md';
import NotificationSystem from 'react-notification-system';
import { NOTIFICATION_SYSTEM_STYLE } from 'utils/constants';

import {MdHome, MdWeb, MdInsertChart, MdWidgets, MdStar, MdNotificationsActive} from 'react-icons/md'
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
  Button,
  Row
} from 'reactstrap';
import bn from 'utils/bemnames';
import { NavLink } from 'react-router-dom';
const navItems = [
  { to: '/', name: 'home', exact: true, Icon: MdHome },
  { to: '/cards', name: 'cards', exact: false, Icon: MdWeb },
  { to: '/charts', name: 'charts', exact: false, Icon: MdInsertChart },
  { to: '/widgets', name: 'widgets', exact: false, Icon: MdWidgets },
  { to: '/badges', name: 'badges', exact: false, Icon: MdStar },
  { to: '/alerts', name: 'alerts', exact: false, Icon: MdNotificationsActive },
];
const bem = bn.create('sidebar-small');


class MainLayout extends React.Component {
  state = {
    sidebarMode: 0,
    activeItem: 0,
  };
  

  setActiveItem(index) {
    this.setState({activeItem : index});
  }

  componentWillReceiveProps({ breakpoint }) {
    if (breakpoint !== this.props.breakpoint) {
      this.checkBreakpoint(breakpoint);
    }
  }

  componentDidMount() {
    this.checkBreakpoint(this.props.breakpoint);

    // setTimeout(() => {
    //   if (!this.notificationSystem) {
    //     return;
    //   }

    //   this.notificationSystem.addNotification({
    //     title: <MdImportantDevices />,
    //     message: 'Welome to Reduction Admin!',
    //     level: 'info',
    //   });
    // }, 1500);

    // setTimeout(() => {
    //   if (!this.notificationSystem) {
    //     return;
    //   }

    //   this.notificationSystem.addNotification({
    //     title: <MdLoyalty />,
    //     message:
    //       'Reduction is carefully designed template powered by React and Bootstrap4!',
    //     level: 'info',
    //   });
    // }, 2500);
  }

  checkBreakpoint(breakpoint) {
    switch (breakpoint) {
      case 'xs':
        this.setState({sidebarMode:2})
        break
      case 'sm':
      case 'md':
        this.setState({sidebarMode:1})
        break

      case 'lg':
      case 'xl':
      default:
        this.setState({sidebarMode:0})
        break
    }
    console.log(this.state.sidebarMode)
  }

  render() {
    const { children } = this.props;
    return (
      <main className="cr-app bg-light">
        { this.state.sidebarMode === 0 &&
        <Sidebar />
        }
        { this.state.sidebarMode === 1 &&
        <SidebarTablet />
        }
        <Content fluid onClick={this.handleContentClick}>
          <Header />
          {children}
          <Footer />
        { this.state.sidebarMode === 2 &&
        <div style={{position:"fixed", padding: "10px", bottom:"0", right:"0", left:"0", backgroundColor:"white"}}>
        <Nav>
          {navItems.map(({ to, name, exact, Icon }, index) => (
              <BSNavLink
                tag={NavLink}
                to={to}
                activeClassName="active"
                exact={exact}
                onClick={() => this.setActiveItem(index)}
              >
                <Icon className={index === this.state.activeItem ?  bem.e('nav-item-icon__active') : bem.e('nav-item-icon')} />
              </BSNavLink>
          ))}
        </Nav>
        </div>
        }
        </Content>

        <NotificationSystem
          dismissible={false}
          ref={notificationSystem =>
            (this.notificationSystem = notificationSystem)
          }
          style={NOTIFICATION_SYSTEM_STYLE}
        />
      </main>
    );
  }
}

export default MainLayout;
