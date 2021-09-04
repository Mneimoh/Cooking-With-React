/*import React, {useState} from 'react'
import Counter from 'components/Counter'
import CounterHooks from 'components/CounterHooks';

export const ThemeContext = React.createContext()
function App() {
  console.log('Render App')
  const [theme, setTheme] = useState('green')
  return (
    <>
    <ThemeContext.Provider value={{ backgroundColor : theme }}>
    Counter
    <Counter initialCount={0}/>
    CounterHooks
    <CounterHooks initialCount={0}/>
    <button onClick={ () => setTheme(prevTheme => {
      return prevTheme === 'red' ? 'blue' : 'red'
    })}>Toggle Theme</button>
    </ThemeContext.Provider>
    </>
    )
}*/

import React , { useState,  useEffect } from 'react'
import RecipeList from './RecipeList'
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid'
import RecipeEdit from './RecipeEdit'

export const RecipeContext = React.createContext()
const LOCAL_STRORAGE_KEY = 'cookingWithReact.recipes'

function App(){
  const [recipes, setRecipes] = useState(sampleRecipes)

  const [selectRecipeId, setSelectRecipeId] = useState()

  const selectedRecipe = recipes.find(recipe => recipe.id === selectRecipeId)

  useEffect( () =>{
    const recipeJSON = localStorage.getItem(LOCAL_STRORAGE_KEY)
    if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [] )

  useEffect( () => {
    localStorage.setItem(LOCAL_STRORAGE_KEY, JSON.stringify(recipes))
    //return () => console.log("recipes set")
  }, [recipes])

  const handleRecipeValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect
  }

  function handleRecipeSelect(id) {
      setSelectRecipeId(id)
  }
  
  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        {id: uuidv4(), name: 'Name', amount: '1 Tbs'}
      ]
    }
  
    setRecipes([...recipes, newRecipe])
  
  }

  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <>
      <RecipeContext.Provider value={handleRecipeValue}>
        <RecipeList recipes={recipes} />
        { selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
      </RecipeContext.Provider>
    </>
  )
  
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on Chicken\n2. Put chicken on oven\n3. Eat Chicken",
    ingredients: [
      {
      id: 1,
      name: 'Chicken',
      amount: '2 Pounds'
    }, 
    {
      id: 2,
      name: 'Salt',
      amount: '1 Tbs'
    }
  ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 3,
    cookTime: '0:45',
    instructions: "1. Put paprika on Pork\n2. Put pork on oven\n3. Eat Pork",
    ingredients: [
      {
      id: 1,
      name: 'Pork',
      amount: '3 Pounds',
    },
    {
      id: 2,
      name: 'Paprika',
      amount: '2 Tbs'
    }
  ]
  }
]

export default App;
