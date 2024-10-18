import { useState } from "react"

export const AddCategory = ( { onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        // console.log(target.value)
        setInputValue(target.value);
    }

    const onSubmit = ( event=> {
        event.preventDefault();
        if( inputValue.trim().length <=1 ) return;
        // setCategories( categories =>  [...categories, inputValue]);
        
        setInputValue('');
        onNewCategory( inputValue.trim() );
        
    })
    return ( 

        <form onSubmit={ onSubmit }>
            <input type="text" 
                    placeholder="Search Gifs"
                    value = { inputValue }
                    onChange={ onInputChange }
            />

        </form>

        
      
    )
}
