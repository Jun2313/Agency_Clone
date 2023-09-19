function MediaHeader(){

  return(
    <div style={{

    }}>
      <div style={{
        textAlign: 'left'
      }}>
        <h2 style={{
          fontSize: '20px',
          color: '#ae7762',
          fontWeight: '500'
        }}>언론보도</h2>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <p style={{
          padding: '3% 0',
          fontSize: '40px',
          fontWeight: '200'
        }}>시크릿성형외과의 다양한 소식들</p>
        <div style={{
          border: '1px solid brown',
          width: '200px',
          height: '50px',
          textAlign: 'center',
          borderRadius: '40px',
          lineHeight: '48px'
        }}>
          자세히보기
        </div>
      </div>
      
    </div>
  )
}

export default MediaHeader;