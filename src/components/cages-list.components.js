import React, {Component} from 'react';
import axios from 'axios';

export default class CageList extends Component {
    constructor(props) {
        super(props);

        this.onChangeCageName = this.onChangeCageName.bind(this);
        this.onChangeCageHens = this.onChangeCageHens.bind(this);
        this.onChangeCageRoos = this.onChangeCageRoos.bind(this);
        this.onChangeCageTotal = this.onChangeCageTotal.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            cage_name:"",
            cage_hens:"",
            cage_roos:"",
            cage_total:"",
        }
    }

    onChangeCageName(e) {
        this.setState({
            cage_name:e.target.value
        });
    }
    onChangeCageHens(e) {
        this.setState({
            cage_hens:e.target.value
        });
    }
    onChangeCageRoos(e) {
        this.setState({
            cage_roos:e.target.value
        });
    }
    onChangeCageTotal(e) {
            this.setState({
                
            });
    }
    onSubmit(e) {
        e.preventDefault();

        console.log(`Form Submitted`)
        console.log(`Cage Name: ${this.state.cage_name}`)
        console.log(`Cage Hens: ${this.state.cage_hens}`)
        console.log(`Cage Roos: ${this.state.cage_roos}`)
        console.log(`Cage Total: ${this.state.cage_total}`)

        const newCage = {
            cage_name:this.state.cage_name,
            cage_hens:this.state.cage_hens,
            cage_roos:this.state.cage_roos,
            cage_total:this.state.cage_total,
        }

        axios.post('http//localhost:4000/cages/add',newCage)
            .then(res => {
                console.log(res.data);
            }).catch(err => {
                console.log("onSubmit newcage error", err)
            });

        this.setState({
            cage_name:"",
            cage_hens:"",
            cage_roos:"",
            cage_total:"",
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3> Create New Cage</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cage_name}
                            onChange={this.onChangeCageName}
                            />
                        <label>Hens:</label>
                        <input type="number"
                            className="form-control"
                            value={this.state.cage_hens}
                            onChange={this.onChangeCageHens}
                            />
                         <label>Roos:</label>
                        <input type="number"
                            className="form-control"
                            value={this.state.cage_roos}
                            onChange={this.onChangeCageRoos}
                            />   
                         <label>Total</label>
                        <div>{Number(this.state.cage_hens) + Number(this.state.cage_roos)}</div>
                        <div className="form-group">
                            <input type="submit" value="Create Cage" className="btn btn-primary"/>
                        </div>
                    </div>

                </form>
                
            </div>
        )
    }
}