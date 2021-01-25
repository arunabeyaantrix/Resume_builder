import React from 'react'

function PrintResume(props) {
    console.log(props);
    return (
        <div>
           {alert(props.title)}
        </div>
    )
}

export default PrintResume
