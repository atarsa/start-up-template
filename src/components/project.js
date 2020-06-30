import React from "react"
import styled from "styled-components"
import Image from "./image"

const Project = ({ title, img }) => {
  return (
    <div>
      <p>{title}</p>
      <Image filename={img} />
    </div>
  )
}

export default Project
