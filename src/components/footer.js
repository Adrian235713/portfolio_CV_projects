import React from 'react'
import { AiFillLinkedin, AiOutlineYoutube, AiFillGithub} from 'react-icons/ai';

function footer() {
    return (
        <div className="footer">  
            <a href="https://www.linkedin.com/in/adrianponiatowski/" target="blank"><AiFillLinkedin size="3em"/></a>
            <a href="https://github.com/Adrian235713" target="blank"><AiFillGithub size="3em"/></a>
            <a href="https://www.youtube.com/channel/UCUper3XH7HJJ9ZebinDj13Q" target="blank"><AiOutlineYoutube size="3em"/></a>
        </div>
    )
}

export default footer
