import React from 'react';

import Burguer from '../Burguer/Burguers/Burguer';
import Button from '../UI/Button/Button';
import classes from './Checkoutsummary.module.css';

const Checkoutsummary = (props) => {
    return ( 
        <div className={classes.Checkoutsummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burguer ingredients={props.ingredients}/>
            </div>
            <Button 
            btnType="Danger"
            clicked={props.checkOutCancelled}>CANCEL</Button>
            <Button 
            btnType="Success"
            clicked={props.checkOutContinued}>CONTINUE</Button>
        </div>
     );
}
 
export default Checkoutsummary;