import React from 'react';

export class Todo1 extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        let answer = window.prompt("What do you want to add in the new card?");
        if (answer !== null) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(answer));
        var ul = document.getElementById("ul1");
        ul.appendChild(li);
        }
    }
render() {
    return (
           
        
     <div className='col-1'>
     <div>
        <span> <h6 className='user-name-1'> Winnie</h6> </span>
        <ul id='ul1'>
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
    


