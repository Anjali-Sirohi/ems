
import Login from "../Auth/Login"


const Header = (props) => {
// console.log(props);


    const logOutUser = () => {
        localStorage.setItem("loggedInUser", '');
        props.changeuser('')
    }

    return (

        <div className="flex items-end justify-between">
            <h1 className='text-2xl'>
                Hello<br /><span className='text-3xl font-bold'>
                    {props.data?.firstName ?? "Anjali"} 👋
                </span>
            </h1>
            <button onClick={logOutUser}
                className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-full'>
                Log out
            </button>
        </div>

    )
}

export default Header
