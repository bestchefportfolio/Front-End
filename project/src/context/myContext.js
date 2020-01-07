import React from 'react'

export const MyContext = React.createContext();

export class MyProvider extends React.Component {
    state = {
        name: "",
        
    }
    render() {
        return <MyContext.Provider value={{
            ...this.state
        }}>
            {this.props.children}
        </MyContext.Provider>
    }
}