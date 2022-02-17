import React from 'react';
import '../pages/styles/Badges.css';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component{
    state = {
        data:[
            {
                id:1,
                FirstName:"Elvis",
                LastName:"Gil",
            },
            {
                id:2,
                FirstName:"Edgar",
                LastName:"Tur",
            },
            {
                id:3,
                FirstName:"Katherine",
                LastName:"Perez",
            },
            {
                id:4,
                FirstName:"Anaiza",
                LastName:"Torres",
            },
        ],
    };
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    
                    <BadgesList badges={this.state.data}/>
                
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;