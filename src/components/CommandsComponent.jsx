
import { Button, Group } from '@mantine/core';
import { FaSave, FaCheckCircle, FaFileExcel, FaPrint } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";

function CommandsComponent() {
    return (
        <div className="flex flex-row">
        <Group>
            
            <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
             onClick={() => setCount((count) => count + 1)}> 
             Save <FaSave className='ml-2'  size={20}/>
            </Button>

            
            <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
             onClick={() => setCount((count) => count + 1)}>
            Save/Approve <FaCheckCircle className='ml-2' size={20} />
            </Button>
        </Group>


        <Group style={{marginLeft:'10px'}}> 
            <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
             onClick={() => setCount((count) => count + 1)}>
            Refresh <LuRefreshCcw className='ml-2' size={20}/>
            </Button>
            
            <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
             onClick={() => setCount((count) => count + 1)}>
            Export <FaFileExcel className='ml-2' size={20} />
            </Button>

           
            <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
             onClick={() => setCount((count) => count + 1)}>
            Print  <FaPrint className='ml-2' size={20}/>
            </Button>
        </Group>
        </div>
    );
}

export default CommandsComponent