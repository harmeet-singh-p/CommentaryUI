
import { Button, Group } from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

function CommandsComponent() {
    return (
        <Group>
            <FontAwesomeIcon icon="fa-solid fa-floppy-disk" />
            <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
             onClick={() => setCount((count) => count + 1)}>
            Save
            </Button>

            <FontAwesomeIcon icon="fa-solid fa-check" />
            <Button variant="filled" color="violet" onClick={() => setCount((count) => count + 1)}>
            Save/Approve
            </Button>

            <FontAwesomeIcon icon="fa-solid fa-arrows-rotate" />
            <FontAwesomeIcon icon="fa-solid fa-rotate-right" />
            <Button variant="filled" color="violet" onClick={() => setCount((count) => count + 1)}>
            Refresh
            </Button>

            <FontAwesomeIcon icon="fa-solid fa-file-excel" />
            <Button variant="filled" color="violet" onClick={() => setCount((count) => count + 1)}>
            Export
            </Button>

            <FontAwesomeIcon icon="fa-solid fa-print" />
            <Button variant="filled" color="violet" onClick={() => setCount((count) => count + 1)}>
            Print
            </Button>
        </Group>
    );
}

export default CommandsComponent