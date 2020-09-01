import React from "react";

import classes from "./BurguerMessage.module.css";

const burguerMessage = (props) => {
  const { bacon, salad, cheese, meat } = props.ingredients;
  
  if (meat === 0 && bacon === 0 && salad === 0 && cheese === 0) {
    return (
      <div className={classes.BurguerMessage}>
        <h3>Hello! Please Make your order</h3>
      </div>
    );
  }
  if (meat === 0 && bacon === 0 && salad > 0 && cheese > 0) {
    return <div className={classes.BurguerMessage}>
    <h3>Right now, It's a VEGGIE hamburger!</h3></div>;
  }
  if (meat === 1 && bacon === 1 && salad === 1 && cheese === 1) {
    return <div className={classes.BurguerMessage}><h3>a COMPLETE BURGER for you :)</h3></div>;
  }
  if (meat === 2 && cheese === 2) {
    return <div className={classes.BurguerMessage}><h3>It's DOUBLE CHEESE BURGER</h3></div>;
  }
  if (meat === 2) {
    return <div className={classes.BurguerMessage}><h3>It's DOUBLE</h3></div>;
  }
  if (meat === 3) {
    return <div className={classes.BurguerMessage}><h3>It's THREE!</h3></div>;
  }
  if (meat > 3) {
    return <div className={classes.BurguerMessage}><h3>WOW!!</h3></div>;
  } else {
    return <div className={classes.BurguerMessage}><h3>Mmmmm...</h3></div>;
  }
};

export default burguerMessage;
