import React, { useState } from 'react'

const App = () => {
  const [content, setContent] = useState(undefined)
  const [masterKey, setMasterKey] = useState(undefined)

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
          >
            Decrypt
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
