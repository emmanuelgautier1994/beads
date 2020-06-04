import React from 'react'
import { hexToHSV } from '../utils/color-utils'

class HSVSliders extends React.Component{
  constructor(props) {
    super(props)
    this.state = { }
  }

  render(){
    const HSV = hexToHSV(this.props.color)
    return(
      <div className='grid-y align-center-middle text-center'>
        <div className="cell small-4">
          <span>H : {HSV.h.toFixed(3)}</span>
        </div>
        <div className="cell small-4">
          <span>S : {HSV.s.toFixed(3)}</span>
        </div>
        <div className="cell small-4">
          <span>V : {HSV.v.toFixed(3)}</span>
        </div>
      </div>
    )
  }
}

// = ({ submitSliderValue }) => {
//   const [sizeValue, setSizeValue] = React.useState(20)

//   return (
//     <div className="grid-y grid-padding-y align-center-middle text-center" style={{height: '100%'}}>
//       <div className="cell small-1">
//         <p>Pick grid size</p>
//       </div>
//       <div className="cell small-2">
//         <input
//         id="grid-size-picker" className="slider"
//         type="range" min="5" max="50" step="1"
//         value={sizeValue}
//         onChange={(e) => {setSizeValue(e.target.value)}}
//         />
//         <br />
//         {sizeValue} x {sizeValue}
//       </div>
//       <div className="cell small-1">
//       <button
//         type="button" className="success button"
//         onClick={(e)=>{
//           e.stopPropagation()
//           submitSliderValue(sizeValue)}
//         }
//       >
//         Let's go!
//       </button>
//       </div>
//     </div>
//   )
// }

export default HSVSliders