import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="w-full h-16 bg-blue-600 flex items-center px-10 py-3 justify-between">
            <h1 className="text-3xl font-semibold font-serif text-white">React CRUD</h1>
            <Link to={"add-user"} className="w-32 bg-white flex justify-center items-center text-blue-600 font-semibold text-xl rounded-lg h-12">Add User</Link>
        </div>
    )
}

export default Navbar