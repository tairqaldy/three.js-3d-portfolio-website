import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { essays } from '../constants'
import './Essays.css'

const Essays = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'reflection', 'mythoughts', 'projects', 'ideas']
  const filteredEssays = selectedCategory === 'all' 
    ? essays 
    : essays.filter(essay => essay.category === selectedCategory)

  return (
    <section className="essays-page">
      <div className="essays-container">
        {/* Header */}
        <div className="essays-header">
          <Link to="/" className="back-link">
            ← back to home
          </Link>
          <h1>essays</h1>
          <p>I broke every “good student” rule — procrastinated, skipped, improvised — yet kept winning. Maybe success isn’t about discipline; maybe it’s about understanding leverage.</p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Essays List */}
        <div className="essays-list">
          {filteredEssays.map(essay => (
            <Link 
              key={essay.id} 
              to={`/essays/${essay.slug}`} 
              className="essay-card"
            >
              <div className="essay-meta">
                <h2>{essay.title}</h2>
                <span className="essay-date">{essay.date}</span>
              </div>
              <p className="essay-excerpt">{essay.excerpt}</p>
              <div className="essay-category">{essay.category}</div>
            </Link>
          ))}
        </div>

        {filteredEssays.length === 0 && (
          <div className="no-essays">
            <p>no essays found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Essays
