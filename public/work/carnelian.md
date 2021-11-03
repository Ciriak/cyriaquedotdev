The idea of **Carnelian** is to have a concept similar to "user-scripts" but available on Desktop _([More about user-scripts here](https://en.wikipedia.org/wiki/Userscript))_

The project will expose various desktop events and APIs (like moving the mouse, timed events, etc) using [Robot.js](https://github.com/octalmage/robotjs)

 <video autoplay loop muted markdown="1">
        <source src="/clips/carnelian-demo-1.mp4" width="80%" type="video/mp4" markdown="0">
    </video>
    <br/>
    <small>Example : Check every 100ms the color of the screen at the coordinate 50:50, If the color is #FFFFFF (white) , then move the cursor the the coordinate 50:50</small>

Carnelian is divided in 2 major parts: the client (called "manager") and the server

- The server in in charge of executing the user scripts and emmiting the various events and instructions using websockets.

- The client itself is just a simple web app , it connect to the server, listen for the events and, of course, can emit some (like execute script "xxx" or retrieve the scripts list...).

The project use typescript and a proof of concept is working but i have yet to find the motivation to finish the manager part, wich is a lot of UI / UX work

 <video autoplay loop muted markdown="1">
        <source src="/clips/carnelian-demo-2.mp4" width="80%" type="video/mp4" markdown="0">
    </video>
    <br/>
    <small>Example: Emulate the "media keys" (wich are not present on every keyboard) when the user press F6 F7 or F8 (now act as Previous, pause/play , Next)</small>

The website of the project is available [Here](http://www.carnelian.io/)

<img src="/images/carnelian/carnelian-demo.gif">
