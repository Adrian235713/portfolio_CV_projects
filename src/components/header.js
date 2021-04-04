import React, {useState} from 'react'
import dip1 from '../img/diploma/diplomaBiology.jpg'
import dip2 from '../img/diploma/diplomaPedgoric.jpg'
import rec1 from '../img/react/react1.png'
import rec2 from '../img/react/react2.png'
import rec3 from '../img/react/react3.png'

function Header() {

    // ----------------------------------------------------------------------------------------------------
    const [documents,setDocuments] = useState(false);
    const [documentsInf,setDocumentsInf] = useState(null)
    const openDocuments = () => {
        setDocuments(true);
        console.log(documents);
        setDocumentsInf(<div className="documentsDiv">
            <button type="button" className="button" onClick={()=>{closeDokuments()}}>close</button>
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
        console.log(documents);
    }
    // ----------------------------------------------------------------------------------------------------


    return (
        <header>
            <p><a href="">adrianponiatowski24610@gmail.com</a></p>
            <button type="button" className="button">projects</button>
            <button type="button" className="button" onClick={()=>{openDocuments()}} >documents</button>
            {documentsInf}
            <button type="button" className="button">download</button>
            <button type="button" className="button">hobby</button>
        </header>
    )
}

export default Header
