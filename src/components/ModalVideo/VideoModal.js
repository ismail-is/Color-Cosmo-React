import React, { useState, useEffect } from 'react'
import v1 from '../../img/Allimg/videos/1.mp4'
import v2 from '../../img/Allimg/videos/2.mp4'
import v3 from '../../img/Allimg/videos/3.mp4'
import v4 from '../../img/Allimg/videos/4.mp4'
import v5 from '../../img/Allimg/videos/7.mp4'
import v6 from '../../img/Allimg/videos/6.mp4'

const videoList = [
  { id: v2 },
  { id: v4},
  { id: v3 },
  
  // { id: v5 },
  // { id: v6 }
]

const getGridStyle = (columns) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${columns}, 1fr)`,
  gridAutoRows: 'minmax(150px, auto)',
  gap: '1rem',
  padding: '1rem'
})

const boxStyle = {
  position: 'relative',
  backgroundColor: '#e5e7eb',
  cursor: 'pointer',
  borderRadius: '10px',
  overflow: 'hidden'
}

const labelStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '10px',
  backgroundColor: 'rgba(0,0,0,0.6)',
  color: '#fff',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '18px'
}

const modalOverlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '1rem',
  boxSizing: 'border-box'
}

const videoStyle = {
  width: '100%',
  maxWidth: '800px',
  maxHeight: '80vh',
  borderRadius: '12px',
  
  outline: 'none'
}

const closeBtnStyle = {
  position: 'absolute',
  top: '20px',
  right: '30px',
  fontSize: '30px',
  color: '#fff',
  cursor: 'pointer',
  fontWeight: 'bold',
  zIndex: 1001
}

const VideoGrid = () => {
  const [videoUrl, setVideoUrl] = useState('')
  const [isModalOpen, setModalOpen] = useState(false)
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    const updateGridColumns = () => {
      const width = window.innerWidth
      if (width < 640) setColumns(1)
      else if (width < 1024) setColumns(2)
      else setColumns(3)
    }

    updateGridColumns()
    window.addEventListener('resize', updateGridColumns)
    return () => window.removeEventListener('resize', updateGridColumns)
  }, [])

  const handleOpen = (url) => {
    setVideoUrl(url)
    setModalOpen(true)
  }

  const handleClose = () => {
    setModalOpen(false)
    setVideoUrl('')
  }

  return (
    <>
      {isModalOpen && (
        <div style={modalOverlay} onClick={handleClose}>
          <span style={closeBtnStyle} onClick={handleClose}>×</span>
          <video
            style={videoStyle}
            src={videoUrl}
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div style={getGridStyle(columns)}>
        {videoList.map((video, index) => (
          <div
            key={index}
            style={boxStyle}
            onClick={() => handleOpen(video.id)}
          >
            <video
              src={video.id}
              muted
              autoPlay
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={labelStyle}>{video.label}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default VideoGrid
