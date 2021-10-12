export const tileWrapper = {
  backgroundColor: 'transparent',
  maxWidth: 345,
  marginBottom: '50px',
} as const

export const tileThumbnail = {
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  padding: 0,
  fontFamily: 'Rubik',
  height: 500,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
} as const

export const gradient = {
  padding: 2,
  background: 'linear-gradient(to bottom, rgba(23,23,23,0), rgba(0,0,0,0.8))',
} as const

export const tileTitle = {
  fontFamily: 'inherit',
  fontWeight: '800',
  color: '#ffffff',
} as const

export const tileDescription = {
  fontFamily: 'inherit',
  color: '#949494',
} as const
