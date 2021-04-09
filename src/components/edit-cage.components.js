import axios from 'axios';
import React, {Component} from 'react';

export default class EditCage extends Component {

    constructor(props) {
        super(props);

        this.onChangeCageName = this.onChangeCageName.bind(this)
        this.onChangeCageHens = this.onChangeCageHens.bind(this)
        this.onChangeCageRoos = this.onChangeCageRoos.bind(this)
        this.onChangeCageTotal = this.onChangeCageTotal.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

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

        onChangeCageName(e){
            this.setState({
                cage_name:e.target.value
            })
        }
        onChangeCageHens(e){
            this.setState({
                cage_hen: e.target.value
            })
        }
        onChangeCageRoos(e){
            this.setState({
                cage_roo: e.target.value
            })
        }
        onChangeCageTotal(e){
            this.setState({
                cage_total: e.target.value
            })
            }

        onSubmit(e) {
            e.preventDefault();
            const obj= {
                cage_name:this.state.cage_name,
                cage_hen:this.state.cage_hen,
                cage_roo:this.state.cage_roo,
                cage_total:this.state.cage_total,
            };
            axios.post('http://localhost:4000/cages/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data)
            ).catch(err => {
                console.log("onSubmit newCage error", err)
            });

            this.props.history.push('/')
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
                    <div className="form-group">
                        <label>Hen</label>
                        <input type="number"
                                className="form-control"
                                value={this.state.cage_hen}
                                onChange={this.onChangeCageHens}
                                />
                    </div>
                    <div className="form-group">
                        <label>Roos</label>
                        <input type="number"
                                className="form-control"
                                value={this.state.cage_roo}
                                onChange={this.onChangeCageRoos}
                                />
                    </div>
                    <div className="form-group">
                        <label>Total</label>
                        <input type="number"
                                className="form-control"
                                value={this.state.cage_total = (+this.state.cage_hen )+ (+this.state.cage_roo)}
                                onChange={this.onChangeCageTotal}
                                />
                    </div>
                         <input type="submit" value="Submit Cage" className="btn btn-primary"/>
                </form>
               
            </div>
        )
    }
}