import React from 'react';
import '../pages/styles/Badges.css';
import BadgesList from '../components/BadgesList';
import api from '../api';
import PageLoading from '../components/PageLoadings';


class Badges extends React.Component{
    state = [{
        FirstName:"",
        LastName:"",
    }]
    constructor(props){
        super(props)
        console.log("1. constructor");
        // this.state = {
        //     data:[],
        
        this.state = 
            {
                loading:true,
                error:null,
                data:[
                    {
                        id:1,
                        FirstName:"Elvis",
                        LastName:"Gil"
                    },
                    {
                        id:2,
                        FirstName:"Edgar",
                        LastName:"Tur"
                    },
                    {
                        id:3,
                        FirstName:"Kathy",
                        LastName:"Perez"
                    }
                ],
            };
        
    }


    componentDidMount(){
        console.log("3. DidMount");

        this.fetchData();

        // this.timeOut = setTimeout(()=>{
        //     this.setState({
        //         loading:true,
        //         data: undefined,
        //         error:null
                
        //     })
        
        // },3000);
    }

    fetchData = async () => {
        this.setState ({
            loading:true,
            error:null,
        })

        try{
            const data = await api.badges.list();
            this.setState ({loading:false,data:data});
        }catch(error){
            this.setState ({loading:false,error:error});
        }
    }

    componentDidUpdate(prevProps,prevState){
        console.log("5. DidUpdate");

        console.log(
            {
                prevProps: prevProps,
                prevState:prevState,
            }
        );
        
        console.log(
            {
                props: this.props,
                state:this.state,
            }
        );
    }

    // componentWillUnmount(){
    //     console.log("6. WillUnmount");
    //     // clearTimeout(this.timeOut);
    // }
    render(){
        if(this.state.loading === true){
            return <PageLoading />;
        }

        if(this.state.error === true){
            return `Error:${this.state.error.message}`;
        }
        
        console.log("2. render");

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