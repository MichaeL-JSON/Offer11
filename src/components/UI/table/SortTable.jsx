import React from 'react';
import classes from './SortTable.module.css'

const SortTable = ({posts, filter, setFilter}) => {

    // const setTheadFilter = async (s) => {
    //     await setFilter((prevState) => {
    //         return({
    //             ...prevState,
    //             sort: s}) 
    //             })
    // }

    return (
            <table style={{width:'1077px', marginTop: '15px'}} class="table table-bordered align-middle border-2">
                <thead style={{background: ' #474955', height: '54px', color: '#fff',fontFamily: 'Roboto Mono, monospace',fontStyle: 'normal',fontWeight: '600',fontSize: '14px'}} class="align-middle">
                    <th 
                    style={{fontFamily: 'Roboto', paddingLeft: '23px'}} 
                    align="center">
                         ID
                        <i class="fa-solid fa-angle-down" style={{marginLeft: '39px'}} ></i>
                    </th>

                    <th style={{paddingLeft: '125px'}}>
                        Заголовок 
                        <i class="fa-solid fa-angle-down" style={{marginLeft: '39px'}} ></i>
                    </th>
                    
                    <th style={{paddingLeft: '121px'}}>
                        Описание 
                        <i class="fa-solid fa-angle-down" style={{marginLeft: '39px'}} ></i>
                    </th>
                </thead>
                <tbody style={{height: '615px'}}>
                    {
                        posts.map((d)=>(
                            <tr key={d.id}  >
                                <td style={{width:'112px'}} align="center">{d.id}</td>
                                <td style={{width:'533px'}} align="left">{d.title}</td>
                                <td align="left">{d.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    );
};

export default SortTable;