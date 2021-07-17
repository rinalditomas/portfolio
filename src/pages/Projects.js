import React from "react";
import './Project.css'
import Fade from 'react-reveal/Fade';

export default function Projects() {

  return (

    <div className="projects">
       <Fade>
        <div className='title'>
            <h1>
                Projects
            </h1> 
            <i className="far fa-file-code"></i>
        </div>
        <div className='grid'>
            <div className='item1'>
                    <h1 className='project-title'>Cruce</h1>
                    
                    <p className='paragraph'>
                      CRUCE is a full stack application where companies can handle their products' deliveries in realtime, register delivery companies/riders and check all their metrics
                    </p>
                    <div className='tech-box'>
                    <p className='technologies'>Javascript</p>
                    <p className='technologies'>React</p>
                    <p className='technologies'>Redux</p>
                    <p className='technologies'>NodeJS</p>
                    <p className='technologies'>Sequelize</p>
                    <p className='technologies'>JWT</p>
                    <p className='technologies'>Socket.IO</p>
                    <p className='technologies'>MaterialUI</p>
                    </div>
                    <a className='link' href='https://github.com/rinalditomas/Cruce'>Check the code</a>
            </div>
            <div className='item2'>
                    <h1 className='project-title'>Argentum</h1>
                    
                    <p className='paragraph'>Argentine products sales page focusing on a foreign audience</p>
                    <div className='tech-box'>
                    <p className='technologies'>Javascript</p>
                    <p className='technologies'>React</p>
                    <p className='technologies'>Redux</p>
                    <p className='technologies'>NodeJS</p>
                    <p className='technologies'>Sequelize</p>
                    <p className='technologies'>JWT</p>
                    </div>
                    <a className='link' href='https://github.com/rinalditomas/argentum'>Check the code</a>
            </div>

            <div className='item3'>
                    <h1 className='project-title'>OMDB</h1>
                    
                    <p className='paragraph'>A IMDB clone, it was developed using a rest API</p>
                    <div className='tech-box'>
                    <p className='technologies'>Javascript</p>
                    <p className='technologies'>React</p>
                    <p className='technologies'>Redux</p>
                    <p className='technologies'>NodeJS</p>
                    <p className='technologies'>Moongose</p>
                    <p className='technologies'>JWT</p>
                    <p className='technologies'>CSS</p>
                    </div>
                    <a className='link' href='https://github.com/rinalditomas/ImdbClone'>Check the code</a>
            </div>

            <div className='item3'>
                    <h1 className='project-title'>ShoppingApp</h1>
                    
                    <p className='paragraph'>Shopping list application where you can add/file/delete shopping lists and edit their items once you access them only if they are not archived</p>
                    <div className='tech-box'>
                    <p className='technologies'>Javascript</p>
                    <p className='technologies'>React Native</p>
                    <p className='technologies'>Firebase</p>
                    <p className='technologies'>Firestore</p>
                    <p className='technologies'>CSS</p>
                    </div>
                    <a className='link' href='https://github.com/rinalditomas/ShoppingList-App' >Check the code</a>
            </div>
            <div className='item3'>
                    <h1 className='project-title'>Portfolio</h1>
                    
                    <p className='paragraph'>Personal porfolio to showcase all my projects</p>
                    <div className='tech-box'>
                    <p className='technologies'>Javascript</p>
                    <p className='technologies'>React</p>
                    <p className='technologies'>CSS</p>
                    </div>
                    <a className='link' href='https://github.com/rinalditomas/ShoppingList-App' >Check the code</a>
            </div>

            
        </div>
        </Fade>
    </div>
  
  );
}