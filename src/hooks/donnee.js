import { useEffect, useState } from "react"

const Donnee = () => {


  const [data, setData] = useState(null)
  useEffect(() =>
    fetch("/data/data.json").then((res) => res.json()).then((res) => setData(res))
    , []

  )
  return data
}
export default Donnee
