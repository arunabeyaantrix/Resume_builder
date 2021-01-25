import React, {useState, useEffect} from 'react'
import { useDispatch } from "react-redux";
import "../style.scss";
import {Modal,Radio} from "antd";
import "antd/dist/antd.css";
import * as actions from "../../store/educational"

function AddEducationDetails(props) {
    const dispatch = useDispatch();
    const [visible,setVisible] = useState(props.visible);
    const [title, setTitle] = useState(props.title);
    const [value, setValue] = React.useState(1);

    const [postData,setPostData] = useState({
        school:"",
        board:"",
        pass_out_year:"",
        marks:"",
    })
    const {SaveEduData} = actions;
    

    useEffect(() => {
        if(props.visible === true){
            setVisible(props.visible);
            setTitle(props.title)
        }
    }, [props])
    function updatevalTostate(value, key) {
        let tempPostData = { ...postData };
        tempPostData[key] = value;
        setPostData(tempPostData);
    }

    function setHandle(){
            setVisible(false);
            props.onHideModel();
    }
    function handleOk(){
        setVisible(false);
        props.onHideModel();
        let tempPostData = {...postData};
        if(value === 1 ){
            tempPostData.marks_type = "Marks Percentage"
        }
        else if(value === 2 ){
            tempPostData.marks_type = "CGPA"
        }
        else{
            tempPostData.marks_type = "Marks Percentage"
        }
        dispatch(SaveEduData(tempPostData))
    }
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      };
    return (
        <Modal
            title={title}
            visible={visible}
            onCancel={setHandle}
            onOk={handleOk}
        >
            <form>
                <div class="form-group">
                    <label for="school" className="labelClass">School/College:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="school" 
                        aria-describedby="school" 
                        placeholder="School/College"
                        value={postData.school}
                        onChange={(e) => updatevalTostate(e.target.value,"school")}
                    />
                </div>
                <div class="form-group">
                    <label for="university" className="labelClass">University/Board:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="university" 
                        aria-describedby="university" 
                        placeholder="University/Board"
                        value={postData.board}
                        onChange={(e) => updatevalTostate(e.target.value,"board")}
                    />
                </div>
                
                <div class="form-group">
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>Mark Percentage</Radio>
                        <Radio value={2}>CGPA</Radio>
                    </Radio.Group>
                </div>
                <div class="form-group">
                    <label for="marks" className="labelClass">{value === 1 ? "Mark Percentage" : "CGPA"}:</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="marks" 
                    aria-describedby="marks" 
                    placeholder={value === 1 ? "Mark Percentage" : "CGPA"}
                    value={postData.marks}
                    onChange={(e) => updatevalTostate(e.target.value,"marks")}
                    />
                </div>
                        
                    
                <div class="form-group">
                    <label for="pass_out_year" className="labelClass">Pass out Year:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="pass_out_year" 
                        aria-describedby="pass_out_year" 
                        placeholder="Pass out Year"
                        value={postData.pass_out_year}
                        onChange={(e) => updatevalTostate(e.target.value,"pass_out_year")}
                    />
                </div>
               
            </form>
        </Modal>
    )
}

export default AddEducationDetails;
