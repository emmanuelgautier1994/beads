import React from 'react'
import Canvas from './canvas'
import './home-screen.css'

const HomeScreen = ({ gridSize, setGridSize, verticalLayout, setVerticalLayout, onClickGoButton }) => (
  <div className="grid-y align-center-middle" style={{height: '100%'}}>
    <div className="cell small-3">
      <div className="title">
        <span className='letter-b'>B</span>
        <span className='letter-e'>e</span>
        <span className='letter-a'>a</span>
        <span className='letter-d'>d</span>
        <span className='letter-s'>s</span>
      </div>
    </div>
    <div className="cell small-1" />
    <div className="cell small-2">
      <div className='grid-x grid-padding-x align-center-middle'>
        <div className='cell small-2 text-center'>
          <div className='slider-value'>
            <span>{gridSize} x {gridSize}</span>
          </div>
          <input
          id="grid-size-picker" className="slider"
          type="range" min="5" max="50" step="1"
          value={gridSize}
          onChange={(e) => {setGridSize(parseInt(e.target.value))}}
          />
        </div>
        <div className='cell small-2'>
          <button
            type="button"
            className={`select-button` + (verticalLayout ? " selected" : "")} 
            onClick={() => {setVerticalLayout(true)}}
          >
            <Canvas
              size={3}
              verticalLayout={true}
              beadColors={{}}
              onClickBead={()=>{}}
              paint={()=>{}}
              stopPainting={()=>{}}
            />
          </button>
          <button
            type="button"
            className={`select-button` + (verticalLayout ? "" : " selected")}
            onClick={() => {setVerticalLayout(false)}}
          >
            <Canvas
              size={3}
              verticalLayout={false}
              beadColors={{}}
              onClickBead={()=>{}}
              paint={()=>{}}
              stopPainting={()=>{}}
            />
          </button>
        </div>
        <div className='cell small-1' />
        <div className='cell small-2'>
          <button
            type="button"
            className="my-button go-button"
            onClick={onClickGoButton}
          >
            Go!
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default HomeScreen