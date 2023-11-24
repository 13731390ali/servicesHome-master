import React , {Component} from 'react'

const Hoc = (HocComponent) => {
    return class extends Component{
        render(){
            return (
                <div>
                  <HocComponent>
                  
                  </HocComponent>
                  <input type='text'/>
                    ali
                </div>
              )
        }
      
    }
 
}

export default Hoc
