import classNames from "classnames"
import "./Logo.scss"

export default (props) => {
  const { className, children } = props

  const title = "Home"

  return (
    <a 
      href="/" 
      className={classNames(className, 'logo')}
      title={title}
    >
      {children}
    </a>
  )
}
