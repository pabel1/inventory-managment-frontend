import React, { useEffect, useState } from "react";
import { getToken } from "../HelperTools/UserDetails";
import { useGetCustomerListQuery } from "../Redux/services/apiRequest";
import Table from "../Table/Table";

const CustomersList = () => {
  const [tableData, setTableData] = useState();
  const [total, setTotal] = useState();
  let token = getToken();
  const { data } = useGetCustomerListQuery(token);
  const result = data?.data[0];
   

    

  useEffect(() => {
 
    setTableData(result?.rows);
    setTotal(result?.total);
  }, [result?.rows,result?.total]);
  console.log(tableData);
  console.log(total);

  return (
    <>
      <div>
        {tableData && (
          <div>
           
            <Table tableData={tableData} />
          </div>
        )}
      </div>
    </>
  );
};

export default CustomersList;
