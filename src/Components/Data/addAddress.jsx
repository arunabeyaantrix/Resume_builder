import React, {useState, useEffect} from 'react'
import "../style.css";
import {Modal} from "antd";
import "antd/dist/antd.css";

function AddAddress(props) {
    const [visible,setVisible] = useState(props.visible);
    const [title, setTitle] = useState(props.title)
    const [init,setInit] = useState(true);

    const {onHideModal} = props;
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
    return (
        <Modal
            title={title}
            visible={visible}
            onCancel={setHandle}
            onOk={setHandle}
        >
            <form>
                <div class="form-group">
                    <label for="address" className="labelClass">Address Line 1:</label>
                    <input type="text" class="form-control" id="address_one" aria-describedby="address_one" placeholder="Address Line 1"/>
                </div>
                <div class="form-group">
                    <label for="district" className="labelClass">District:</label>
                    <input type="text" class="form-control" id="district" aria-describedby="district" placeholder="District"/>
                </div>
                <div class="form-group">
                    <label for="country" className="labelClass">Country:</label>
                    <input type="text" class="form-control" id="country" aria-describedby="country" placeholder="Country"/>
                </div>
                <div class="form-group">
                    <label for="phone_number" className="labelClass">Mobile Number:</label>
                    <input type="text" class="form-control" id="phone_number" aria-describedby="phone_number" placeholder="Mobile Number"/>
                </div>
                        
                    
                <div class="form-group">
                    <label for="last_name" className="labelClass">Last Name:</label>
                    <input type="text" class="form-control" id="last_name" aria-describedby="last_name" placeholder="Last Name"/>
                </div>
                <div class="form-group">
                    <label for="address" className="labelClass">Address Line 2:</label>
                    <input type="text" class="form-control" id="address_two" aria-describedby="address_two" placeholder="Address Line 2"/>
                </div>
                <div class="form-group">
                    <label for="state" className="labelClass">State:</label>
                    <input type="text" class="form-control" id="state" aria-describedby="state" placeholder="State"/>
                </div>
                <div class="form-group">
                    <label for="pincode" className="labelClass">Pincode:</label>
                    <input type="text" class="form-control" id="pincode" aria-describedby="pincode" placeholder="Pincode"/>
                </div>
               
            </form>
        </Modal>
    )
}

export default AddAddress;
