import React, {PropTypes} from 'react'
import styles from './Nodata.css'
import DramaImg from './Drama.svg'
import InlineSVG from 'svg-inline-react'

const Nodata = props => (
  <div className={styles.wrapper}>
    <div className={styles.noData}>
      <InlineSVG src={DramaImg}/>
      <span className={styles.fullWidth}>
        {props.text}
      </span>
      <span className={styles.fullWidth}>
        {props.addButton}
      </span>
    </div>
  </div>
)


Nodata.propTypes = {
  text: PropTypes.string,
  addButton: PropTypes.element
}

export default Nodata
