import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/index.js';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import { theme } from './theme/theme';
import { setToLS } from './utils/storeThemes';

const Index = () => {
	setToLS('all-themes', theme.themes);

	return (
		<React.StrictMode>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</React.StrictMode>
	);
};

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
