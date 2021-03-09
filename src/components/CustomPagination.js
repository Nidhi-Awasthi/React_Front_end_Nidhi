import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiCard } from "../api/ApiCard";
import { fetchPage } from "../reducers/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
  paginationButton: {
    display: "flex",
  },
  commonButtonClass: {
    backgroundColor: "Transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none",
  },
  back: {
    width: "100px",
    cursor: "pointer",
  },
  next: {
    width: "100px",
    textAlign: "right",
    cursor: "pointer",
  },
  page: {
    padding: "6px 8px",
  },
}));
const CustomPagination = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    currentPage,
    numOfRecordsPerPage,
    getNumOfRecordsFromApiAtOneTime,
    cardList,
    pageToFetchFromApi,
  } = useSelector((state) => state.Card);
  const { setLoading } = props;
  /*back button method */
  const goToBackPage = () => {
    dispatch(fetchPage(currentPage - 1));
  };
  /*Next button method*/
  const goToNextPage = () => {
    dispatch(fetchPage(currentPage + 1));
    if (cardList.length / numOfRecordsPerPage - (currentPage + 1) === 3) {
      setLoading(true);
      dispatch(
        apiCard(pageToFetchFromApi, getNumOfRecordsFromApiAtOneTime)
      ).then((res) => setLoading(false));
    }
  };
  return (
    <div className={classes.pagination}>
      <div className={classes.paginationButton}>
        <Button
          className={(classes.back, classes.commonButtonClass)}
          onClick={() => goToBackPage()}
          disabled={currentPage === 1}
        >
          BACK
        </Button>
        <div className={classes.page}>
          Page {currentPage} of {cardList.length / numOfRecordsPerPage}
        </div>
        <Button
          className={(classes.next, classes.commonButtonClass)}
          onClick={() => goToNextPage()}
        >
          NEXT
        </Button>
      </div>
    </div>
  );
};
export default CustomPagination;
