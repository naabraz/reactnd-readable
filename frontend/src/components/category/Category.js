import React from 'react'

import './Category.css'

const Category = ({ categories }) => {
  return (
    <div className="category">
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.name}>
              <a href={category.path}>{category.name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Category