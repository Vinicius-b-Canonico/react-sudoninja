import React from 'react';

export interface SudokuBoardProps {
  grid: string[][]; // e.g. [['5', '', '', ...], [...], ...]
}

export const SudokuBoard: React.FC<SudokuBoardProps> = ({ grid }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${grid.length}, 1fr)` }}>
      {grid.flat().map((cell, i) => (
        <div key={i} style={{
          border: '1px solid #ccc', textAlign: 'center', padding: '1em'
        }}>
          {cell}
        </div>
      ))}
    </div>
  );
};
