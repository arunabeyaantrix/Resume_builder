import React, {useState, useEffect} from 'react'
import { useDispatch } from "react-redux";
import "../style.scss";
import {Modal,Input} from "antd";
import "antd/dist/antd.css";
import * as actions from "../../store/projects"

const {TextArea} = Input;

function AddProjects(props) {
    const dispatch = useDispatch();
    const [visible,setVisible] = useState(props.visible);
    const [title, setTitle] = useState(props.title);
    const [postData,setPostData] = useState({
        title:"",
        subtitle:"",
        description:""
    })

    const {SaveProjectData} = actions;

    useEffect(() => {
        if(props.visible === true){
            setVisible(props.visible);
            setTitle(props.title)
        }
    }, [props])

    function setHandle(){
            setVisible(false);
            props.onHideModel();
    }
    function handleOk(){
        setVisible(false);
        props.onHideModel();
        dispatch(SaveProjectData(postData))
}
    function updatevalTostate(value, key) {
        let tempPostData = { ...postData };
        tempPostData[key] = value;
        setPostData(tempPostData);

    }

    return (
        <Modal
            title={title}
            visible={visible}
            onCancel={setHandle}
            onOk={handleOk}
        >
            <form>
                <div class="form-group">
                    <label for="title" className="labelClass">Title:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="title" 
                        aria-describedby="title" 
                        placeholder="Title"
                        value = {postData.title}
                        onChange={(e) => updatevalTostate(e.target.value, "title")}
                    />
                </div>
                <div class="form-group">
                    <label for="subtitle" className="labelClass">Subtitle:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="subtitle" 
                        aria-describedby="subtitle" 
                        placeholder="Subtitle"
                        value = {postData.subtitle}
                        onChange={(e) => updatevalTostate(e.target.value, "subtitle")}
                    />
                </div>
                
                <div class="form-group">
                    <label for="description" className="labelClass">Description:</label>
                    <TextArea 
                        rows={4} 
                        class="form-control" 
                        id="description" 
                        aria-describedby="description" 
                        placeholder="Description"
                        value = {postData.description}
                        onChange={(e) => updatevalTostate(e.target.value, "description")}
                    />
                </div>
               
            </form>
        </Modal>
    )
}

export default AddProjects;
