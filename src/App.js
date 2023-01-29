import GAListener from 'components/GAListener';
import { MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';

const DashboardPage = React.lazy(() => import('page/DashboardPage'));
const OrderPage = React.lazy(() => import('page/OrderPage'));
const OrderDetailPage = React.lazy(() => import('page/OrderDetailPage'));
const B2BPage = React.lazy(() => import('page/B2BPage'));
const ProductPage = React.lazy(() => import('page/ProductPage'));
const ProductRegister = React.lazy(() => import('page/ProductRegister'));
const ProductEdit = React.lazy(() => import('page/ProductEdit'));
const ProductDetailPage = React.lazy(() => import('page/ProductDetailPage'));
const Portfolio = React.lazy(() => import('page/Portfolio'));
const PortfolioList = React.lazy(() => import('page/PortfolioList'));

// 매출관리 
const SalesTotal = React.lazy(() => import('page/sales/SalesTotal'));
const SalesFlit = React.lazy(() => import('page/sales/SalesFlit'));
const SalesAccount = React.lazy(() => import('page/sales/SalesAccount'));

const Account = React.lazy(() => import('page/AccountRegister'));


const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={DashboardPage} />
                <Route exact path="/order" component={OrderPage} />
                <Route exact path="/order-detail" component={OrderDetailPage} />
                <Route exact path="/b2b" component={B2BPage} />
                <Route exact path="/product" component={ProductPage} />
                <Route exact path="/product_register" component={ProductRegister} />
                <Route exact path="/product-edit" component={ProductEdit} />
                <Route exact path="/product-detail" component={ProductDetailPage} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/portfolio/list" component={PortfolioList} />
                
                <Route exact path="/sales/total" component={SalesTotal} />
                <Route exact path="/sales/flit" component={SalesFlit} />
                <Route exact path="/sales/account" component={SalesAccount} />
                
                <Route exact path="/account" component={Account} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
