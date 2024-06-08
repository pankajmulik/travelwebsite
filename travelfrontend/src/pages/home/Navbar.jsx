import React, { useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import menus from './navitem'
import { userLoginContext } from '../../context/userLogoncontext'

const Navbar = () => {

  const {userstatus,setuserstatus}=useContext(userLoginContext)
const handleLogout=()=>{
  setuserstatus('Login')
}
  return (
    <div className=" bg-teal-700 text-teal-50 w-full fixed flex h-14  m-0 p-0" style={{width:'100%', margin:'0', padding:'0'}}> 

      <div className="hnavlogo flex m-2">

        <div>
          
        </div>

        <h3 className='m-auto text-2xl font-semibold'>Express Travel</h3>

      </div>

      <div className="navmenuitem hidden md:flex m-auto">


   
          {
            menus.map((navmenu) => {
              
             return <div className='m-2'>
                  <Link to={navmenu.path}>
                  {navmenu.nname}
                  </Link>
            </div>
              

            })
          }
{
  userstatus==='Login'? <div>
  <Link to='/login'>
{
userstatus
}
  </Link>
</div>:null
}
{
  userstatus==='Logout'? <div>
  <Link to='/' onClick={handleLogout}>
{
userstatus
}
  </Link>
</div>:null
}
         
      

      </div>

  </div>
  )
}

export default Navbar