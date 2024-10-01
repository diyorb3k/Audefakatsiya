import { useState } from "react"
import { auth, provider } from "./components/Audifikatsiya"
import { signInWithPopup } from "firebase/auth"
const App = () => {
  const [value,setValue]=useState('')
  const LoginWidthGoogle =()=>{
    signInWithPopup(auth,provider).then((data)=>{
setValue(data.user.email)
    })
  }
    return (
    <div>
      <button onClick={LoginWidthGoogle}>Google dan ruyhatdan utish</button>
      <h2>Siz Mufaqiyatli ruyhatdan utdingiz Tabriklaymiz{value}</h2>
    </div>
  )
}
export default App