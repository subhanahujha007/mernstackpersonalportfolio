import React from 'react'
import "./foter.css"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { Button } from '@mui/base';
const Footer = () => {
  return (
    <div className="footerclass">
        <div>
            <Typography variant="h3">About ME</Typography>
            <Typography variant="h5">
                Hi my name is Subhanshu Jha I am a full Stack Web Developer
            </Typography>
            <Link to="/contact">
            <Button className="btnclassfooter" >Contact Us</Button>
            </Link>
        </div>
        <div>
            <Typography variant="h4">Socials</Typography>
            <a href=""><BsGithub/></a>
            <a href=""><BsInstagram/></a>
            <a href=""><BsLinkedin/></a>
        </div>
    </div>
  )
}

export default Footer