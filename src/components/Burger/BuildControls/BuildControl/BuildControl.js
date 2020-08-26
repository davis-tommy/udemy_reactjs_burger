import React from "react";

import classes from './BuildControl.module.scss';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.removed}
            disabled={props.disabled}>Less
        </button>
        <button
            className={classes.More}
            onClick={props.added}>More
        </button>
        <div className={classes.Label}>x {parseFloat(props.ingredient_price).toFixed(2)} USD</div>
    </div>
);

export default buildControl;