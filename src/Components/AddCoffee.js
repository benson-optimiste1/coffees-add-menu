import './addCoffee.css'
export default function AddCoffee() { 

    const getCoffees = () => {
        fetch('https://first-deployed-api-c12.web.app/coffees')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(alert)
    }


const handleSubmit = (e) => {
    e.preventDefault()
    // gather form data
    // e.target is the form
    // e.target.name is the input "name"
    // e.target.name.value is the value of the input "name"
    const name = e.target.name.value
    const reciepe = e.target.reciepe.value
    const description = e.target.description.value
    // create a coffee object
    const newCoffee = { name, reciepe, description}
    // post the newCoffee object to the API 
    fetch('https://first-deployed-api-c12.web.app/coffees', {
        method: 'POST',
        headers:{
            'Content-Types': 'application/json',
        },
        body: JSON.stringify(newCoffee),
    })
    .then(res => res.json())
    .then(data => {
        // check if the message is "Success"
        if(data.message === "Succes!"){
            // our coffee was added  successfully
            // let's clear the form
            e.target.name.value = ''
            e.target.reciepe.value = ''
            e.target.description.value = ''
            // and then get updated list of coffees
            getCoffees()
        }
    })
    .catch(alert)

}

    return (
        <section className="coffee-form">
            <h2>Add A Coffee</h2>
            <form onSubmit={handleSubmit}/>
            
                <label htmlFor="name">
                    Name:
                    <input type="text" name="name" />
                </label>
                <label htmlFor="reciepe">
                    Reciepe:
                    <input type="text" name="reciepe" />
                </label>
                <label htmlFor="description">
                    Description:
                    <input type="text" name="description" />
                </label>
                <input type="submit" value="add" className='add-btn' />
            <form/>
        </section>
    )
}