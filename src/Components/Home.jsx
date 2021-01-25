import React,{Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./style.scss";
import AddAddress from "./Data/addAddress";
import AddEducationDetails from "./Data/addEducationDetail";
import Certifications from "./Data/certifications";
import PrintResume from "./Data/printResume"
import AddProject from "./Data/addProjects";
import {Input,Tag, Card} from "antd";
import { TweenOneGroup } from 'rc-tween-one';
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import * as projectActions from "../store/projects";
import { Collapse } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const {TextArea} = Input
const { Panel } = Collapse;

const text = "Hello there"

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
        },
        address:[],
        projects:[],
        educational_details:[],
        certificates:[],
    }
    
    generatePDf() {
        const doc = new jsPDF("p", "pt", "letter");
        doc.addFont("fonts/times-new-roman.ttf", "times-new-roman", "normal");
        // doc.addFont("Montserrat");
        doc.setFont("times-new-roman");
        // doc.addImage("images/logos/en/logo.png", "JPEG", 40, 40, 150, 30);
        var splitadd = doc.splitTextToSize(
            `Office 602
            Emirates Islamic Bank Building (Golden Building)
            22nd Rd - DeiraAl Sabkha - Dubai
            Nearest metro station : Baniyas square MS",180
            Support@splyr.com | +971 4 777 5000`
        );

        // var bottomText =  doc.splitTextToSize(`This is an auto-generated invoice from Splyr.com. If you have any queries  with regards to this invoice, please get in \ntouch with Splyr team by mail at support@splyr.com or by phone at +97147775000.`);
        doc.setFontSize(10);
        doc.text(splitadd, 563, 40, {
            align: "right",
            
        });
        doc.setFontSize(11);
        doc.setDrawColor(40, 37, 100);
        doc.setLineWidth(2);
        doc.line(40, 110, 563, 110);
        doc.setFontSize(12);
        // doc.setFont("Montserrat", 'bold');
        // doc.setFont("Montserrat-Bold");
        // doc.text(`Invoiced to,`, 40, 145, { align: "left"});
        
        // doc.setFont("Montserrat");
        // doc.setFontSize(11);
        // doc.text(`${fullName},`, 40, 160, { align: "left",fontSize:"12px"});
        // doc.text(`${address} ${townCity}`, 40, 175, { align: "left" });
        // doc.text(`${stateName}, ${countryName}`, 40, 190, { align: "left" });
        // doc.text(`Tel : ${mobileNumber}`, 40, 205, { align: "left" });
        // doc.text(`Order Number: ${orderNo}`, 563, 145, { align: "right" });
        // doc.text(`Order Placed Date & Time: ${moment(orderData.create_date).format("DD MMM, YYYY hh:mm A")}`, 563, 160, { align: "right" });
        // doc.setFontSize(9);
        // doc.setTextColor(146, 148, 150);
        // doc.text(bottomText, 40, 730, {
        //     align: "left",
        // });
        
        // let headers = this.createpdfTableHead();
        // let gDAta = this.generateData(orderData);

        // console.log("headers is here", headers);
        // console.log("gdata is ahdfha", gDAta);

        // doc.autoTable(headers, gDAta, {
        //     startY: 235,
        //     showHead: "firstPage",
        //     columnStyles: {
        //         0: { cellWidth: 197 },
        //         1: { cellWidth: 90 },
        //         2: { cellWidth: 70 },
        //         3: { cellWidth: 68 },
        //         4: { cellWidth: 100 },
        //     },

        //     theme: "plain",
        //     headStyles: {
        //         fillColor: [247, 247, 247],
        //         fontSize: 11,
        //     },
        //     alternateRowStyles: {
        //         fillColor: [255, 255, 255],
        //         fontSize: 10,
        //         textColor: [102, 102, 102],
        //     },
        //     bodyStyles: {
        //         fillColor: [247, 247, 247],
        //         textColor: [102, 102, 102],
        //         fontSize: 10,
        //     },
        //     styles: {font: "Montserrat"},
        // });

        doc.save(`Invoice_${Date.now()}.pdf`);
        
    }


    updatevalTostate(value, key) {
        let {postData} = this.state;
        let tempPostData = { ...postData };
        tempPostData[key] = value;
        this.setState({postData:tempPostData})
        
    }
     onHideModal = () => {
        this.setState({visible:false})
        let {address} = this.props;
        console.log(address);
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


    componentWillReceiveProps(newProps){
        let {projects,address,educational_details,certificates} = this.state;

        console.log(newProps.certificates);
        let temp_proj = [...projects];
        let temp_addr = [...address];
        let temp_edu = [...educational_details]
        let temp_cert = [...certificates]
        if(newProps.projectReducer.getProductData === true){
            temp_proj.push(newProps.projectReducer.passFilter)
        }
        if(newProps.address.getAddressData === true){
            temp_addr.push(newProps.address.passFilter)
        }
        if(newProps.educational.getEduData === true){
            temp_edu.push(newProps.educational.passFilter)
        }
        if(newProps.certificates.getCertificateData === true){
            temp_cert.push(newProps.certificates.passFilter)
        }
        this.setState({
            address:temp_addr,
            projects:temp_proj,
            educational_details:temp_edu,
            certificates:temp_cert
        })

    }

    render(){
        const { tags,tags2,visible, visible2,visible3,visible4,postData, inputValue,inputValue2 } = this.state;
        const tagChild = tags.map(this.forMap);
        const tagChild2 = tags2.map(this.forMap2);

        console.log("this address", this.state.address);
        console.log("this proj", this.state.projects);
        console.log("this edu detail", this.state.educational_details);
        console.log("this certificate", this.state.certificates);
        console.log("this tags", this.state.tags);
        console.log("this tags2", this.state.tags2);
        

        return (
            <React.Fragment>
                <div className="container">
                    <div className="mt-5 pt-5" style={{padding:"15px"}} >
                            <div className="mainRenderGrid">
                                <div>
                                    <Card title="Personal Details" className="mb-4" style={{padding:"15px"}}>
                                        <div class="form-group" style={{display:"grid", gridTemplateColumns:"120px 1fr"}}>
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
                                        <div class="form-group" style={{display:"grid", gridTemplateColumns:"120px 1fr"}}>
                                            <label for="last_name" className="labelClass">Last Name:</label>
                                            <input 
                                                type="text" 
                                                class="form-control" 
                                                id="last_name" 
                                                aria-describedby="last_name" 
                                                placeholder="Last Name"
                                                value={postData.last_name}
                                                onChange={(e) => this.updatevalTostate(e.target.value, "last_name")}
                                            />
                                        </div>

                                        <div class="form-group" style={{display:"grid", gridTemplateColumns:"120px 1fr"}}>
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
                                    </Card>
                                    
                                    <Card title="Address" className="mb-4" style={{padding:"15px"}}>
                                        <div class="form-group" style={{display:"grid", gridTemplateColumns:"1fr"}}>
                                           
                                            <button 
                                                type="button" class="btn btn-outline-primary btn-lg"
                                                style={{width:"100%"}} 
                                                onClick={() => this.setState({visible:true})}
                                                
                                            >
                                                <PlusOutlined />
                                                Add address
                                            </button>
                                        </div>
                                    </Card>

                                    <Card title="Skills & Hobbies" className="mb-4" style={{padding:"15px"}}>
                                        <div class="form-group" style={{display:"grid", gridTemplateColumns:" 1fr"}}>
                                            
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
                                    
                                        <div class="form-group" style={{display:"grid", gridTemplateColumns:"80px 1fr"}}>
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
                                        <div class="form-group" style={{display:"grid", gridTemplateColumns:" 1fr"}}>
                                            
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
                                        <div class="form-group" style={{display:"grid", gridTemplateColumns:"80px 1fr"}}>
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
                                    </Card>
                                    
                                   
                                    
                                </div>
                                <div>
                                    <Card title="Educational Details" className="mb-4" style={{padding:"15px"}}>
                                        <div class="form-group" style={{display:"grid", gridTemplateColumns:"1fr"}}>
                                            <Collapse  >
                                                <Panel header="This is panel header 1" key="1">
                                                <p>{text}</p>
                                                </Panel>
                                                <Panel header="This is panel header 2" key="2">
                                                <p>{text}</p>
                                                </Panel>
                                                <Panel header="This is panel header 3" key="3">
                                                <p>{text}</p>
                                                </Panel>
                                            </Collapse>
                                        </div>
                                        <div class="form-group" style={{display:"grid", gridTemplateColumns:"1fr"}}>
                                            <button 
                                                type="button" class="btn btn-outline-primary btn-lg"
                                                style={{width:"100%"}} 
                                                onClick={() => this.setState({visible2:true})}
                                                
                                            >
                                                <PlusOutlined />
                                                Add Educational Details
                                            </button>
                                        </div>
                                    </Card>
                                    
                                    <Card title="Projects" className="mb-4" style={{padding:"15px"}}>
                                    <div class="form-group" style={{display:"grid", gridTemplateColumns:" 1fr"}}>
                                       
                                        <button 
                                                type="button" class="btn btn-outline-primary btn-lg"
                                                style={{width:"100%"}} 
                                                onClick={() => this.setState({visible3:true})}
                                                
                                            >
                                                <PlusOutlined />
                                                Add Projects
                                        </button>
                                    </div>
                                    </Card>

                                    <Card title="Acheivements & Certifications" className="mb-4" style={{padding:"15px"}}>
                                        <div class="form-group" style={{display:"grid", gridTemplateColumns:" 1fr"}}>
                                            <button 
                                                type="button" class="btn btn-outline-primary btn-lg"
                                                style={{width:"100%"}} 
                                                onClick={() => this.setState({visible4:true})}
                                                
                                            >
                                                <PlusOutlined />
                                                Achievements & Certifications
                                        </button>
                                        </div>
                                    </Card>
                                    
                                    
                                   
                                    
    
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
                            <button type="submit" class="btn btn-primary" onClick={() => this.generatePDf()}>Create Resume</button>
    
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
                <Certifications
                    visible={visible4}
                    title={"Acheivements & Certifications"}
                    onHideModel={() => this.onHideModal4()}
                />
               
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        projectReducer:state.projectReducer,
        address: state.address,
        educational:state.educational,
        certificates:state.certificates,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...projectActions }, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
 
