import { useState } from "react"

const Counter = () => {

    const [counterValue, setCounterValue] = useState(0)


    const handleCounter = () => {
        setCounterValue(counterValue + 1)
    }

    return (
        <section className="Counter">
            <h1>Se ha presionado el botón {counterValue} veces</h1>
            <button onClick={(handleCounter)}>Hazme click yay</button>
        </section>
    )
}

export default Counter