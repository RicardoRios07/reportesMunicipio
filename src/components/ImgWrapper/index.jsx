import React from 'react'
import PropTypes from 'prop-types'

const ImgWrapper = ({ img, ...rest }) => {
    return (
        <img src={img} alt='' height={rest.height ? rest.height : 'auto'} width={rest.width ? rest.width : 'auto'} />
    )
}
ImgWrapper.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string,
}

ImgWrapper.defaultProps = {
    icon: 'default',
    color: 'primary',
}

export default ImgWrapper
