import { useState } from "react"
import { auth, provider } from "./components/Audifikatsiya"
import { signInWithPopup } from "firebase/auth"
import Hom from "./components/Home/Hom"
const App = () => {
  const [value,setValue]=useState('')
  const LoginWidthGoogle =()=>{
    signInWithPopup(auth,provider).then((data)=>{
setValue(data.user.email)
    })
  }
    return (
    <div>
      {!value ? <button onClick={LoginWidthGoogle}>Google dan ruyhatdan utish</button> :<Hom />}
      
      
    </div>
  )
}
export default App