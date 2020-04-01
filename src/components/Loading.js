import React from 'react'
import ReactLoading from 'react-loading'

 import '../style/loading.css'

 const Loading = () => (
    <div className="loading">
        <ReactLoading
            type='spinningBubbles'
        />
    </div>
 )

export default Loading