#!/usr/bin/env node

import readLine from "readline-sync";

const cli = () => {
	console.log("Welcome to the Brain Games!");
	const userName = readLine.question("May I have your name? ");
	console.log(`Hello, ${ userName }!`);
};

export default cli;
