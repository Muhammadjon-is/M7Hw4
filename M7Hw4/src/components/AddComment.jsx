import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    opinion: {
      opinion: "",
      rate: " ",
      elementId: this.props.bookId,
    },
  };

  onChangeHandler = (value, fieldToSet) => {
    console.log(value);
    this.setState({
      opinion: {
        ...this.state.opinion,
        [fieldToSet]: value,
      },
    });
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify(this.state.opinion),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjNjMGQ0YmUzZDAwMTU4NDVmZTYiLCJpYXQiOjE2NjkyOTI1MjgsImV4cCI6MTY3MDUwMjEyOH0.qxWKL8aYO5zXizDr84vkG2BZYYdilNrEPxz4PkHr1MU",
          },
        }
      );
      if (response.ok) {
        alert("Comment posted!");
        this.setState({
          opinion: {
            opinion: "",
            rate: "",
            elementId: "",
          },
        });
      } else {
        console.log("Something went wrong!");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <div>
        <h2>You can write your Opnion!</h2>
        <Form onSubmit={this.onSubmitHandler}>
          <Form.Group>
            <Form.Label>Your Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your opinion here!"
              required
              value={this.state.opinion.opinion}
              onChange={(e) => this.onChangeHandler(e.target.value, "opinion")}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as="select"
              value={this.state.opinion.rate}
              onChange={(e) => this.onChangeHandler(e.target.value, "rate")}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Send Comment!
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddComment;
