export const header = {
  backgroundColor: '#171717',
  height: '210px',
} as const

export const spacer = {
  height: '150px',
  backgroundImage: '-webkit-linear-gradient(267deg, #171717 50%, #1d1d1d 50%);',
} as const

export const innerContainer = {
  padding: '100',
  paddingTop: '92px',
  color: '#ffffff',
  height: '250px',
} as const

export const siteNameText = {
  fontFamily: 'Rubik',
} as const

export const siteTagLineText = {
  fontFamily: 'Rubik',
  color: '#8b8b8b',
} as const

export const headerImgStyle = {
  width: '40vw',
  height: '40vw',
  maxWidth: '300px',
  maxHeight: '300px',
  boxShadow: '12',
} as const

export const avatarWrapper = {
  '@media (min-width: 600px)': {
    marginTop: '-5rem',
  },
  display: 'flex',
  justifyContent: 'flex-end',
} as const
