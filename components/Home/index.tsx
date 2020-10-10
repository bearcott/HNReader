import { useEffect } from "react"

export const HomeView = () => {
  useEffect(()=>{
    (async () => {
        const hello =await fetch('/api/home')
      console.log(hello.json());
    })();
  }, []);
  return <div>
    asdfa 
  </div>
}