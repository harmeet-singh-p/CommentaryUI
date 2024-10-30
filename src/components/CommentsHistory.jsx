 import { Table } from '@mantine/core';

 export default function CommentsHistory ()
 {
    const elements = [
        { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
        { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
        { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
        { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
        { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
      ];

    const rows = elements.map((element) => (
        <tr key={element.name}>
          <td>{element.position}</td>
          <td>{element.name}</td>
          <td>{element.symbol}</td>
          <td>{element.mass}</td>
        </tr>
      ));

    return (
        <div className='mt-2 text-blue-800' >
          <div className="text-center font-semibold mb-2">Comments History</div>
          <Table highlightOnHover>
              <thead>
                  <tr>
                  <th className="border-solid border-2 border-indigo-600">Element position</th>
                  <th className="border-solid border-2 border-indigo-600">Element name</th>
                  <th className="border-solid border-2 border-indigo-600">Symbol</th>
                  <th className="border-solid border-2 border-indigo-600">Atomic mass</th>
                  </tr>
              </thead>
              <tbody>{rows}</tbody>
          </Table>
          <div className="mt-1 h-px bg-blue-800"/>
      </div>
    )
 }