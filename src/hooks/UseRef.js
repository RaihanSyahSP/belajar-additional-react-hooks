import React, { useEffect, useRef, useState } from 'react'
//ref very similiar to state and that persist between renders of your component
//the difference between state and refs is that a ref does not cause your component to re update when it gets changed
//another useRef useage is to reference element inside of your HTML



const UseRef = () => {
    const [name, setName] = useState('')
    const renderCount = useRef(0)
    //{current : 0} return an object

    const inputRef = useRef()

    function focus() {
       inputRef.current.focus()
    }
    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    return (
        <>
            <input ref={ inputRef}value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current}</div>
            <button onClick={focus}>Focus</button>
        </>
    )
}

export default UseRef