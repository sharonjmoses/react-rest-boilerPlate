import styled from 'styled-components';

export const Images = styled.img`
  background-color: rgba(255, 255, 255, 0);
    display: block;
    background-image: url( ${(props) => (props.imurl? props.imurl : "NO Image")};);
  height: 10px;
  width: 10px;
  margin: 0;;
`;

export const InputFormSmall = styled.input`
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  padding: 0.3em;
  align-items: baseline;
  margin-left: 1em;
  margin-top: ${(props) => (props.mtSize ? props.mtSize : "0em")};
  width: 50%;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(164, 164, 164, 1);
  font-family: "OpenSans-SemiBold", Helvetica, Arial, serif;
  font-size: ${(props) => (props.fSize ? props.fSize : "1em")};
  line-height: ${(props) => (props.lhSize ? props.lhSize : "1em")};
  text-align: left;
  opacity: 1;
`;