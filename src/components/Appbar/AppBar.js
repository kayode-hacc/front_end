import './appbar.css'
import { Avatar, MenuList } from '@material-ui/core'
import { Add, Description, Edit, Info, Menu, NavigateBeforeTwoTone, NavigateNextTwoTone, NoteAdd } from '@material-ui/icons'

const AppBar = ()=>{
    return(
        <div className="App__bar_container">
          <div className="App__bar_profile__info">
              <div className="App__bar_avatar">
                <Avatar src='' alt=''/>
              </div>
              <div className="App__bar_profile__name">
                <h3>Dathway</h3>
              </div> 
          </div>  
          <div className="App_bar__info_icon">
             <Menu style={{padding:'30px'}} />
          </div>          
           

        </div>
    )
}

export default AppBar