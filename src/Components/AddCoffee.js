import './addCoffee.css'
export default function AddCoffee() {
const handleSubmit = (e) => {
    e.preventDefault()
    // gather form data
    // e.target is the form
    // e.target.name is the input "name"
    // e.target.name.value is the value of the input "name"
    const name = e.target.name.value
    const recipe = e.target.recipe.value
    const description = e.target.description.value
    // create a coffee object
    const newCoffee = { name, recipe, description}
    // post the newCoffee object to the API 
    fetch('https://first-deployed-api-c12.web.app/coffees', {
        method: 'POST',
        headers:{
            'Content-Types': 'application/json',
        },
        body: JSON.stringify(newCoffee),
    })
    .then(res => res.json())
    .then(message => console.log(message))
    .catch(alert)

}

    return (
        <section className="coffee-form">
            <h2>Add a Coffee</h2>
            <form onSubmit={handleSubmit}/>
            <form>
                <label htmlFor="name">
                    name:
                    <input type="text" name="name" />
                </label>
                <label htmlFor="recipe">
                    recipe:
                    <input type="text" name="recipe" />
                </label>
                <label htmlFor="description">
                    description:
                    <input type="text" name="description" />
                </label>
                <input type="submit" value="add" className='add-btn' />
            </form>
        </section>
    )
}