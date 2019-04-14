import React, { Component } from "react";
//import "./App.css";
import Card from "./Component/Card";
import styled from "styled-components";

class App extends Component {
  state = {
    allcards: [
      {
        img:
          "https://pic4.zhimg.com/80/v2-2e21b2dcaf9233c5697c46524b2f4aae_qhd.jpg",
        title: "Cat",
        subTitle: "Meo"
      },
      {
        img: "http://www.cup.com.hk/wp-content/uploads/2017/02/akita3.jpg",
        title: "Dog",
        subTitle: "Woo"
      },
      {
        img:
          "https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D280%2C150%2C0/sign=aac85eab9a2bd407429280bd1db4ac69/dc54564e9258d10910326931dc58ccbf6d814d64.jpg",
        title: "Pig",
        subTitle: "hen"
      }
    ]
  };
  render() {
    const { allcards } = this.state;
    return (
      <div className="App">
        <Container>
          {allcards.map(card => (
            <Card img={card.img} title={card.title} subTitle={card.subTitle} />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;

const Container = styled.div`
  background-color: lightgrey;
  width: 600px;
  heighth: 600px;
`;
