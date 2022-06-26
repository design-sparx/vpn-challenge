import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {LandingPage} from "./pages";
import {MantineProvider} from "@mantine/core";

function App() {
	return (
		<div className="App">
			<MantineProvider>
				<Routes>
					<Route path="/" element={<LandingPage/>}/>
				</Routes>
			</MantineProvider>
		</div>
	);
}

export default App;
