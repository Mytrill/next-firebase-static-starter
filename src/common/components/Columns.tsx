import cc from "classnames"

export interface ColumnsProps {
  className?: string
  children?: any
}

export function Columns(props: ColumnsProps) {
  const className = cc("flex", props.className)
  return <div className={className}>{props.children}</div>
}
