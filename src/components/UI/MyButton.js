import React from "react";
import Button from "@material-ui/core/Button";
import icon_ticket from "../../resources/images/icons/ticket.png";

const MyButton = props => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size="small"
      style={{
        backgroundColor: props.bck_button,
        color: props.color
      }}
    >
      <img src={icon_ticket} alt={icon_ticket} className="iconImage" />
      {props.label}
    </Button>
  );
};

MyButton.defaultProps = {
  label: "Button",
  bck_button: "null",
  color: "null",
  link : "null"
};

export default MyButton;
