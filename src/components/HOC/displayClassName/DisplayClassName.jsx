// TODO: DELETE
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const DisplayClassName = ({ children }) => {
  const ref = useRef(null)

  useEffect(() => {
    let dcn = ref.current
    if (!dcn) return
    const onEnter = (event) => {
      console.log(event.target)
      const rect = event.target.getBoundingClientRect()
      const debug = document.getElementById('debug')
      debug.style.left = rect.left + 'px'
      debug.style.top = rect.top + rect.height + 5 + 'px'
      let classes = []
      for (const child of event.target.children) {
        classes.push(child.classList.toString())
      }
      debug.textContent = classes.join(' ')
    }
    dcn.addEventListener('mouseenter', onEnter)
    return () => {
      if (!dcn) return
      dcn.removeEventListener('mouseenter', onEnter)
    }
  }, [ref])
  return <div ref={ref}>{children}</div>
}

DisplayClassName.propTypes = {
  children: PropTypes.object,
}

export default DisplayClassName
