import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 8px",
    "margin-top": "60px",
    ...theme.mixins.toolbar
  }
}));

export default props => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}>
        Página Inicial
      </div>
    </main>
  );
};
