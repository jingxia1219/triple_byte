import React from 'react';

export class Todo2 extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        let answer = window.prompt("What do you want to add in the new card?");
        if (answer !== null) {
        var li = document.createElement("li");
        var newLi = li.appendChild(document.createTextNode(answer));
        var ul = document.getElementById("ul2");
        ul.appendChild(newLi);
        }
    }
render() {
    return (
           
        
     <div className='col-1'>
     <div>
        <span> <h6 className='user-name-2'> Bob</h6> </span>
        <ul id='ul2'>
            <li>
                Buy eggs
            </li>
            <li>
                Buy milk
            </li>
        </ul>
     </div>
     <br></br>
     <button onClick={this.handleSubmit.bind(this)}>
     Add a Card
   </button>
   </div>
    )
}
    }
    


