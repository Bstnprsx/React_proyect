import React from 'react';
import { Bar } from 'react-chartjs-2';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';

function DatosUno() {
  const data = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [
      {
        label: 'Ventas de la semana',
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const tableRows = [
    createData('Frozen yoghurt', 159, 6.0),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Eclair', 262, 16.0),
    createData('Cupcake', 305, 3.7),
    createData('Gingerbread', 356, 16.0),
    createData('Jelly bean', 375, 0.0),
  ];

  function createData(name, calories, fat) {
    return { name, calories, fat };
  }

  return (
    <div style={{ padding: '50px', backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Bar data={data} options={options} />
      <TableContainer component={Paper} style={{ marginTop: '50px' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Desert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DatosUno;
