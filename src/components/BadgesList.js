import React from 'react';
import {Link} from 'react-router-dom';
import '../components/styles/BadgeList.css';

export default class BadgesList extends React.Component{
    
    render(){
        if (this.props.badges.length === 0){
            return (
                <React.Fragment>
                    <h3 className="h3_vacio">No se encontraron datos, agregue nuevos!!!!</h3>
                    <div className="buttons">
                        <Link to="../badges/new">Add</Link>
                </div>
                </React.Fragment>
            )
        }
        return(
            <div className="list">
                <div className="buttons">
                        <Link to="../badges/new">Add</Link>
                </div>
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