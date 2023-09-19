function CounselText() {

  return(
    <div style={{
      padding: '0 10%'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
      <h4 style={{
        fontSize: '20px',
        color: '#ae7762',
        fontWeight: '500'
      }}>피부과 진료</h4>
      <p style={{
        textAlign: 'left',
        fontSize: '40px',
        padding: '10% 0',
        fontWeight: '200'
      }}>피부과 전문의와 <br/>
      체계적인 상담을 통해<br/>
      만족스러운 피부변화를 느껴보세요.
      </p>
      </div>
      <div style={{ 
        border: '1px solid brown', 
        borderRadius: '40px',
        width: '200px',
        height: '60px',
        textAlign: 'center',
        lineHeight: '58px'
        }}>
          <span style={{
            color: '#ae7762',
            fontWeight:'500'
          }}>자세히보기</span>

      </div>
    </div>
  )
}
export default CounselText;