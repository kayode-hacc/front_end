import searchIcon from './search.svg'
const Header = () =>{
    return (
        <div className="header-container">
            <div className="Header-name">Ecomerce</div>
            <div className="Header-nav">
                <span>Login</span>
                <span>Register</span>
                <span><input
                   placeholder="search"
                   value='search'
                   onChange=''
                /></span>
                <span><img
                    src={searchIcon}   
                    alt='search'
                    onClick = {()=>{alert ('hello')}}              
  
                /></span>
            </div>
        </div>
    )
} 

export default Header;