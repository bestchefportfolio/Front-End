import React, {useState} from 'react';
// import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Context} from '../context/RecipeContext';


const CreateRecipe = props => {
    const state = useContext(Context);
    const [addRecipe, setAddRecipe] = useState({
        // recipe_id: 4,
        title: '',
        servings: 0,
        instructions: '',
        images: ''
    });

    const handleChange = e => {
        e.preventDefault();
        setAddRecipe({
            ...addRecipe,
            [e.target.name]: e.target.value
        });
    };
    const onSubmit = e => {
        e.preventDefault();
        if(document.getElementById('title').value != '') {
            state.dispatch({
                type: 'ADD',
                payload: [addRecipe]
            });
            setAddRecipe({
                title: '',
                servings: 0,
                instructions: '',
                images: ''
            })
        }
    };

    return (
        <form autoComplete='off' className='create-recipe' id='form' onSubmit={onSubmit}>
            <h1>Create New Recipe</h1>
                <input
                    type='text'
                    // recipe_id='title'
                    name='title'
                    value={addRecipe.title}
                    placeholder='Title'
                    onChange={handleChange}
                    required
                    />
                <input
                    type='text'
                    name='servings'
                    value={addRecipe.servings}
                    placeholder='Servings'
                    onChange={handleChange}
                    required
                    />
                <input
                    type='text'
                    name='instructions'
                    value={addRecipe.instructions}
                    placeholder='Instructions'
                    onChange={handleChange}
                    required
                    />
                <input
                    type='image'
                    name='image'
                    value={addRecipe.image}
                    placeholder='Image'
                    onChange={handleChange}
                    />
                <button type='submit' onClick={onSubmit}>Submit</button>
        </form>
    )
};
export default CreateRecipe;