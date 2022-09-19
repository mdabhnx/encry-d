import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import CopyIcon from './assets/copy.png'

const App = () => {
  const [content, setContent] = useState(undefined)
  const [masterKey, setMasterKey] = useState(undefined)
  const [btnDisabledStatus, setBtnDisabledStatus] = useState(false)
  const [contentOutput, setContentOutput] = useState(undefined)

  return (
    <div
      className='main_container'
      style={{
        display: 'flex',
        padding: '10px',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
      }}
    >
      <header>Encrypt & Decrypt Your Content</header>
      <span hidden>Welcome Master Hossain</span>

      <div
        className='input__container'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '40vh',
          width: '100vw',
        }}
      >
        <input
          type='text'
          style={{
            height: '52px',
            width: '40%',
            padding: '8px',
            fontSize: '18px',
            borderRadius: '6px',
          }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Enter Your Content Here...'
        />

        <input
          type='text'
          style={{
            height: '52px',
            width: '30%',
            padding: '8px',
            fontSize: '18px',
            borderRadius: '6px',
            marginTop: '10px',
          }}
          value={masterKey}
          onChange={(e) => setMasterKey(e.target.value)}
          placeholder='Your Master Key...'
        />

        <div
          className='action__container'
          style={{ marginTop: '10px', fontSize: '14px' }}
        >
          <button
            style={{
              fontSize: '14px',
              padding: '10px',
              minWidth: '92px',
              borderRadius: '4px',
              backgroundColor: 'green',
              color: 'wheat',
            }}
            disabled={btnDisabledStatus}
          >
            Encrypt
          </button>

          <button
            style={{
              marginLeft: '10px',
              fontSize: '14px',
              padding: '10px',
              minWidth: '92px',
              borderRadius: '4px',
              backgroundColor: 'yellow',
              color: 'black',
            }}
            disabled={btnDisabledStatus}
          >
            Decrypt
          </button>
        </div>
      </div>

      {contentOutput && (
        <CopyToClipboard text={contentOutput}>
          <div
            className='output__container'
            style={{
              marginTop: '20px',
              padding: '10px',
              borderRadius: '4px',
              width: '50%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <p>{contentOutput}</p>
            <p>
              <img
                className='copy__icon'
                src={CopyIcon}
                alt='copy-icon'
                style={{ height: '20px', width: '20px' }}
                title='Click to copy!!!'
              />
            </p>
          </div>
        </CopyToClipboard>
      )}
    </div>
  )
}

export default App
