import React from 'react'
import { Link } from 'react-router-dom'

export function Breadcrumb({url}) {

  let links = url.slice(1).split('/');

  return <ul className="uk-breadcrumb uk-margin-medium-bottom">
    <li><Link to="/">home</Link></li>

    {links.map((link, index, array) => {

      let isActive = index === array.length - 1;

      if(isActive) {
        return <li key={index}><span>{link.split('-').join(' ')}</span></li>
      } else {
        return <li key={index}><Link to={`/${link}`}>{link.split('-').join(' ')}</Link></li>
      }

    })}
  
</ul>
}