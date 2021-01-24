import React, {useState, useEffect} from 'react'
import "../style.css";
import {Modal,Radio} from "antd";
import "antd/dist/antd.css";

function AddEducationDetails(props) {
    const [visible,setVisible] = useState(props.visible);
    const [title, setTitle] = useState(props.title);
    const [value, setValue] = React.useState(1);
    

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
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      };
    return (
        <Modal
            title={title}
            visible={visible}
            onCancel={setHandle}
            onOk={setHandle}
        >
            <form>
                <div class="form-group">
                    <label for="school" className="labelClass">School/College:</label>
                    <input type="text" class="form-control" id="school" aria-describedby="school" placeholder="School/College"/>
                </div>
                <div class="form-group">
                    <label for="university" className="labelClass">University/Board:</label>
                    <input type="text" class="form-control" id="university" aria-describedby="university" placeholder="University/Board"/>
                </div>
                
                <div class="form-group">
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>Mark Percentage</Radio>
                        <Radio value={2}>CGPA</Radio>
                    </Radio.Group>
                </div>
                <div class="form-group">
                    <label for="marks" className="labelClass">{value === 1 ? "Mark Percentage" : "CGPA"}:</label>
                    <input type="text" class="form-control" id="marks" aria-describedby="marks" placeholder={value === 1 ? "Mark Percentage" : "CGPA"}/>
                </div>
                        
                    
                <div class="form-group">
                    <label for="pass_out_year" className="labelClass">Pass out Year:</label>
                    <input type="text" class="form-control" id="pass_out_year" aria-describedby="pass_out_year" placeholder="Pass out Year"/>
                </div>
               
            </form>
        </Modal>
    )
}

export default AddEducationDetails;
