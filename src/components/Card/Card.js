import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './card.css'

import CardModal from './CardModal'
import { Data } from '../../containers/Data/Data'

const Card = () => {
  const [isPhyFlipped, setPhyIsFlipped] = useState(false)
  const [isChemFlipped, setChemIsFlipped] = useState(false)
  const [isMathFlipped, setMathIsFlipped] = useState(false)
  const [phyIndex, setPhyIndex] = useState(0)
  const [chemIndex, setChemIndex] = useState(0)
  const [mathIndex, setMathIndex] = useState(0)
  const [selectedPhyOptionId, setSelectedPhyOptionId] = useState(0)
  const [selectedChemOptionId, setSelectedChemOptionId] = useState(0)
  const [selectedMathOptionId, setSelectedMathOptionId] = useState(0)

  const handleChange = (e, subjectNum) => {
    (subjectNum === 1 ? 
      setSelectedPhyOptionId(Number(e.target.value))
          : 
      (subjectNum === 2 ?
        setSelectedChemOptionId(Number(e.target.value))
              :
        setSelectedMathOptionId(Number(e.target.value))
      ))
  }

  const handleCardFlip = (subjectNum) => {
    // subjectNum: { Physics: 1, Chemistry: 2, Math: 3 } 
      (subjectNum === 1 ? 
        setPhyIsFlipped(!isPhyFlipped)
            : 
        (subjectNum === 2 ?
          setChemIsFlipped(!isChemFlipped)
                :
          setMathIsFlipped(!isMathFlipped)
        ))
  }

  const handleClick = (subjectNum) => {
    // subjectNum: { Physics: 1, Chemistry: 2, Math: 3 } 
    handleCardFlip(subjectNum)

    (subjectNum === 1 ? 
      (phyIndex + 1 < Data[0].length ? setPhyIndex(phyIndex + 1) : alert("Physics Questions are Over!"))
      : 
      (subjectNum === 2 ?
        (chemIndex + 1 < Data[1].length ? setChemIndex(chemIndex + 1) : alert("Chemistry Questions are Over!"))
        :
        (mathIndex + 1 < Data[2].length ? setMathIndex(mathIndex + 1) : alert("Math Questions are Over!"))
      ))
  }

  return (
    <Container className='card-container'>
        <Row>
            {/* Physics */}
            <Col lg={4} md={4} sm={4} className='mt-4 '><CardModal data={Data[0][phyIndex]} isFlipped={isPhyFlipped} handleClick={ () => handleClick(1) } handleCardFlip={ () => handleCardFlip(1) } selectedOptionId={selectedPhyOptionId} handleChange={ (e) => handleChange(e, 1) } /></Col>

            {/* Chemistry */}
            <Col lg={4} md={4} sm={4} className='mt-4 '><CardModal data={Data[1][chemIndex]} isFlipped={isChemFlipped} handleClick={ () => handleClick(2) } handleCardFlip={ () => handleCardFlip(2) } selectedOptionId={selectedChemOptionId} handleChange={ (e) => handleChange(e, 2) } /></Col>

            {/* Mathematics */}
            <Col lg={4} md={4} sm={4} className='mt-4 '><CardModal data={Data[2][mathIndex]} isFlipped={isMathFlipped} handleClick={ () => handleClick(3) } handleCardFlip={ () => handleCardFlip(3) } selectedOptionId={selectedMathOptionId} handleChange={ (e) => handleChange(e, 3) } /></Col>
        </Row>
    </Container>
  )
}

export default Card