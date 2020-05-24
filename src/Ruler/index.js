import React from 'react';
import './style.css';
import PrimaryButton from '../Buttons/PrimaryButton';

export default function (props) {

    const [visible, setVisible] = React.useState(true);
    return (
        <div className={visible ? "container visible" : "container"}>
            <div className="controller text-right">s
    <PrimaryButton onClick={() => {setVisible(!visible)}}>Turn {visible ? 'On' : 'Off'}</PrimaryButton>
            </div>
        </div>
        
    );
}