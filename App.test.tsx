// src/App.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './src/App'

describe('App component', () => {
  it('renders the word "Wordle"', () => {
    render(<App />)
    const wordleElement = screen.getByText(/wordle/i) // case-insensitive match
    expect(wordleElement)
  })
})

