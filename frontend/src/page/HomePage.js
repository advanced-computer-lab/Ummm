
import { Layout, Menu,Button } from 'antd';
import React, { Component } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'; 
import '../css/App.css';
import { withRouter } from 'react-router-dom';



 

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  PlusOutlined,
  ImportOutlined ,
  SettingOutlined,
  BellOutlined,
} from '@ant-design/icons';




const { Header, Sider, Content } = Layout;



class HomePage extends React.Component {

   LogOutHandler = () => {
    var userid = localStorage.getItem('UserID')
   axios.delete('http://localhost:8000/logout',{data: {ID: userid}})
   localStorage.clear()
    window.open("LoginPage", "_self");
  };



  
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  // onClick={this.logoutHandler}
  // logoutHandler(){
  //   console.log("outtt")
  //  history.push('/LoginPage')
  // };

  render() {
    if (localStorage.getItem('AuthenticationState') !== "AdminAuthenticated") {
      window.open("LoginPage", "_self");
   }
   //Is their authentication token still valid?
  //  else if (Date.now > new Date(localStorage.getItem('AuthenticationExpires'))) {
  //        window.open("AccessDenied.html", "_self");
  //  }
    return (
        
        

      <Layout className="site-layout" >
              
         <Sider  collapsible collapsed={this.state.collapsed} style={{
                  maxHeight: 1400,
                }} >
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              My Profile
            </Menu.Item>
            <Menu.Item key="2" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
            <Menu.Item key="3" icon={<BellOutlined />}>
              Notifications
            </Menu.Item>
            <Menu.Item key="4" icon={<ImportOutlined />} > 
            <Button onClick={this.LogOutHandler}>Log Out</Button>
            </Menu.Item>
          </Menu>
          
        </Sider> 
        
       
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            
            <div class="grid-container"  >
        <div class="grid-item"> 
        
        <a name ="SearchPic" href="/SearchFlight" target="_self">
        <img class="static" src="https://i.ibb.co/b6q5BR1/fig1frame2.jpg" />
        <img class="active" src="https://media.giphy.com/media/l0ExdAn5aQzxQFkxq/giphy.gif"/>
        </a>
         </div>

         
         
             <div class="grid-item">
            <a name ="SearchPic" href="/viewflights" target="_self">
            <img class="static"  src="https://i.ibb.co/fp106MB/giphy.jpg" />
        <img class="active"   src="https://media.giphy.com/media/gkAEM5sXCFqB465YWg/giphy.gif"/>
                 </a>
             </div>
           

         <div class="grid-item">
         <a   name ="DeletePic" href="/CreateFlight" target="_self">
        <img class="static" src="https://i.ibb.co/xJx5KDR/creategifframee.jpg" />
           <img class="active" src="  https://i.giphy.com/media/3o6nV8OYdUhiuKja1i/giphy.webp"/>
                  </a> 

            </div>
                <div class="grid-item">
                <a  name ="EditPic" href="/viewflights" target="_self">
                <img class="static" src="https://i.ibb.co/r7b5Tcq/fraaaaaaame.gif" />
        <img class="active" src="https://media4.giphy.com/media/xTiIzscpttjBSNjMw8/giphy.gif?cid=ecf05e47cs5xh2s1q5mlyq45pm6gsqutb31voj1ejy6ki6bf&rid=giphy.gif&ct=g"/>
                </a> 
      </div>  
</div>


        


          </Header>
          
     
      </Layout>
           
      
    );
    
    
    
   
  }
 
}


export default HomePage;