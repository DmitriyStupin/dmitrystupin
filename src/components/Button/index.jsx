import classNames from "classnames"
import "./Button.scss"

export default (props) => {
  const { href, target, type = "button", className, label, extraAttrs } = props

  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const mode = ""
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps

  return (
    <Component
      className={classNames(className, "button", { [`button--${mode}`]: mode })}
      title={label}
      {...specificProps}
      {...extraAttrs}
    >
      <span className="button__label">{label}</span>
    </Component>
  )
}
