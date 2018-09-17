import React from 'react'

import Category from '../category/Category'

import './CategoryList.css'

const CategoryList = ({ categories }) => {
  return (
    <div className="categories">
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => <Category category={category} key={category.path} />)}
      </ul>
    </div>
  )
}

export default CategoryList