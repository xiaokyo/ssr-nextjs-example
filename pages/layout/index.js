import React from 'react'

//components
import Header from './header'
import BanSearch from './search'
import Footer from './footer'

//style
import './style.less'

export default function Index(props) {
  return (
    <>
      <Header />
      <BanSearch />
      <div className="container">
        {props.children}
      </div>

      <Footer />
      <style jsx>{`
        .container{
          width:100%;
          min-height:450px;
          background-color:#fff;
        }
      `}</style>
    </>
  )
}

Index.getInitialProps = async ({ query, req }) => {
  return { initid: '11' }
}