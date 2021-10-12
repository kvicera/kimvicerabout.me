export const sectionTitle = {
  marginLeft: 'auto',
  marginRight: 'auto',
  transform: 'rotate(-180deg)',
  writingMode: 'vertical-rl',
  fontFamily: 'Major Mono Display',
  color: '#565656',
  fontWeight: '700',
  '@media (max-width: 700px)': {
    fontSize: '32px',
  },
  '@media (min-width: 710px) and (max-width: 800px)': {
    fontSize: '62px',
  },
} as const

export const sectionWrapper = {
  paddingTop: '25px',
  '@media (max-width: 800px)': {
    marginTop: '7vh',
  },
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
} as const
