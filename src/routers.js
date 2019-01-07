import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './view/home/home'
import Detail from './view/detail/detail'
import Index from './view/index'
import Page from './view/page/page'
import Login from './view/login/index'
import UserInfo from './view/userInfo/index'
const BasicRoute = () => (
	<HashRouter>
		<Switch>
			<Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
			<Index>
				<Switch>
        <Route path="/index/userInfo" component={UserInfo} />
					<Route path="/index/page" component={Page} />
					<Route path="/index/detail" component={Detail} />
				</Switch>
			</Index>
		</Switch>
	</HashRouter>
)
export default BasicRoute
