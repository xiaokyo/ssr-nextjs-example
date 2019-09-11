import React from 'react'

export default props => {
  return (
    <>
      <div className="header">header</div>

      <style jsx>{`
        .header{
          width:100%;
          height:80px;
          box-shadow:0 0 4px #ccc;
          background-color:#fff;
        }
      `}</style>
    </>
  )
}