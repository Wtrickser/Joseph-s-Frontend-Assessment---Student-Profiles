import React from "react";
import { Img, Name, Block } from "../wraps";
import { Col, Row } from 'react-bootstrap';

export default class FetchStudent extends React.Component {
  state = {
    loading: true,
    list: []
  }

  async componentDidMount() {
    const url = "https://api.hatchways.io/assessment/students";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ list: data.students, loading: false })
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.list.length) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        {this.state.list.map(profile => (
          <Block key={profile.id}>
            <Row>
              <Col xs lg="2">
                <Img source={profile.pic}/>
              </Col>
              <Col md="auto">
              <Name>{profile.firstName} {profile.lastName}</Name>
              <Row >{profile.email}</Row>
              <Row>{profile.company}</Row>
              <Row>{profile.skill}</Row>
              <Row>{profile.grades.reduce((a, b) => a + parseInt(b), 0) / profile.grades.length}%</Row>
              </Col>
            </Row>
          </Block>
        ))}
      </div>
    );
  }
}
