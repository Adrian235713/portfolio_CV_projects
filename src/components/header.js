import React, {useState} from 'react'
import {AiOutlineDownload} from 'react-icons/ai';
// ----------------------------------------------------------------------------------------------------
import dip1 from '../img/diploma/diplomaBiology.jpg'
import dip2 from '../img/diploma/diplomaPedgoric.jpg'
import rec1 from '../img/react/react1.png'
import rec2 from '../img/react/react2.png'
import rec3 from '../img/react/react3.png'
// ----------------------------------------------------------------------------------------------------
import hobby0 from '../img/hobby/hobby0.jpg'
import hobby1 from '../img/hobby/hobby1.jpg'
import hobby2 from '../img/hobby/hobby2.jpg'
import hobby3 from '../img/hobby/hobby3.jpg'
import hobby4 from '../img/hobby/hobby4.jpg'
import hobby5 from '../img/hobby/hobby5.jpg'
import hobby6 from '../img/hobby/hobby6.jpg'

function Header() {
    // ----------------------------------------------------------------------------------------------------
    const [documents,setDocuments] = useState(false);
    const [documentsInf,setDocumentsInf] = useState(null)
    const openDocuments = () => {
        setDocuments(true);
        setDocumentsInf(<div className="documentsDiv">
            <div className="buttonFixed">
                <button type="button  position: fixed;"  className="button" onClick={()=>{closeDokuments()}}>close</button>
            </div>
            <img src={rec1} alt="Coders Lab Diplom"/>
            <img src={rec2} alt="Coders Lab Diplom"/>
            <img src={rec3} alt="Coders Lab Diplom"/>
            <img src={dip1} alt="diploma Biology"/>
            <img src={dip2} alt="diploma Biology"/>
        </div>)
    } 
    const closeDokuments = () => {
        setDocuments(false)
        setDocumentsInf(null)
    }
    // ----------------------------------------------------------------------------------------------------
    const [hobby,setHooby] = useState(false)
    const [hobbyInf,setHobbyInf] = useState(null)
    const openHobby = () => {
        setHooby(true)
        setHobbyInf(
            <div className="documentsDiv">
                <div className="buttonFixed">
                    <button type="button  position: fixed;"  className="button" onClick={()=>{closeHobby()}}>close</button>
                </div>
                <img src={hobby1} alt=""/>
                <img src={hobby0} alt=""/>
                <img src={hobby3} alt=""/>
                <img src={hobby2} alt=""/>
                <img src={hobby5} alt=""/>
                <img src={hobby6} alt=""/>
                <img src={hobby4} alt=""/>
            </div>
        )
    }
    const closeHobby = () => {
        setHooby(true)
        setHobbyInf(null)
    }
    // ----------------------------------------------------------------------------------------------------
    const [projects,setProjects] = useState(false);
    const [projectsInf,setProjectsInf] = useState(null)
    const openProjectInf = () => {
        setProjects(true)
        setProjectsInf(
        <div className='projectsInf'>
            <div className="buttonFixed">
                 <button type="button  position: fixed;"  className="button" onClick={()=>{closeProjects()}}>close</button>
            </div>
                
            <ul>
                <li>
                    <a href="">project 1</a>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.</p>
                </li>
                <li>
                <a href="">project 2</a>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.</p>
                </li>
                        <li>
                    <a href="">project 3</a>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.</p>
                </li>

                        <li>
                    <a href="">project 5</a>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.</p>
                </li>

                <li>
                    <a href="">project 6</a>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.</p>
                </li>
                <li>
                    <a href="">project 1</a>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.</p>
                </li>
                <li>
                <a href="">project 2</a>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.</p>
                </li>
                        <li>
                    <a href="">project 3</a>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.</p>
                </li>

                        <li>
                    <a href="">project 5</a>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.</p>
                </li>

                <li>
                    <a href="">project 6</a>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.</p>
                </li>
                <li>
                    <a href="">project 7</a>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.</p>
                </li>
                <li>
                <a href="">project 8</a>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.</p>
                </li>
                        <li>
                    <a href="">project 9</a>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.</p>
                </li>

                        <li>
                    <a href="">project 10</a>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint id, 
                        impedit culpa ipsam quo error cum? Dolorum, quod necessitatibus! Asperiores id dolorum maxime? 
                        Eveniet nemo eligendi sapiente quo tempora.</p>
                </li>
            </ul>
        </div>
        )
    }
    const closeProjects = () => {
        setProjectsInf(null)
    }
    // ----------------------------------------------------------------------------------------------------
    return (
        <header>
            <button type="button" className="button" onClick={()=>{openProjectInf()}}>projects</button>
            {projectsInf}
            <button type="button" className="button" onClick={()=>{openDocuments()}} >documents</button>
            {documentsInf}
            <button type="button" className="button" onClick={()=>{openHobby()}}>hobby</button>
            {hobbyInf}
            <a href="https://drive.google.com/drive/folders/1nTU6pe835HWf1gzB7x7RqjdVdnqMG50m?usp=sharing" target="blank">
            <button type="button" className="button" ><AiOutlineDownload size="2em"/></button>
            </a>
        </header>
    )
}

export default Header
