import { Grid, TextField, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
//material-ui Components
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ClearIcon from "@material-ui/icons/Clear";
import React from "react";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 450,
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
  },
  title: {
    margin: "12px",
  },
  textField: {
    marginTop: "12px",
    paddingLeft: "25px !important",
    textAlign: "left",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  mainTitleContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
const CustomDrawer = (props) => {
  const classes = useStyles();
  const { cardDetail } = props;
  /**data under drawer**/
  const list = (anchor) => (
    <div
      className={classes.list}
      onClick={() => props.toggleDrawer()}
      onKeyDown={() => props.toggleDrawer()}
    >
      <div className={classes.mainTitleContainer}>
        <div className={classes.title}>
          <Typography gutterBottom variant="h5" component="h2">
            {cardDetail?.coreData?.number}
          </Typography>
        </div>
        <div onClick={() => props.toggleDrawer()}>
          {" "}
          <IconButton aria-label="clear">
            <ClearIcon />
          </IconButton>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={4} className={classes.textField}>
          <Typography>Assigned to:</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="standard-basic"
            fullWidth
            value={cardDetail?.coreData?.assignee}
          />
        </Grid>
        <Grid item xs={4} className={classes.textField}>
          <Typography>Short Description:</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField fullWidth value={cardDetail?.coreData?.shortDescription} />
        </Grid>
        <Grid item xs={4} className={classes.textField}>
          <Typography>Application:</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField fullWidth value={cardDetail?.coreData?.application} />
        </Grid>
        <Grid item xs={4} className={classes.textField}>
          <Typography>Made_sla:</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField fullWidth value={cardDetail?.serviceData?.made_sla} />
        </Grid>
        <Grid item xs={4} className={classes.textField}>
          <Typography>Upon_reject:</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField fullWidth value={cardDetail?.serviceData?.upon_reject} />
        </Grid>
        <Grid item xs={4} className={classes.textField}>
          <Typography>Opened_by:</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField fullWidth value={cardDetail?.serviceData?.opened_by} />
        </Grid>
        <Grid item xs={4} className={classes.textField}>
          <Typography>Priority:</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField fullWidth value={cardDetail?.serviceData?.priority} />
        </Grid>
        <Grid item xs={4} className={classes.textField}>
          <Typography>Activity_due:</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField fullWidth value={cardDetail?.serviceData?.activity_due} />
        </Grid>
        <Grid item xs={4} className={classes.textField}>
          <Typography>Approval:</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField fullWidth value={cardDetail?.serviceData?.approval} />
        </Grid>
      </Grid>
    </div>
  );
  return (
    <div>
      <SwipeableDrawer
        open={props.drawerOpen || false}
        onClose={() => props.toggleDrawer()}
        onOpen={() => props.toggleDrawer()}
        anchor={"right"}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};
export default CustomDrawer;
