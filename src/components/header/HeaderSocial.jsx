import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'
import {ImDribbble} from 'react-icons/im'

const HeaderSocial = () => {
  return (
    <div>
      <div className="header_social">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><GoMarkGithub/></a>
        <a href="https://dribble.com" target="_blank"><ImDribbble/></a>
      </div>
    </div>
  )
}

export default HeaderSocial
