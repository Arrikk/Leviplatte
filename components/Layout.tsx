import Sidebar from './Sidebar'

interface ChildProps {
  children: JSX.Element[]
}

const Layout = ({ children }: ChildProps) => {
  return (
    <div className="mx-auto max-h-screen overflow-hidden font-roboto lg:max-w-7xl">
      <main className="grid grid-cols-10">
        <Sidebar />

        {/* OTHER COMPOENETS */}
        {children}
        {/* OTHER COMPOENETS */}
      </main>
    </div>
  )
}

export default Layout
