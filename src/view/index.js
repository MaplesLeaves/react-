import React from 'react'
// import { Divider } from 'antd';
import { Layout, Menu, Icon, Dropdown} from 'antd'
import { Link } from 'react-router-dom'
import './index1.less'
import userInfo from './../images/userInfo1.jpg'
const { Header, Sider, Content, Footer } = Layout
let listMenu = [
	{
		name: '个人中心',
		id: '1',
		path: '/index/userInfo',
	},
	{
		name: '系统管理',
		id: '2',
		path: '/index/page',
	},
	{
		name: '人员管理',
		id: '3',
		path: '/index/detail',
	},
]
const menu = (
	<Menu>
		<Menu.Item key="0">
			<a>退出</a>
		</Menu.Item>
		<Menu.Item key="1">
			<a >个人中心</a>
		</Menu.Item>
	</Menu>
)
export default class SiderDemo extends React.Component {
	state = {
		collapsed: false,
	}

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		})
	}
	render() {
		return (
			<Layout style={{ height: '100%' }}>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						{listMenu.map(item => {
							return (
								<Menu.Item key={item.id} path={item.path}>
									<Icon type="user" />
									<span>{item.name}</span>
									<Link to={`${item.path}`}>{/* <span >{item.name}</span> */}</Link>
								</Menu.Item>
							)
						})}
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '001529', padding: 0, color: 'white' }}>
						<div className='userInfoMessage'>
							<Icon
								className="trigger"
								type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
								onClick={this.toggle}
							/>
							<div>
              <img src={userInfo} style={{width: '40px',height: '40px',borderRadius: '10px',marginRight: '10px'}}/>
								<Dropdown overlay={menu} trigger={['click']}>
                  <span>
                    mapleLeaves <Icon type="down" />
                  </span>
								</Dropdown>
							</div>
						</div>
					</Header>
					<Content
						style={{
							margin: '24px 16px',
							padding: 24,
							background: '#fff',
							minHeight: 280,
						}}
					>
						{this.props.children}
					</Content>
					<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
				</Layout>
			</Layout>
		)
	}
}
