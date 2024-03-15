/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
   return (
      <div className="card">
         <Avatar />
         <div className='data'>
            <Intro />
            <SkillList />
         </div>
      </div>
   );
}

function Avatar() {
   return (
      <img
         src="javale.jpg"
         alt="Le Thanh Quoc"
         className='avatar'
      ></img>
   );
}

function Intro() {
   return (
      <div>
         <h1>Le Thanh Quoc</h1>
         <p>
            Full-stack web developer and teacher at Udemy. When not coding or
            preparing a course, I like to play board games, to cook (and eat), or to
            just enjoy the Portuguese sun at the beach.
         </p>
      </div>
   )
}

function SkillList() {
   return (
      <div className="skill-list">
         <Skill skill="Java" emoji="🎉" color="blue" />
         <Skill skill="HTML+CSS" emoji="💖" color="yellow" />
         <Skill skill="Reactjs" emoji="😜" color="red" />
         <Skill skill="Javascript" emoji="🙄" color="green" />
      </div>
   );
}

function Skill(props) {
   return (
      <div className="skill" style={{ backgroundColor: props.color }}  >
         <span>{props.skill}</span>
         <span>{props.emoji}</span>
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
