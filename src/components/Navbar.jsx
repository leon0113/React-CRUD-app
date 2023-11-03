
function Navbar() {
    return (
        <div className="w-full h-16 bg-blue-600 flex items-center px-10 py-3 justify-between">
            <h1 className="text-3xl font-semibold font-serif text-white">CRUD</h1>
            <button className="w-32 bg-white text-blue-600 font-semibold text-xl rounded-lg h-12">Add User</button>
        </div>
    )
}

export default Navbar