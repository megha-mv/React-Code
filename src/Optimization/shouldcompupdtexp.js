import React from "react";

class ShouldUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  _getLastmessage = () => {
    const { messages } = this.state;
    const lastMessage = messages[messages.length - 1];
    return lastMessage === undefined ? "" : lastMessage;
  };

  _onMessagechange = (event) => {
    const {
      target: { value }
    } = event;
    const { messages } = this.state;
    this.setState({ message: [...messages, value] });
  };

  render() {
    return (
      <>
        <h1> App Optimization Example</h1>
        <input
          type="text"
          value={this._getLastmessage()}
          onChange={this._onMessagechange}
          style={{ margin: "10px" }}
        />
        <MessageList messages={this.state.messages} />
      </>
    );
  }
}

class MessageList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.messages.map((m) => (
          <Message key={m} message={m} />
        ))}
      </ul>
    );
  }
}

let count = 1;

class Message extends React.Component {
  render() {
    console.log("<Message /> rendered - ${count++");
    return <li style={{ margin: "10px" }}>{this.props.message}</li>;
  }
}

export default ShouldUp;
