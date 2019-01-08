import styled from 'styled-components'

const Text = styled.Text`
  font-size: ${({ theme, size = 'large' }) => {
    console.log('Text', size)
    return theme.FONT_SIZE_EXTRA_LARGE
  }};
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
`

export default Text
