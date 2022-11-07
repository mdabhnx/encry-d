import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import CopyIcon from './assets/copy.png'

const App = () => {
  const [content, setContent] = useState('')
  const [masterKey, setMasterKey] = useState('')
  const [btnDisabledStatus, setBtnDisabledStatus] = useState(false)
  const [contentOutput, setContentOutput] = useState('')

  const contentEncryptionHandler = () => {
    setContentOutput('')
    setBtnDisabledStatus(true)

    fetch(`${process.env.REACT_APP_BASE_API_URL}/v1/encryd/encr`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: masterKey,
      },
      body: JSON.stringify({
        content: content,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setMasterKey('')
        setBtnDisabledStatus(false)
        if (res.status === 200) {
          setContentOutput(res.data.content)
          toast.success('Encrypt Complete!')
        }
      })
      .catch((err) => {
        setMasterKey('')
        setBtnDisabledStatus(false)
        console.log(err)
      })
  }

  const contentDecryptionHandler = () => {
    setContentOutput('')
    setBtnDisabledStatus(true)

    fetch(`${process.env.REACT_APP_BASE_API_URL}/v1/encryd/decr`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: masterKey,
      },
      body: JSON.stringify({
        content: content,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setMasterKey('')
        setBtnDisabledStatus(false)
        if (res.status === 200) {
          setContentOutput(res.data.content)
          toast.success('Decrypt Complete!')
        }
      })
      .catch((err) => {
        setMasterKey('')
        setBtnDisabledStatus(false)
        console.log(err)
      })
  }

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
      <ToastContainer
        position='top-center'
        autoClose={1000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={false}
        draggable={false}
        progress={undefined}
      />
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
          type='password'
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
            onClick={() => contentEncryptionHandler()}
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
            onClick={() => contentDecryptionHandler()}
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
            <p style={{ overflow: 'hidden' }}>{contentOutput}</p>
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
