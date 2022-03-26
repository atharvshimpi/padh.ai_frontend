import React, { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip'

import './card.css'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CardModal = ({ data, isFlipped, handleClick, handleCardFlip }) => {
    const [selectedOptionId, setSelectedOptionId] = useState(0)

    const handleChange = (e) => {
        setSelectedOptionId(Number(e.target.value))
    }

    useEffect(() => {
        document.querySelector(".btn-flip").addEventListener("click", () => {
            if(data.answer_id === selectedOptionId) {
                document.querySelector(".card-flip").classList.add("card-correct-answer")
                document.querySelector(".card-flip").classList.remove("card-wrong-answer")
            } else {
                document.querySelector(".card-flip").classList.add("card-wrong-answer")
                document.querySelector(".card-flip").classList.remove("card-correct-answer")    
            }
        })
    }, [selectedOptionId, data.answer_id])
    
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className='card text-dark bg-light mb-3'>
                <div className='card-modal-front'>
                    <div className='card-header'>{data.subject}</div>
                    <div className='card-body'>
                        <div className='card-title'>Q.{data.index}</div>
                        <div className='card-text'>{data.about}</div>
                    </div>
                    <div className='card-body'>
                        <Form>
                            { data.options.map((options) => 
                                <Form.Check
                                    key={`${options.id}`}
                                    type='radio'
                                    label={`${options.text}`}
                                    value={`${options.id}`}
                                    id={`${options.id}`}
                                    name='options'
                                    onChange={ handleChange }
                                    checked={selectedOptionId === options.id}
                                />
                            )}
                        </Form>
                    </div>
                    <div className='card-footer'>
                        <Stack gap={2}>
                            <Button className='w-100 btn-flip' variant="primary" onClick={ handleCardFlip }>Submit</Button>
                            {/* <Button className='w-100' variant="primary">Skip</Button> */}
                        </Stack>
                    </div>
                </div>
            </div>
            <div className='card mb-3 card-flip'>
                <div className='card-header'>{data.subject}</div>
                <div className='card-body'>
                    <div className='card-title fs-3'>Solution</div>
                    <div className='card-text'>Your Answer :- <br /> <b>{selectedOptionId})</b></div>
                    <div className='card-text'>Correct Answer :- <br /> <b>{data.answer_id}) {data.options.filter(obj => obj.id === data.answer_id)[0].text}</b></div>
                    <div className='card-text'>{data.greeting}</div>
                </div>
                <Stack gap={2}>
                    <Button className='w-100' variant="primary" onClick={ handleCardFlip }>Previous Question</Button>
                    <Button className='w-100' variant="primary" onClick={ handleClick }>Next Question</Button>
                </Stack>
            </div>
        </ReactCardFlip>
    )
}

export default CardModal