import React, {Component} from 'react';
import { Link } from "react-router-dom"
import axios from "axios"

const Cage = props => (
    <tr>
        <td>{props.cage.cage_name}</td>
        <td>{props.cage.cage_hen}</td>
        <td>{props.cage.cage_roo}</td>
        <td>{props.cage.cage_total}</td>
        <td>
            <Link to={"/edit/"+props.cage._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/delete/"+props.cage._id}>Delete</Link>
        </td>
    </tr>
)

export default class CreateCage extends Component {
    
    constructor(props){
        super(props)
            this.state = {cages:[]};
        };
    

    componentDidMount(){
        axios.get('http://localhost:4000/cages')
            .then(response => {
                this.setState({cages: response.data})
            })
            .catch(function (error){
                console.log(error);
            })

        }

    cageList(){
        return this.state.cages.map(function(currentCage,i){
            return<Cage cage={currentCage} key={i}/>
        });
    }


    render() {
        return (
            <div>
                <h3>Cages List</h3>
                <table className="table table-striped" style={{ marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Hens</th>
                            <th>Roos</th>
                            <th>Total</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.cageList() }
                    </tbody>
                </table>
            </div>
        )
    }
}