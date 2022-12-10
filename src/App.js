import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateNewCustomer from "./Components/Customer/CreateNewCustomer";
import CustomerLayout from "./Components/Customer/CustomerLayout";
import CustomersList from "./Components/Customer/CustomersList";
import DeleteCustomer from "./Components/Customer/DeleteCustomer";
import UpdateCustomer from "./Components/Customer/UpdateCustomer";
import Dashboard from "./Components/Dashboard/Dashboard";
import ExpenseList from "./Components/Expense/ExpenseList";
import NewExpenseCreate from "./Components/Expense/NewExpenseCreate";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
// import Table from "./Components/Table/Table";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/registration" element={<Registration />} />

        <Route path="/dashboard/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          {/* customer Route */}
          <Route path="customers/" element={<CustomerLayout/>} >
            
            <Route index element={<CustomersList />} />
            <Route path="updatecustomer" element={<UpdateCustomer />} />
            <Route path="deletecustomer" element={<DeleteCustomer />} />
            <Route path="createcustomer" element={<CreateNewCustomer />} />
          </Route>

          {/* expense Route */}
          <Route path="expense" >
            <Route index element={<NewExpenseCreate />} />
            {/* <Route path="newcustomer" element={<CreateNewCustomer />} /> */}
            <Route path="list" element={<ExpenseList />} />

            {/* <Route path="updatecustomer" element={<UpdateCustomer />} /> */}
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
