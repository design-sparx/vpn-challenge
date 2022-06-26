import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {LandingPage, WhatisVpnPage} from "./pages";
import {MantineProvider} from "@mantine/core";

function App() {
	return (
		<div className="App">
			<MantineProvider>
				<Routes>
					<Route path="/" element={<LandingPage/>}/>
					<Route path="/what-is-a-vpn" element={<WhatisVpnPage/>}/>
				</Routes>
			</MantineProvider>
		</div>
	);
}

export default App;
