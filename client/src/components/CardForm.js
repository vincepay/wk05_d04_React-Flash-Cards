import React from 'react';

class CardForm extends React.Component {
  initialState = { front: '', back: '' }
  state = {...this.initialState}

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ name: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(this.state.front, this.state.back);
    this.setState({ front: '', back: '' })
    e.target.value = ''
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Front Side"
          required
          name="front"
          value={this.state.front}
          onChange={this.handleChange}
        />
        <input
          placeholder="Back Side"
          required
          name="back"
          value={this.state.back}
          onChange={this.handleChange}
        />
        <button className="btn" type="submit">Add Card</button>
      </form>
    )
  }
}

export default CardForm;