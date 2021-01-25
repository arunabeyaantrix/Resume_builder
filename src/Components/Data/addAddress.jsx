import React, {useState, useEffect} from 'react'
import { useDispatch } from "react-redux";
import "../style.scss";
import {Modal} from "antd";
import "antd/dist/antd.css";
import * as actions from "../../store/address"

function AddAddress(props) {
    const dispatch = useDispatch();
    const [visible,setVisible] = useState(props.visible);
    const [title, setTitle] = useState(props.title)
    const [init,setInit] = useState(true);
    const [postData, setPostData] = useState({
        address1:"",
        address2:"",
        mobile_number:"",
        email:"",
        city:"",
        district:"",
        state:"",
        country:"",
    })
    const {SaveAddressData} = actions;


    function updatevalTostate(value, key) {
        let tempPostData = { ...postData };
        tempPostData[key] = value;
        setPostData(tempPostData);
    }

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
        dispatch(SaveAddressData(postData))
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
                    <label for="address" className="labelClass">Address Line 1:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="address_one" 
                        aria-describedby="address_one" 
                        placeholder="Address Line 1"
                        value={postData.address1}
                        onChange={(e) => updatevalTostate(e.target.value,"address1")}
                        
                    />
                </div>
                <div class="form-group">
                    <label for="address" className="labelClass">Address Line 2:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="address_two" 
                        aria-describedby="address_two" 
                        placeholder="Address Line 2"
                        value={postData.address2}
                        onChange={(e) => updatevalTostate(e.target.value,"address2")}
                    />
                </div>
                <div class="form-group">
                    <label for="phone_number" className="labelClass">Mobile Number:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="phone_number" 
                        aria-describedby="phone_number" 
                        placeholder="Mobile Number"
                        value={postData.mobile_number}
                        onChange={(e) => updatevalTostate(e.target.value,"mobile_number")}
                        
                    />
                </div>
                <div class="form-group">
                    <label for="email" className="labelClass">Email Address:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="email" 
                        aria-describedby="email" 
                        placeholder="Email Address"
                        value={postData.email}
                        onChange={(e) => updatevalTostate(e.target.value,"email")}
                        
                    />
                </div>
                <div class="form-group">
                    <label for="district" className="labelClass">District:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="district" 
                        aria-describedby="district" 
                        placeholder="District"
                        value={postData.district}
                        onChange={(e) => updatevalTostate(e.target.value,"district")}
                        
                    />
                </div>
                <div class="form-group">
                    <label for="state" className="labelClass">State:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="state" 
                        aria-describedby="state" 
                        placeholder="State"
                        value={postData.state}
                        onChange={(e) => updatevalTostate(e.target.value,"state")}
                        
                    />
                </div>
                <div class="form-group">
                    <label for="country" className="labelClass">Country:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="country" 
                        aria-describedby="country" 
                        placeholder="Country"
                        value={postData.country}
                        onChange={(e) => updatevalTostate(e.target.value,"country")}
                        
                    />
                </div>
                
                <div class="form-group">
                    <label for="pincode" className="labelClass">Pincode:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="pincode" 
                        aria-describedby="pincode" 
                        placeholder="Pincode"
                        value={postData.pincode}
                        onChange={(e) => updatevalTostate(e.target.value,"pincode")}   
                    />
                </div>
               
            </form>
        </Modal>
    )
}

export default AddAddress;
