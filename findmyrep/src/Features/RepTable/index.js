import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Subheader from "../../Components/Subheader";
import H1 from "../../Components/H1";
import MemberH1 from "../../Components/MemberH1";
import Rep from "../../Components/Rep";
import propTypes from "prop-types";

const StyledGrid = styled(Grid)`
  position: relative;
`;

const ListH1 = styled(H1)`
  color: #616470;
  display: inline;
`;

const DivHeader = styled.div`
  color: #686a76;
  height: 40px;
  font-size: 14px;
  background-color: #f8f8f9;
  display: flex;
  align-items: center;
  padding-left: 8px;
  margin-bottom: 10px;
`;

const RepTable = props => {
  return (
    <Grid container spacing={0}>
      <StyledGrid item xs={12}>
        <Subheader>
          <ListH1>List / </ListH1> <MemberH1>{props.title}</MemberH1>
        </Subheader>
      </StyledGrid>
      <StyledGrid item xs={9}>
        <DivHeader>Name</DivHeader>
        {props.data ? (
          props.data.map(rep => {
            return (
              <Rep
                key={Math.random()}
                onClick={() => {
                  props.updateInfoBox(rep.name);
                }}
              >
                <p>{rep.name}</p>
              </Rep>
            );
          })
        ) : (
          <p>No results found.</p>
        )}
      </StyledGrid>
      <StyledGrid item xs={3}>
        <DivHeader>Party</DivHeader>
        {props.data
          ? props.data.map(rep => {
              let abbrev = rep.party.charAt(0);
              return (
                <Rep key={Math.random()}>
                  <p>{abbrev}</p>
                </Rep>
              );
            })
          : null}
      </StyledGrid>
    </Grid>
  );
};

export default RepTable;

RepTable.propTypes = {
  data: propTypes.array,
  title: propTypes.string,
  updateInfoBox: propTypes.func
};
