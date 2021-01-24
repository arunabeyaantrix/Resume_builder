import React,{Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./style.css";
import AddAddress from "./Data/addAddress";
import AddEducationDetails from "./Data/addEducationDetail";
import AddProject from "./Data/addProjects";
import {Input,Tag} from "antd";
import { TweenOneGroup } from 'rc-tween-one';
import * as projectActions from "../store/projects";

const {TextArea} = Input


class Home extends Component {
    state = {
        visible: false,
        visible2:false,
        visible3:false,
        visible4:false,
        tags: [],
        inputValue: '',
        tags2: [],
        inputValue2: '',
        projectData:{},
        postData : {
            first_name:"",
            last_name:"",
            objective:"",
        }
    }


    updatevalTostate(value, key) {
        let {postData} = this.state;
        let tempPostData = { ...postData };
        tempPostData[key] = value;
        this.setState({postData:tempPostData})
        
    }
     onHideModal = () => {
        this.setState({visible:false})
    }
    onHideModal2 = () => {
        this.setState({visible2:false})
    }
    onHideModal3 = () => {
        this.setState({visible3:false})
        
    }
    onHideModal4 = () => {
        this.setState({visible4:false})
    }
    saveInputRef = input => {
        this.input = input;
    };
    saveInputRef2 = input => {
        this.input = input;
    };

    handleClose = removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags:tags });
    };
    handleClose2 = removedTag => {
        const tags2 = this.state.tags2.filter(tag => tag !== removedTag);
        console.log(tags2);
        this.setState({ tags2:tags2 });
    };
    handleClose3 = removedTag => {
        const tags3 = this.state.tags3.filter(tag => tag !== removedTag);
        this.setState({ tags3:tags3 });
    };
    
      showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
      };
    
      handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
      };
      handleInputChange2 = e => {
        this.setState({ inputValue2: e.target.value });
      };
    
      handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { tags } = this.state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
          tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
          tags,
          inputVisible: false,
          inputValue: '',
        });
      };
      handleInputConfirm2 = () => {
        const { inputValue2 } = this.state;
        let { tags2 } = this.state;
        if (inputValue2 && tags2.indexOf(inputValue2) === -1) {
          tags2 = [...tags2, inputValue2];
        }
        console.log(tags2);
        this.setState({
          tags2,
          inputValue2: '',
        });
      };
    
      saveInputRef = input => {
        this.input = input;
      };
    
    forMap = tag => {
        const tagElem = (
            <Tag
                closable
                onClose={e => {
                e.preventDefault();
                this.handleClose(tag);
                }}
            >
                {tag}
            </Tag>
        );
        return (
            <span key={tag} style={{ display: 'inline-block' }}>
                {tagElem}
            </span>
        );
      };

    forMap2 = tag => {
        const tagElem = (
            <Tag
                closable
                onClose={e => {
                e.preventDefault();
                this.handleClose2(tag);
                }}
            >
                {tag}
            </Tag>
        );
        return (
            <span key={tag} style={{ display: 'inline-block' }}>
                {tagElem}
            </span>
        );
    };
    submitResume(e) {
        e.preventDefault()
        console.log("hiiii");
        console.log(this.props.projectReducer);
    }
    forMap3 = tag => {
        const tagElem = (
            <Tag
                closable
                onClose={e => {
                e.preventDefault();
                this.handleClose3(tag);
                }}
            >
                {tag}
            </Tag>
        );
        return (
            <span key={tag} style={{ display: 'inline-block' }}>
                {tagElem}
            </span>
        );
    };

    componentDidMount(){
        // let {projectData} = this.props.projectReducer;
        // console.log(projectData);
    }

    render(){
        const { tags,tags2,visible, visible2,visible3,visible4,postData, inputValue,inputValue2 } = this.state;
        const tagChild = tags.map(this.forMap);
        const tagChild2 = tags2.map(this.forMap2);
        return (
            <React.Fragment>
                <div className="container">
                    <div className="card mt-5 pt-5" style={{padding:"15px"}} >
                            <div className="mainRenderGrid">
                                <div>
                                    <div class="form-group" style={{display:"grid", gridTemplateColumns:"170px 1fr"}}>
                                        <label for="first_name" className="labelClass">First Name:</label>
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            id="first_name" 
                                            aria-describedby="first_name" 
                                            placeholder="First Name" 
                                            value={postData.first_name}
                                            onChange={(e) => this.updatevalTostate(e.target.value, "first_name")}
                                        />
                                    </div>
                                    <div class="form-group" style={{display:"grid", gridTemplateColumns:"170px 1fr"}}>
                                        <label for="objective" className="labelClass">Objective:</label>
                                        <TextArea 
                                            rows={4} 
                                            class="form-control" 
                                            id="objective" 
                                            aria-describedby="objective" 
                                            placeholder="Objective"
                                            value={postData.objective}
                                            onChange={(e) => this.updatevalTostate(e.target.value, "objective")}
                                            
                                        />
                                    </div>
                                    <div class="form-group" style={{display:"grid", gridTemplateColumns:"170px 1fr"}}>
                                        <label for="objective" className="labelClass">Address:</label>
                                        <button class="btn btn-primary" style={{width:"100%"}} onClick={() => this.setState({visible:true})}>Add address</button>
                                    </div>
                                    <div class="form-group" style={{display:"grid", gridTemplateColumns:"170px 1fr"}}>
                                        <div></div>
                                        <TweenOneGroup
                                            enter={{
                                            scale: 0.8,
                                            opacity: 0,
                                            type: 'from',
                                            duration: 100,
                                            onComplete: e => {
                                                e.target.style = '';
                                            },
                                            }}
                                            leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                                            appear={false}
                                        >
                                            {tagChild}
                                        </TweenOneGroup>
                                    </div>
                                  
                                    <div class="form-group" style={{display:"grid", gridTemplateColumns:"170px 1fr"}}>
                                        <label for="objective" className="labelClass">Hobbies:</label>
                                        <div style={{display:"grid", gridTemplateColumns:"1fr 120px"}}>
                                            <Input
                                                ref={this.saveInputRef}
                                                className="form-control"
                                                type="text"
                                                value={inputValue}
                                                onChange={this.handleInputChange}
                                                onPressEnter={this.handleInputConfirm}
                                                placeholder="Your Hobby"
                                            />
                                            <button class="btn btn-primary ml-1" style={{height:"36px"}}onClick={() => {this.handleInputConfirm()}}>Add to List</button>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div>
                                    <div class="form-group" style={{display:"grid", gridTemplateColumns:"170px 1fr"}}>
                                        <label for="last_name" className="labelClass">Last Name:</label>
                                        <input type="text" class="form-control" id="last_name" aria-describedby="last_name" placeholder="Last Name"/>
                                    </div>
                                    <div class="form-group" style={{display:"grid", gridTemplateColumns:"170px 1fr"}}>
                                        <label for="last_name" className="labelClass">Educational Details:</label>
                                        <button class="btn btn-primary" style={{width:"100%"}} onClick={() => this.setState({visible2:true})}>Add Educational Details</button>
                                    </div>
                                    <div class="form-group" style={{display:"grid", gridTemplateColumns:"170px 1fr"}}>
                                        <label for="last_name" className="labelClass">Projects:</label>
                                        <button class="btn btn-primary" style={{width:"100%"}} onClick={() => this.setState({visible3:true})}>Add Projects</button> 
                                    </div>
                                    <div class="form-group" style={{display:"grid", gridTemplateColumns:"170px 1fr"}}>
                                        <label for="last_name" className="labelClass">Achievements and Certifications:</label>
                                        <button class="btn btn-primary" style={{width:"100%"}} onClick={() => this.setState({visible4:true})}>Achievements and Certifications</button> 
                                    </div>
                                    <div class="form-group" style={{display:"grid", gridTemplateColumns:"170px 1fr"}}>
                                        <div></div>
                                        <TweenOneGroup
                                            enter={{
                                            scale: 0.8,
                                            opacity: 0,
                                            type: 'from',
                                            duration: 100,
                                            onComplete: e => {
                                                e.target.style = '';
                                            },
                                            }}
                                            leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                                            appear={false}
                                        >
                                            {tagChild2}
                                        </TweenOneGroup>
                                    </div>
                                    <div class="form-group" style={{display:"grid", gridTemplateColumns:"170px 1fr"}}>
                                        <label for="objective" className="labelClass">Skills:</label>
                                        <div style={{display:"grid", gridTemplateColumns:"1fr 120px"}}>
                                            <Input
                                                ref={this.saveInputRef2}
                                                className="form-control"
                                                type="text"
                                                value={inputValue2}
                                                onChange={this.handleInputChange2}
                                                onPressEnter={this.handleInputConfirm2}
                                                placeholder="Skills"
                                            />
                                            <button class="btn btn-primary ml-1" style={{height:"36px"}}onClick={() => {this.handleInputConfirm2()}}>Add to List</button>
                                        </div>
                                    </div>
                                    
    
                                </div>
                            </div>
                            
                            {/* <div class="form-group" style={{display:"grid", gridTemplateColumns:"170px 1fr"}}>
                                <label for="exampleInputPassword1">Password:</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" class="btn btn-primary" onClick={(e) => this.submitResume(e)}>Create Resume</button>
    
                    </div>
                </div>
                <AddAddress 
                    visible={visible}
                    title={"Add Address"}
                    onHideModel={() => this.onHideModal()}
                />
                <AddEducationDetails 
                    visible={visible2}
                    title={"Add Education Details"}
                    onHideModel={() => this.onHideModal2()}
                />
                <AddProject 
                    visible={visible3}
                    title={"Add Project"}
                    onHideModel={() => this.onHideModal3()}
                />
               
            </React.Fragment>
        )
    }

    

}

function mapStateToProps(state) {
    return {
        projectReducer:state.projectReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...projectActions }, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
 
