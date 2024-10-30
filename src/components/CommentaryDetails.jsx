
import { DatePicker } from '@mantine/dates';
import { Table } from '@mantine/core';

export const CommentaryDetails = () => {
    return (
       
        <div className='pt-4'>
            
            <Table className='text-blue-800' >
                <tbody >
                    <tr key="row1" >
                        <td><b>Legal Entity :</b></td>
                        <td>X1OYFIE</td> 
                        <td><b>Limit :</b></td>
                        <td>14,357,992</td>                        
                    </tr>
                    <tr key="row2">
                        <td><b>MGS :</b></td>
                        <td>6</td>
                        <td><b>sMtm :</b></td>
                        <td>19,714,018</td>                         
                    </tr>
                    <tr key="row3">
                        <td><b>Reporting Date :</b></td>
                        <td>14-Apr-2024</td> 
                        <td><b>Mtm :</b></td>
                        <td>3,499,795</td>                        
                    </tr>
                    <tr key="row4">
                        <td><b>Scenario Name :</b></td>
                        <td>CCR_SCE_HIST_23June2016</td>
                        <td></td>
                        <td></td>                         
                    </tr>
                    <tr>
                        <td colSpan={4} ><div className="mt-2 h-px bg-blue-800"/></td>                        
                    </tr>
                    <tr key="row5">
                        <td><b>Valid For :</b></td>
                        <td><input type="date" placeholder='ValidFor' id='validFor' /> </td>
                        <td><b>Breach Type :</b></td>
                        <td>Mandatory Comment</td>                         
                    </tr>
                    <tr>
                        <td colSpan={4} ><div className="mt-1 mb-1 h-px bg-blue-800"/></td>                        
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

 // <div className="flex flex-col">
        //     <div className="flex flex-row items-center justify-around mt-4">
        //         <div className="flex flex-col items-center justify-start">
        //             <div> <b>Legal Entity :</b> X1OYFIE </div>
        //             <div> <b>MGS :</b> 6 </div>
        //             <div> <b>Reporting Date :</b> 14-Apr-2024 </div>
        //             <div> <b>Scenario Name :</b> CCR_SCE_HIST_23June2016</div>
        //         </div>
        //         <div className="flex flex-col items-center justify-start">
        //             <div> <b>Limit :</b> 14,357,992 </div>
        //             <div> <b>sMtM :</b> 19,714,018 </div>
        //             <div> <b>MtM :</b> 3,499,795 </div>
        //             <div>  </div>
        //         </div>                
        //     </div>

        //     <div className="flex flex-row items-center justify-around my-2">
        //         {/* <DatePicker  label="Valid For" placeholder="Select a date"/> */}
        //         <label for="birthday"><b>Valid For :</b></label>
        //         <input type="date" id="Valid For" name="validFor"></input>
        //         <div> <b>Breach Type :</b> Mandatory Comment </div>
        //     </div>
        // </div>