import { fireEvent, screen } from '@testing-library/react'
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

  it('should handle the open/close menu on mobile', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    /*
     * IT OPENS THE FULL MENU ON CLICK
     */
    fireEvent.click(screen.getByLabelText(/Open Menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    /*
     * IT CLOSES THE FULL MENU ON CLICK
     */
    fireEvent.click(screen.getByLabelText(/Close Menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })
})
