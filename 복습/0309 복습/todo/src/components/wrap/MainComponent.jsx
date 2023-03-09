import React, { Component } from 'react';
import '../../scss/style_main.scss'

class MainComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      contents : '',
      todoList : []
    }
  }

  onChangeToDo = (e) => {
    this.setState({
      contents : e.target.value
    })
  }

  onClickToDoSave = (e) => {
    const key = 'TODO'
    let getData = localStorage.getItem(key);
    e.preventDefault();
    this.setState({
      todoList : [
        ...this.state.todoList,
        {contents : this.state.contents}
      ],
      // contents : ''
    })
    // console.log(getData);
    //기존의 getData에다가 새로 갱신된 contents를 추가
    getData = JSON.parse(getData);

    getData = [
      ...getData,
      {contents : this.state.contents}
    ]
    localStorage.setItem(key, JSON.stringify(getData));
  }

  render() {
    return (
      <main id="main">
        <div id="todo">
          <div className="container">
            <div className="title">
              <h2>TODO</h2>
            </div>
            <div className="content">
              <form name='todo_form' id='todoForm' method='post' action="todo.php">
                <input onChange={this.onChangeToDo} type="text" name='todoW' id='todoW' placeholder='내용을 입력하세요!' value={this.state.contents} />
                <button onClick={this.onClickToDoSave}>저장</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default MainComponent;