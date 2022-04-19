import React from "react";
import Card from "../UI/Card/Card";
import classes from "./MovieItem.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const MovieItem = (props) => {
  return (
    <Card className={classes.movieitem}>
      <div>
        <div className={classes.moviecomment}>
          <h2>
            {props.item.movieName}{" "}
            <IconButton onClick={() => props.HandleDelete(props.item.id)}>
              <DeleteIcon className={classes.icon} />
            </IconButton>
          </h2>
        </div>
        <div className={classes.movieitemcmnt}>{props.item.reviewComments}</div>
      </div>
    </Card>
  );
};

export default MovieItem;
