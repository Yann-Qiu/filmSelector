import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { YoutubeOutlined } from '@ant-design/icons';
import  { actionCreator } from './store';

const { SubMenu } = Menu;

const countCtalogue = function(filmList){
    let tag = ["all"];
    filmList.forEach(element => {
        if(tag.indexOf(element.catalogue)<0)
            tag.push(element.catalogue)
    });
    return tag;
}

class SiderBar extends Component {

    render() {

        const {totalList,chosenTag,deleteList,addList,updateList} = this.props;
        let tag = countCtalogue(totalList.toJS());
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: "100%" }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu
                key="sub1"
                title={
                    <span>
                    <YoutubeOutlined />
                    <span>Film Catalogues</span>
                    </span>
                }
                >
                <Menu.ItemGroup key="g1" title="Catalogues">
                    {
                        tag.map((item)=>{
                        return (
                            chosenTag.indexOf(item) >=0 ?
                            <Menu.Item key={item} >
                                <label>
                                    <input type="checkbox" name="catalogue" value={item} checked={true} onChange={()=>{deleteList(item);updateList();}}
                                      />{item}
                                </label>
                            </Menu.Item>:
                            <Menu.Item key={item} >
                                <label>
                                    <input type="checkbox" name="catalogue" value={item} onChange={()=>{addList(item);updateList();}}
                                      />{item}
                                </label>
                                <br/>
                            </Menu.Item>
                            
                            
                            )
                        })
                    }
                </Menu.ItemGroup>
                </SubMenu>
            </Menu>
        );
    }
}

function mapStateToProps(state) {
    return {
        totalList: state.getIn(['list','totalList']),
        changedList: state.getIn(['list','changedList']),
        chosenTag: state.getIn(['list','chosenTag'])
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleClickBar(item){
            dispatch(actionCreator.handleClickBar(item.item));
        },
        addList(item){
            dispatch(actionCreator.addList(item));
        },
        deleteList(item){
            dispatch(actionCreator.deleteList(item));
        },
        updateList(list){
            dispatch(actionCreator.updateList(list));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(SiderBar);