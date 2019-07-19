import * as React from 'react'

interface ErrorMessageState { cisError: boolean, message: string, closeWindow: void };

export class ErrorMessage extends React.Component<ErrorMessageState, {}> {
  constructor(prop) {
    super(prop)
  }
  render() {
    return(
      this.props.isVisible &&
      <div className = 'error-window'>
        <div className = 'error-window__head' >Ошибка</div>
        <div className = 'error-window__message' >{this.props.message}</div>
        <div className = 'error-window__button-close' >
          <button onClick = {() => this.props.closeWindow()} className = 'error-window__button'>Закрыть</button>
        </div>
      </div>
    )
  }
    
}