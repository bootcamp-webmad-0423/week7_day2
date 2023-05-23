import { drinks } from './../../fakeAPI'

const DrinksList = () => {

    return (
        <section>
            <h1>Listado de bebidas</h1>
            {
                drinks.map(elm => {
                    return <p key={elm}>{elm}</p>
                })
            }
        </section>
    )
}

export default DrinksList