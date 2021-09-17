import React, { Component } from 'react';
import EmployeeService from '../servisec/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            employees:[]

        }
        this.addEmployee=this.addEmployee.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
        this.deleteEmployee=this.deleteEmployee.bind(this);
        this.viewEmployee=this.viewEmployee.bind(this);


    }
    editEmployee(id){
        this.props.history.push('/update-employee/'+id);

    }
    viewEmployee(id){
        this.props.history.push('/view-employee/'+id);

    }
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then((res) =>{
            this.setState({ employees: this.state.employees.filter(employee =>employee.id !== id)});
        });
    }
    
    componentDidMount(){
        EmployeeService.getEmployees().then((res) =>{
            this.setState({ employees: res.data});
        });
    }
    addEmployee(){
        this.props.history.push('/add-employee');
     }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <button style={{width:"150px" , margin:"10px"}} className="btn btn-primary" onClick={this.addEmployee}>add employee</button>
                </div>

                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> employee first name</th>
                                <th> employee last name</th>
                                <th> employee email id</th>
                                <th> actions</th>

                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key={employee.id}>
                                    <td> {employee.firstName}</td>
                                    <td> {employee.lastName}</td>
                                    <td> {employee.emailId}</td>
                                    <td>
                                        
                                        <button onClick = {() => this.editEmployee(employee.id)} className="btn btn-info">update</button>
                                        <button style={{marginLeft:"10px" , marginRight:"10px"}} onClick = {() => this.deleteEmployee(employee.id)} className="btn btn-danger">delete</button>
                                        <button onClick = {() => this.viewEmployee(employee.id)} className="btn btn-info">view</button>

                                    </td>

                                  
    
                                </tr>
                                )
                            }

                        </tbody>

                    </table>

                </div>
                
            </div>
        );
    }
}

export default ListEmployeeComponent; 