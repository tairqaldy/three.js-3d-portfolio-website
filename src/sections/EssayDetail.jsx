import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { essays } from '../constants'
import './Essays.css'

const EssayDetail = () => {
  const { slug } = useParams()
  const essay = essays.find(e => e.slug === slug)

  if (!essay) {
    return (
      <section className="essays-page">
        <div className="essays-container">
          <div className="essay-not-found">
            <h1>essay not found</h1>
            <p>the essay you're looking for doesn't exist.</p>
            <Link to="/essays" className="back-link">
              ← back to essays
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="essays-page">
      <div className="essays-container">
        {/* Navigation */}
        <div className="essay-nav">
          <Link to="/essays" className="back-link">
            ← back to essays
          </Link>
        </div>

        {/* Essay Header */}
        <div className="essay-header">
          <h1>{essay.title}</h1>
          <span className="essay-date">{essay.date}</span>
        </div>

        {/* Essay Content */}
        <div className="essay-content">
          {essay.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EssayDetail
