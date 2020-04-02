import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { Row, Col } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined,UnorderedListOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const { Search } = Input;

class Header extends Component {
    render() {
        return (
            <Row align="middle">
                <Col span={4}>
                    <UnorderedListOutlined style={{"fontSize":"20px","paddingLeft":"10px"}}/>
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

export default connect(null,null)(Header);