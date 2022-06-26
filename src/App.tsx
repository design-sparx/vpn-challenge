import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {LandingPage, ServersPage, WhatisVpnPage} from "./pages";
import {MantineProvider} from "@mantine/core";

function App() {
	return (
		<div className="App">
			<MantineProvider>
				<Routes>
					<Route path="/" element={<LandingPage/>}/>
					<Route path="/what-is-a-vpn" element={<WhatisVpnPage/>}/>
					<Route path="/servers" element={<ServersPage/>}/>
				</Routes>
			</MantineProvider>
		</div>
	);
}

export default App;
