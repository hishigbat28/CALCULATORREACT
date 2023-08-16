import React, { useState } from 'react'

function App() {
  const [value, setValue] = useState('')

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className="bodlogo">
            <input type="text" value={value} />
          </div>
          <div>
            <input type="button" value="AC" onClick={() => setValue('')} />
            <input
              type="button"
              value="C"
              onClick={(e) => {
                setValue(value.slice(0, -1))
              }}
            />
            <input
              type="button"
              value="."
              onClick={(e) => {
                setValue(value + e.target.value)
              }}
            />
            <input
              type="button"
              value="/"
              onClick={(e) => {
                setValue(value + e.target.value)
              }}
            />
          </div>
          <div>
            <input
              type="button"
              value="7"
              onClick={(e) => {
                setValue(value + e.target.value)
              }}
            />
            <input
              type="button"
              value="8"
              onClick={(e) => {
                setValue(value + e.target.value)
              }}
            />
            <input
              type="button"
              value="9"
              onClick={(e) => {
                setValue(value + e.target.value)
              }}
            />
            <input
              type="button"
              value="+"
              onClick={(e) => {
                setValue(value + e.target.value)
              }}
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              onClick={(e) => {
                setValue(value + e.target.value)
              }}
            />
            <input
              type="button"
              value="5"
              onClick={(e) => {
                setValue(value + e.target.value)
              }}
            />
            <input
              type="button"
              value="6"
              onClick={(e) => {
                setValue(value + e.target.value)
              }}
            />
            <input
              type="button"
              value="-"
              onClick={(e) => {
                setValue(value + e.target.value)
              }}
            />
          </div>
          <div>
            <input
              type="button"
              value="1"
              onClick={(e) => {
                setValue(value + e.target.value)
              }}
            />
            <input
              type="button"
              value="2"
              onClick={(e) => {
                setValue(value + e.target.value)
              }}
            />
            <input
              type="button"
              value="3"
              onClick={(e) => {
                setValue(value + e.target.value)
              }}
            />
            <input
              type="button"
              value="*"
              onClick={(e) => {
                setValue(value + e.target.value)
              }}
            />
          </div>
          <div>
            <input
              type="button"
              value="0"
              onClick={(e) => {
                setValue(value + e.target.value)
              }}
            />
            <input
              type="button"
              value="00"
              onClick={(e) => {
                setValue(value + e.target.value)
              }}
            />
            <input
              type="button"
              value="="
              className="tentsu"
              onClick={(e) => {
                setValue(eval(value))
              }}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
