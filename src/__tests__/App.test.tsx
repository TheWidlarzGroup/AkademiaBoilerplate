import React from 'react'

import { render } from '@testing-library/react-native'
import { Placeholder } from 'Components/Placeholder'

describe('placeholder', () => {
  it('should render correctly', function () {
    const renderAPI = render(<Placeholder />)
    renderAPI.getByText('TWG')
  })
})
