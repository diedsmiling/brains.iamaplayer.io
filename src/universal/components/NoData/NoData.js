import React, {PropTypes} from 'react'
import styles from './Nodata.css'
import DramaImg from './Drama.svg'
import InlineSVG from 'svg-inline-react'

const Nodata = props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.noData}>
        <InlineSVG src={DramaImg}/>
        <span>{props.text}</span>
      </div>
    </div>
  )
}

Nodata.propTypes = {
  text: PropTypes.string
}

export default Nodata
