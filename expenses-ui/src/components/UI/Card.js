import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; //ADDS OWN CUSTOMS CSS STYLES + CHILDREN'S CSS

  return <div className={classes}>{props.children}</div>;
}

export default Card;
