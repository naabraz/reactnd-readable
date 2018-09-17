import React from 'react'

const Category = ({ category }) => {
  const { name, path } = category

  return (
    <li>
      <a href={path}>{name}</a>
    </li>
  )
}

export default Category