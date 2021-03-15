import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render a medium sized button by default', () => {
    renderWithTheme(<Button>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })

  it('should render a small button if small is passed as size property', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })
})
