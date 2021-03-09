import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
/***material ui components */
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import CustomDrawer from "./Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 295,
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 3,
    textAlign: "left",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  shortDesc: {
    textAlign: "left",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
}));

const CustomCard = (props) => {
  const classes = useStyles();
  const { card } = props;
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [cardDetail, setCardDetail] = React.useState(null);
  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(!drawerOpen);
    setCardDetail(card);
  };

  return (
    <Card className={classes.root} onClick={(e) => toggleDrawer(e)}>
      <CardActionArea>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {card.coreData.state}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {card.coreData.number}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Application: {card.coreData.application}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Assignee: {card.coreData.assignee}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.shortDesc}
          >
            {card.coreData.shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      <CustomDrawer
        toggleDrawer={toggleDrawer}
        drawerOpen={drawerOpen}
        cardDetail={cardDetail}
      />
    </Card>
  );
};
export default CustomCard;
