import React from 'react';
import '../components/styles/BadgeList.css';

export default class BadgesList extends React.Component{
    
    render(){
        return(
            <div className="list">
                        <ul>
                            {this.props.badges.map((badge)=>{
                                return(
                                    <li key={badge.id}><p>{badge.FirstName} {badge.LastName}</p></li>
                                );
                            })}
                        </ul>
            </div>
        );
    }

}

// export default BadgesList;