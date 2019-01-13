import { wrapper, icon } from '../lib/style'
import { spotify as config } from '../lib/config'

export const refreshFrequency = config.refreshRate || 15000
export const command = './bar/scripts/spotify.sh'

const maxStatusLength = config.maxStatusLength || 50

const style = {
  wrapper: {
    ...wrapper,
    textAlign: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    ...config.style.wrapper,
  },
  icon: {
    ...icon,
    ...config.style.icon,
  },
}

export const render = ({ output }) => {
  if (!output.trim()) return ''

  const status = output.length > maxStatusLength
    ? `${output.substring(0, maxStatusLength)}...`
    : output

  return (
    <span style={style.wrapper}>
      <i className="fab fa-spotify" style={style.icon} />
      { status }
    </span>
  )
}
