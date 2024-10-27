
import { Button, Group } from '@mantine/core';
import { FaSave, FaCheckCircle, FaFileExcel, FaPrint } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";

function CommandsComponent() {
    return (
        <div style={{display:'flex'}}>
        <Group>
            
            <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
             onClick={() => setCount((count) => count + 1)}> 
             Save <FaSave size={20}/>
            </Button>

            
            <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
             onClick={() => setCount((count) => count + 1)}>
            Save/Approve <FaCheckCircle size={20} />
            </Button>
        </Group>


        <Group style={{marginLeft:'10px'}}> 
            <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
             onClick={() => setCount((count) => count + 1)}>
            Refresh <LuRefreshCcw size={20}/>
            </Button>
            
            <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
             onClick={() => setCount((count) => count + 1)}>
            Export <FaFileExcel size={20} />
            </Button>

           
            <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
             onClick={() => setCount((count) => count + 1)}>
            Print  <FaPrint size={20}/>
            </Button>
        </Group>
        </div>
    );
}

export default CommandsComponent