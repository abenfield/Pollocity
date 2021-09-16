import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { default as Home } from '../../pages/Home/Home';
import { default as Test } from '../../pages/Test/Test';
import { NoMatch } from '../../pages/404/NoMatch';
import { IconType } from 'react-icons';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
export const navItems: NavItem[] = [
    {
        title: 'Home',
        url: '/',
        type: 'origin',
        icon: FiHome,
    },
    {
        title: 'Test',
        url: '/test',
        type: 'origin',
        icon: FiHome,
    },
    {
      title: 'meme',
      url: 'https://google.com',
      type: 'remote',
      icon: FiHome,
    }
  ]

export interface NavItem {
    title: string,
    url: string,
    type: string,
    icon: IconType,
  };
  
export interface NavItems extends Array<NavItem>{}
  
export const Routes = () => (
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/test">
    <Test /> 
    </Route>
    <Route path ="*">
      <NoMatch/>
    </Route>
  </Switch>
)