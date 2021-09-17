import axios from "axios";

const EMPLOYEE_BASE_URL_API="http://localhost:8080/api/v1/employees"
const EMPLOYEE_Update_URL_API="http://localhost:8080/api/v1/employees/update"

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_BASE_URL_API);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_URL_API,employee);
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_BASE_URL_API+"/"+id);
    }

    updateEmployee(employee,id){
        return axios.put(EMPLOYEE_Update_URL_API+"/"+id,employee);
    }

    
    deleteEmployee(id){
        return axios.delete(EMPLOYEE_BASE_URL_API+"/"+id);
    }


}
export default new EmployeeService()