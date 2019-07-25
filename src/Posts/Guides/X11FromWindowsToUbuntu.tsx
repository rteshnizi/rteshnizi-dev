import React from 'react';
import { PostContents } from '../../Components/Post';

export default {
	title: "Debugging TkInter with PyCharm on Windows using Remote Interpreter and X11",
	date: new Date(2019, 7, 25, 15, 0, 0, 0),
	content(): React.ReactNode {
		return (
			<div>
				My main laptop runs Windows. I made a tkinter application in python.
				But the application depended on a library that code only run on Linux (namely, CGAL SWIG bindings).
				<br/>
				So I ended up installing Ubuntu 18.04 on a machine and get my python code to run there.
				But I couldn't debug my laptop for debugging code anymore.
				<br/>
				To get around that, I used PyCharm to run and debug my code remotely. That's well known (I will document that below as well).
				However, the issue for me was that I needed to use the tkinter UI to test the application.
				<h1>Assumptions</h1>
				<ol>
					<li>Your code lives on a Windows 10 machine.</li>
					<li>You have a remote Ubuntu machine</li>
				</ol>
				<h1>Prerequisites</h1>
				<ul>
					<li>
						<h2>On Windows</h2>
						<ul>
							<li>PyCharm Profession/Student Edition</li>
							<li>Git for Windows</li>
							<li>ssh</li>
						</ul>
					</li>
					<li>
						<h2>On Ubuntu</h2>
						<ul>
							<li>Python 3</li>
							<li>ssh</li>
							<li>xorg</li>
							<li>xauth</li>
						</ul>
					</li>
				</ul>
				<h1>How To</h1>
				{/* https://help.ubuntu.com/community/ServerGUI */}
				{/* http://kflu.github.io/2017/01/24/2017-01-24-win-x11-forward/ */}
				{/* https://medium.com/@erikhallstrm/work-remotely-with-pycharm-tensorflow-and-ssh-c60564be862d */}
			</div>
		);
	},
} as PostContents;
