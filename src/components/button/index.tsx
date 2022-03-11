import type { Component } from "solid-js"

const Button = (name: string) => {
  return (
    <button type="button">${name}</button>
  )
}

export default Button;