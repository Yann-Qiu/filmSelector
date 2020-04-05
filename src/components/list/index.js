import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Col, Row } from 'antd';
import { DislikeOutlined,LikeOutlined } from '@ant-design/icons';
import { 
	Title,Catalogue
} from './style.js';
import  { actionCreator } from './store';
import { Radio } from 'antd';
import { Pagination,Divider } from 'antd';
import { message } from 'antd';

class List extends Component {
    render() {

        const {changePage,onChangeDisplay,
            display,changedList,currentPage,
            handeleDislike,filterList,chosenTag} = this.props;

        const onDislikeBtn = (e,index,btnType)=>{
            let btns = document.getElementsByClassName(btnType);
            btns[index].style.color = "#c1c1c1";
        }

        const outDislikeBtn = (e,index,btnType)=>{
            let btns = document.getElementsByClassName(btnType);
            btns[index].style.color = "inherit";
        }

        const info = (catalogue) => {
            message.success("Successfully removed this catalogue: "+ catalogue);
          };

        return (    
            <div className="site-card-wrapper">
                <Row style={{"padding":"10px 0"}}>
                    <Col xl={{span:16,offset:8}} xs={{span:22,offset:2}}>
                        <Radio.Group onChange={(e)=>{changePage(1);onChangeDisplay(e);}} defaultValue="a">
                            {
                                display === "4" ? 
                                <Radio.Button value="4" checked={true}>4 elements</Radio.Button>
                                :<Radio.Button value="4">4 elements</Radio.Button>
                            }
                            {
                                display === "8" ? 
                                <Radio.Button value="8" checked={true}>8 elements</Radio.Button>
                                :<Radio.Button value="8">8 elements</Radio.Button>
                            }
                            {
                                display === "12" ? 
                                <Radio.Button value="12" checked={true}>12 elements</Radio.Button>
                                :<Radio.Button value="12">12 elements</Radio.Button>
                            }
                        </Radio.Group>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    {
                        changedList.length === 0 ?
                        (
                            <Row>
                                <Col>No Data</Col>
                            </Row>
                        ) :
                        changedList.map((item,index)=>{
                            for(let i=index;i<currentPage*display&&i>=(currentPage-1)*display;i++){
                                return(
                                    <Col 
                                        xl={{span:5,offset:1}} 
                                        lg={{span: 7, offset:1}} 
                                        md={{span:11,offset:1}} 
                                        sm={{span: 11, offset:1}}
                                        xs={{span:18, offset:6}} 
                                        key={item.get("title")}
                                    >
                                        <Card
                                            hoverable
                                            style={{ width: 200,marginBottom:"32px"}}
                                            cover={<img alt="example" src={item.get("imgUrl")} />}
                                        >
                                            <Row align="bottom">
                                                <Col span={16} >
                                                    <Title>
                                                        {item.get("title")}
                                                    </Title>
                                                </Col>
                                                <Col span={8}>
                                                    <Catalogue>
                                                        {item.get("catalogue")}
                                                    </Catalogue>   
                                                </Col> 
                                            </Row>
                                            <Row style={{"padding":"10px 0"}}>
                                                <Col span={12} align="center" justify="center">
                                                    <DislikeOutlined 
                                                        className="dislikeBtn" 
                                                        style={{"fontSize":"23px"}} 
                                                        onMouseEnter={(e,i)=>{onDislikeBtn(e,index,"dislikeBtn")}} 
                                                        onMouseLeave={(e,i)=>{outDislikeBtn(e,index,"dislikeBtn")}}
                                                        onClick={()=>{handeleDislike(item.get("catalogue"));filterList();info(item.get("catalogue"));}}
                                                    />
                                                </Col>
                                                <Col span={12} align="center" justify="center">
                                                    <LikeOutlined style={{"fontSize":"23px"}} 
                                                        className="likeBtn" 
                                                        onMouseEnter={(e,i)=>{onDislikeBtn(e,index,"likeBtn")}} 
                                                        onMouseLeave={(e,i)=>{outDislikeBtn(e,index,"likeBtn")}}
                                                    />
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                )
                            }
                        return null;
                        })
                    }
                </Row>
                <Row justify="center" style={{"margin":"20px 0"}}>
                    {
                        chosenTag.toJS().length === 0  ?
                        <Pagination 
                            defaultCurrent={1} 
                            total={1} 
                            pageSize={1}
                            hideOnSinglePage 
                        />:
                        <Pagination 
                            current={currentPage} 
                            total={changedList.toJS().length} 
                            pageSize={display} 
                            onChange={(page)=>{changePage(page)}}
                            showTotal={total => `Total ${total} items`}
                            responsive
                        />
                     }
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        changedList: state.getIn(['list','changedList']),
        dislike: state.getIn(['list','dislike']),
        display: state.getIn(['list','display']),
        currentPage: state.getIn(['list','currentPage']),
        chosenTag: state.getIn(['list','chosenTag']),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handeleDislike(catalogue){
            dispatch(actionCreator.handeleDislike(catalogue));
        },
        filterList(){
            dispatch(actionCreator.filterList());
        },
        onChangeDisplay(e) {
            dispatch(actionCreator.onChangeDisplay(e.target.value));
        },
        changePage(page){
            dispatch(actionCreator.changePage(page));
        }
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(List);