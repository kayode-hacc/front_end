import React, { useState, useEffect } from 'react'
import { Fab } from '@material-ui/core'
import { ArrowForwardIos } from '@material-ui/icons'
import './messages.css'




const MessageArea = () =>{
    
    const [user_message, set_user_Message] = useState('')
    const [msg, setMsg] = useState('') 
    const bot = ''
    const msge = ''
    
    useEffect(()=>{
    const bot = document.querySelector('.bot__msg')
    const msge =''
    bot.innerHTML = '<h3>typing ..</h3>'
    setTimeout(()=>{
       bot.innerHTML = '<h3>Hello my name is dath and you are</h3>'
        
    },3000)
}, [bot, msge])

    const setTyping = ()=>{
        setMsg('typing...')
        const userMsg = document.querySelector('.user') 
        
        userMsg.innerHTML = `<diV class='user__msg'><h3>${msg}<h3></div>`
         
        if(user_message === '') {
            userMsg.innerHTML = ''
        }
    }

   const handleEvent=(e)=>{
    e.preventDefault()
    const msge = document.querySelector('.user')
    msge.innerHTML = `<diV class='user__msg'><h3>${user_message}<h3></div>`
    set_user_Message('')  
    
   }
   
    return(
     <>  
         <div className={`bot__msg`}>
                
         </div>
         <div className='user'>

         </div>
        <div className='Input__area'>
            <div className='input'>
            <input type='text' placeholder='message' className="input__text" value={user_message} onChange={(e)=>(set_user_Message(e.target.value))} onKeyUp={(e) => setTyping()}/>
            </div>
             {
               user_message === '' ? (
                null
              ):
              (
              <div style={{transition:'8s'}} className='btn-div'>
               <Fab onClick={(e)=> handleEvent(e)} style={{height:'40px', width:'40px', borderRadius:'800px', margin:'4px'}} > <ArrowForwardIos /></Fab>    
              </div>
              ) 
             }
        </div>  
   </>
           
       
   )
}
export default MessageArea