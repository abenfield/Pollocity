import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { default as Home } from 'routes/Catalog/CatalogPage';
import { default as Login } from 'routes/Account/LoginPage';
import { default as Register } from 'routes/Account/RegisterPage';
import { default as EditAccount } from 'routes/Account/EditAccountPage';
import { default as ResetPassword } from 'routes/Account/ResetPasswordPage';
import { default as ForgotPassword } from 'routes/Account/ForgotPasswordPage';
import { default as ConfirmEmail } from 'routes/Account/ConfirmEmailPage';

import { default as TestPage } from 'routes/Test';

import { NoMatch } from 'routes/404/404Page';
import { IconType } from 'react-icons';
import {
  FiHome,
  FiEdit,
  FiPackage,
} from 'react-icons/fi';


export const Routes = () => (
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/login">
    <Login /> 
    </Route>
    <Route path ="/register">
      <Register/>
    </Route>
    <Route path ="/forgot-password">
      <ForgotPassword/>
    </Route>
    <Route path ="/reset-password">
      <ResetPassword/>
    </Route>
    <Route path ="/edit-account">
      <EditAccount/>
    </Route>
    <Route path = "/confirm-email">
      <ConfirmEmail/>
    </Route>


    <Route path ="*">
      <NoMatch/>
    </Route>
  </Switch>
)


export default Routes;