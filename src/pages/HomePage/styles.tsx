export const body = {
  backgroundColor: '#1d1d1d',
  height: 'auto',
} as const

export const container = {
  marginTop: '2rem',
  '@media (min-width: 500px) and (max-width: 550px)': {
    marginTop: '5rem',
  },
} as const

export const workSectionCol2 = {
  '@media (min-width: 800px)': {
    marginTop: '150px',
  },
} as const
