import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { Row, Col } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined,UnorderedListOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import  { actionCreator } from './store';

const { Search } = Input;

const countCtalogue = function(filmList){
    let tag = ["all"];
    filmList.forEach(element => {
        if(tag.indexOf(element.catalogue)<0)
            tag.push(element.catalogue)
    });
    return tag;
}

class Header extends Component {
    render() {
        const {totalList,handleClick} = this.props;
        let tag = countCtalogue(totalList.toJS());
        const menu = (
            <Menu>
                {
                    tag.map((item)=>{
                        return (
                            <Menu.Item key={item} onClick={()=>{handleClick(item)}}>
                                <a href="#">{item}</a>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
          );  

        return (
            <Row align="middle">
                <Col md={{span:4}} xs={{span:0}}>
                    <UnorderedListOutlined style={{"fontSize":"20px","paddingLeft":"10px"}}/>
                </Col>
                <Col xs={{span:4}} md={{span:0}}>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <UnorderedListOutlined style={{"fontSize":"20px","paddingLeft":"10px"}}/>
                        </a>
                    </Dropdown>
                </Col>
                <Col xs={{span:12}} lg={{span:8}}>
                    <Search 
                        placeholder="input search text" 
                        onSearch={value => console.log(value)} 
                        enterButton 
                    />
                </Col>
                <Col xs={{span:4,offset:4}} lg={{span:4,offset:8}} xl={{span:0}}>
                    <Button type="primary" style={{"marginRight":"5px"}}>Login</Button>
                </Col>
                <Col xs={{span:0}} xl={{span:4, offset:8}}>
                    <Avatar icon={<UserOutlined />} style={{"marginRight":"10px"}}/>
                    <Link to='/login'>
                        <Button type="primary" style={{"marginRight":"5px"}}>
                            Login
                        </Button>
                    </Link>
                    <Button>Register</Button>
                </Col>
            </Row>
        );
    }
}


function mapStateToProps(state) {
    return {
        totalList: state.getIn(['list','totalList'])
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick(item){
            dispatch(actionCreator.handleClick(item));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);