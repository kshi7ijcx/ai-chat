import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

const page = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <Main/>
    </div>
  )
}
export default page