import { Textarea } from "@mantine/core"

export default function AddComments()
{
    return (
        <div>
            <div className="h-px bg-blue-800"/>
            <Textarea className='text-blue-800' size="md"  radius="sm" withAsterisk  placeholder="Add Comments" label="Add Comments"></Textarea>            
        </div>
    )
}