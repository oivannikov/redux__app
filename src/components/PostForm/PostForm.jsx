import React from 'react';
import { connect } from 'react-redux';

import { createPosts, hideAlert, showAlert } from '../../redux/actions';
import { Alert } from '../Alert/Alert';

class PostFrom extends React.Component {
  state = {
    title: '',
  }
 
  submitHandle = (event) => {
    event.preventDefault();
    
   
    const { title } = this.state;
    const { createPosts, showAlert } = this.props;

    if (!title.trim()) {
      return showAlert('Название поста не может быть пустым');
    }
    const newPost = {
      title,
      id: Date.now().toString(),
    }

    createPosts(newPost);
    this.setState({ title: ''});
  }

  changeInputHandler = (event) => {
    event.persist();
    this.setState(prev => ({...prev, ...{
      [event.target.name]: event.target.value,
    }}));
    
    this.props.hideAlert();
    // this.setState({title: event.target.value});
  }

  render() {
    const { title } = this.state;
    const { alert } = this.props;

    return (
      <form onSubmit={this.submitHandle}>
        { alert && <Alert text={alert} /> }
        <div className="form-group">
          <label htmlFor="title">Заголовок текста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            name="title"
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="sumbit">Создать</button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  createPosts,
  showAlert,
  hideAlert,
}

const mapStateToProps = state => ({
  alert: state.app.alert,
})

export default connect(mapStateToProps, mapDispatchToProps)(PostFrom);

