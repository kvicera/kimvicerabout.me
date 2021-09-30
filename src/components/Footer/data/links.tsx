import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import CodeIcon from '@mui/icons-material/Code'

import * as styles from '../styles'

const links = [
  {
    url: 'mailto:vfvicera220@gmail.com',
    label: 'Email',
    icon: <EmailIcon sx={styles.linkIcon} />
  },
  {
    url: 'https://linkedin.com/in/kvicera',
    label: 'LinkedIn',
    icon: <LinkedInIcon sx={styles.linkIcon} />
  },
  {
    url: 'https://github.com/kvicera',
    label: 'Github',
    icon: <GitHubIcon sx={styles.linkIcon} />
  },
  {
    url: 'https://stackoverflow.com/users/16756770/kvicera',
    label: 'StackOverflow',
    icon: <CodeIcon sx={styles.linkIcon} />
  }
]

export default links