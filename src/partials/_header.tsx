// {: .header-block }
// [![Up promote](@site/static/img/partners/uppromote.png)](https://partners.secomapp.com/apps/affiliate/FORDEER_APP)
//
import React from 'react';
import uppromote_logo from '@site/static/img/partners/uppromote.png';

const PartialHeader  = () => {
  return(
    <div className='header-partial'>
      <a href="https://partners.secomapp.com/apps/affiliate/FORDEER_APP" target="_blank">
        <img src={uppromote_logo} alt=""/>
      </a>
    </div>
  )
}
export default PartialHeader
