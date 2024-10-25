
import { Button, Group } from '@mantine/core';

function CommandsComponent() {
    return (
        <Group>
            <Button variant="filled" color="violet" onClick={() => setCount((count) => count + 1)}>
            Save
            </Button>
            <Button variant="filled" color="violet" onClick={() => setCount((count) => count + 1)}>
            Save/Approve
            </Button>
            <Button variant="filled" color="violet" onClick={() => setCount((count) => count + 1)}>
            Refresh
            </Button>
            <Button variant="filled" color="violet" onClick={() => setCount((count) => count + 1)}>
            Export
            </Button>
            <Button variant="filled" color="violet" onClick={() => setCount((count) => count + 1)}>
            Print
            </Button>
        </Group>
    );
}

export default CommandsComponent