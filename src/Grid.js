import React from 'react';
import './App.css';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
function Disp()
{
    const columnDefs=[
        {headerName: "ID", field:"id"},
        {headerName: "UserID", field:"uid"},
        {headerName: "Title", field:"title"},
        {headerName: "Body", field:"body"},

    ]
    const rowData=[
        {
            uid:1,id:1,title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",body:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            uid:2,id:2,title:"abc aut facere repellat provident occaecati excepturi optio ",body:"suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            uid:3,id:3,title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",body:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
    ]
    const defaultColDef={
        sortable:true,
        editable:true,
        flex:1,filter:true,
        floatingFilter:true
    }
    const onGridReady=(params)=>{
        console.log("Grid Test");
        fetch("https://jsonplaceholder.typicode.com/posts").then(resp=>resp.json())
        .then(resp=>(console.og(resp)
        params.api.applyTransaction({add:resp})})
    }
    return(
        <div className='App'>
            <h1 align="center">Ag-Grid App</h1>
            <h3>Details</h3>
            <div className='ag-theme-alpine' style={{height:'400px'}}>
                <AgGridReact>
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    onGridReady={onGridReady}
                </AgGridReact>
            </div>
        </div>
    )
}
export default Disp;