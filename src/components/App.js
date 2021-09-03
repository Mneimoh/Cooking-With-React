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

import React from 'react'
import RecipeList from './RecipeList'
import '../css/app.css'
function App(){
  return (
    <RecipeList recipes={sampleRecipes}/>
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
