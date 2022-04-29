import "./Card.scss";

export const Card = (props: any) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
