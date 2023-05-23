import { projects } from "../../fakeAPI"

const ProjectsList = () => {

    return (
        <section>
            <h1>Listado de proyectos</h1>

            {
                projects.map(elm => {
                    return (
                        <article key={elm._id}>
                            <h3>{elm.name}</h3>
                            <p>Tech Stack: {elm.techStack}</p>
                        </article>
                    )
                })
            }
        </section>
    )
}

export default ProjectsList