import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
      fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.svgHover}
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-letter-k"
      width="40"
      height="40"
      viewBox="-1 -4 20 26"
      stroke-width="3"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      {" "}
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
      <line x1="7" y1="4" x2="7" y2="20" /> <path d="M7 12h2l8 -8" />{" "}
      <line x1="9" y1="12" x2="17" y2="20" />{" "}
    </svg>
  );
};
