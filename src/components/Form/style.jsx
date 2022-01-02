import styled from 'styled-components';

const SForm = styled.div`
  font-family: roboto;
  color: #373939;
  font-size: 2em;
  text-align: center;
  .name {
    column-count: 3;
    column-gap: 1em;
  }

  h2 {
    color: #161616;
    font-weight: 500;
  }

  input {
    text-align: center;
    border-radius: 5px;
    border: none;
    -webkit-box-shadow: 3px 4px 8px -2px rgb(0 0 0 / 60%);
    box-shadow: 3px 4px 8px -2px rgb(0 0 0 / 60%);
    height: 21px;
  }

  .button {
    padding-top: 3px;
    padding-bottom: 18px;
    cursor: pointer;
    -webkit-box-shadow: 3px 4px 8px -2px rgb(0 0 0 / 60%);
    box-shadow: 3px 4px 8px -2px rgb(0 0 0 / 60%);
    height: 21px;
    margin-left: 10px;
    transition-duration: 0.4s;
    color: white;
    border-radius: 3px;
    background-color: rgb(247, 108, 108);
    border: 2px solid rgb(247, 108, 108);
  }

  .button:hover {
    background-color: white;
    color: rgb(247, 108, 108);
  }

  .list {
    margin-left: 3%;
    margin-right: 3%;
    background-color: #f4f4f4;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
  }
  .name p {
    padding: 17px;
    margin: 0;
    margin-top: 5px;
    margin-bottom: 11px;
  }
`;

export default SForm;
