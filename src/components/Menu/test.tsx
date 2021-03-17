import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/Open Menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Won games/i)).toBeInTheDocument()
  })
})
