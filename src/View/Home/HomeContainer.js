import Backdrop from "@material-ui/core/Backdrop";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
//material-ui
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//Api Methods
import { apiAuth } from "../../api/ApiAuth";
import { apiCard } from "../../api/ApiCard";
//components
import CustomCard from "../../components/CustomCard";
import CustomLoader from "../../components/customLoader";
import CustomPagination from "../../components/CustomPagination";

const Styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainGrid: {
    marginTop: "40px",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
const HomeContainer = () => {
  const classes = Styles();
  let dispatch = useDispatch();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [loading, setLoading] = useState(false);
  const {
    currentPage,
    numOfRecordsPerPage,
    getNumOfRecordsFromApiAtOneTime,
    cardList,
    pageToFetchFromApi,
  } = useSelector((state) => state.Card);
  // This method is doing the two tasks:
  // 1. First onn load it is calling the API to get the auth token
  // 2.Setting the valid auth token to req header of getCardList API
  // Note: On initial load getCardList params will be
  // page=0 perPage=60 (As clien side we want to show 12 card on one page and we want to load 4 page data ahead i.e.12*5= 60 )
  const renderAuthToken = () => {
    setLoading(true);
    let data = {
      username: "candidate_test1",
      password: "candidate_test1",
      snowEnabled: true,
    };
    dispatch(apiAuth(data)).then((res) => {
      if (res) {
        dispatch(
          apiCard(pageToFetchFromApi, getNumOfRecordsFromApiAtOneTime)
        ).then((res) => {
          setLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    /**api call to get the authentication token */
    renderAuthToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**card list method **/
  const getCardListDataAsPerCurrentPage = () => {
    let start = (currentPage - 1) * numOfRecordsPerPage;
    let end = currentPage * numOfRecordsPerPage;
    return cardList.slice(start, end) || [];
  };
  const handleClose = () => {
    setLoading(false);
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        {
          <Backdrop
            className={classes.backdrop}
            open={!getCardListDataAsPerCurrentPage().length && loading}
            onClick={handleClose}
          >
            <CustomLoader />
          </Backdrop>
        }
        <Grid container spacing={2} className={classes.mainGrid}>
          {getCardListDataAsPerCurrentPage().map((cardData, index) => {
            return (
              <React.Fragment key={index}>
                {matches ? (
                  <Grid item xs={12} sm={6} lg={3}>
                    <CustomCard card={cardData} />
                  </Grid>
                ) : (
                  <Grid item xs={12} sm={4} lg={3}>
                    <CustomCard card={cardData} />
                  </Grid>
                )}
              </React.Fragment>
            );
          })}
        </Grid>
        {getCardListDataAsPerCurrentPage()[0] ? (
          <CustomPagination loading={loading} setLoading={setLoading} />
        ) : null}
      </Container>
    </div>
  );
};
export default HomeContainer;
