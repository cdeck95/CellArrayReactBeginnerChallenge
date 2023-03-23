import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [cells, setCells] = useState(["A", "B", "C"]);

  function addCell(indexIn: number) {
    const newCells: string[] = []
    {cells.forEach((cell, idx) => {
      if(idx == indexIn){
        newCells.push(cell)
        newCells.push("?")
      } else {
        newCells.push(cell)
      }
    })}
    setCells(newCells)
  }

  function changeCell(newCellValue: string, idx: number) {
      setCells((prevCells) =>
      prevCells.map((cell, i) => {
        return idx == i ? newCellValue : cell
      })
    );
  }
  return (
    <>
      <Head>
        <title>React/Next Playground App</title>
      </Head>
      <main className={styles.main}>
          <div className={styles.cellContainer}>          
            {cells.map((cell, idx) => 
              <div className={styles.cellContainer}>
                <input key={idx} className={styles.cell} value={cell} onChange={(e) => changeCell(e.currentTarget.value, idx)} />
                <input className={styles.hiddenCell} onClick={(e) => addCell(idx)}/>              
              </div>
            )}
          </div>
      </main>
    </>
  )
}
