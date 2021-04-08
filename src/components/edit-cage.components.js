import axios from 'axios';
import React, {Component} from 'react';

export default class EditCage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cage_name:'',
            cage_hen:"",
            cage_roo:"",
            cage_total:"",
        }
   }
        componentDidMount(){
        axios.get('http://localhost:4000/cages/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    cage_name: response.data.cage_name,
                    cage_hen: response.data.cage_hen,
                    cage_roo: response.data.cage_roo,
                    cage_total: response.data.cage_total,
                })
            })
            .catch(function(error){
                console.log(error)
            })
        }
    
    
    render() {
        return (
            <div>
                <h3> Update Cage </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.cage_name}
                                onChange={this.onChangeCageName}
                                />
                    </div>

                </form>
            </div>
        )
    }
}