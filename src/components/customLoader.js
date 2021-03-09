import CircularProgress from "@material-ui/core/CircularProgress";
//material-ui
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const Styles = makeStyles((theme) => ({
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
}));
const CustomLoader = () => {
  const classes = Styles();
  return (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  );
};
export default CustomLoader;
