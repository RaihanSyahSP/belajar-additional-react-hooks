import React, { useMemo, useState } from 'react'

const UseMemo  = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(() => {
      return slowFunction(number)  
    }, [number]) //jika number berubah maka slowFunction akan di eksekusi, jika tidak berubah maka tidak akan dieksekusi  
    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color : dark ? 'white' : 'black'
    }
    
    return (
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>
            <div style={themeStyles}>{ doubleNumber }</div>
        </>
    )

    //selalu ke render jika tanpa useMemo yang mengakibatkan website jadi lemot
    // memoization is the ide of caching a value so you don't have to recompute it every single time
//     2 common use cases of useMemo:
// 1. When you want to make a slow function wrap inside useMemo so that doesn't re-compute every single time you render your component and it only computed when you acually need the value from that function since the inputs actually change
// 2. Whenever you want to make sure the reference of an object or an array is exactly the same as it was the last time you rendered if none of the internal workings changed, you're gonna want to useMemo here to make sure that you only update the reference of that object whenever the actual contents of the object change instead of updating every single time you render
    function slowFunction(num) {
        console.log('calling slow function')
        for (let i = 0; i <= 10000000; i++) {}
        return num * 2
    }


   
}

export default UseMemo