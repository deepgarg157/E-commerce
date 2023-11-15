const Header = () => {
    return (
        <div>
            <div className="flex justify-around p-2 bg-orange-100">
                <div>
                    <img className="w-40 rounded-md cursor-pointer" src="https://plus.unsplash.com/premium_photo-1683758342885-7acf321f5d53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                </div>
                <div>
                    <input className="mt-9 w-[450px] border border-gray-200 px-5 py-1 rounded-md bg-gray-100 text-gray-800" type="text" placeholder="Search for Products, Brands, and More....."></input>
                    <button className="bg-gray-300 px-3 py-1 rounded-lg mx-2">Search</button>
                </div>
                <div>
                    <img className="w-10 mt-8 rounded-md cursor-pointer" src="https://i.pinimg.com/564x/2b/35/a4/2b35a4763a31b6f5f40d9de9d7e05f88.jpg"></img>
                </div>
            </div>
        </div>
    )
}

export default Header;