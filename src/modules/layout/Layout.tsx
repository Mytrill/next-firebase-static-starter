export interface LayoutProps {
  children?: any
}

export function Layout(props: LayoutProps) {
  return <div className="h-screen container py-4 mx-auto flex">{props.children}</div>
}
