import './styles/main.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from "./components/hello";

ReactDOM.render(
  <App compiler = "Typescript" framework = "React" />,
  document.getElementById("example")
)