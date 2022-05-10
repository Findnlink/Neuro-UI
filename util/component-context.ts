import React from 'react'

const ComponentContext = React.createContext(<any>{})

const ComponentProvider = ComponentContext.Provider

export { ComponentContext, ComponentProvider }
