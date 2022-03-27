import React, { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip'

import './card.css'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CardModal = ({ data, isFlipped, handleClick, handleCardFlip, selectedOptionId, handleChange }) => {

    // Color change upon answering - ***NOT WORKING***

    useEffect(() => {
        document.getElementById("btn-flip").addEventListener("click", () => {
            if(selectedOptionId === data.answer_id) {
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
                    <Form>
                        <div className='card-body'>
                                { data.options.map((options) => 
                                    <Form.Check
                                        key={options.id}
                                        type='radio'
                                        label={options.text}
                                        value={options.id}
                                        id={options.id}
                                        name={data.subject}
                                        onChange={ handleChange }
                                        checked={selectedOptionId === options.id}
                                    />
                                )}
                        </div>
                        <div className='card-footer'>
                            <Stack gap={2}>
                                <Button id="btn-flip" className='w-100' variant="primary" onClick={ handleCardFlip }>Submit</Button>
                                {/* <Button className='w-100' variant="primary">Skip</Button> */}
                            </Stack>
                        </div>
                    </Form>
                </div>
            </div>
            <div className='card mb-3 card-flip'>
                <div className='card-header'>{data.subject}</div>
                <div className='card-body'>
                    <div className='card-title fs-3'>Solution</div>
                    <div className='card-text fs-5'>Your Answer :- <br /> <b>{selectedOptionId})</b></div>
                    <br />
                    <div className='card-text fs-5'>Correct Answer :- <br /> <b>{data.answer_id}) {data.options.filter(obj => obj.id === data.answer_id)[0].text}</b></div>
                    <br />
                    <div className='card-text'>Explanation :- <br />{data.greeting}</div>
                </div>
                <div className='card-footer'>
                    <Stack gap={2}>
                        <Button className='w-100' variant="primary" onClick={ handleCardFlip }>Back to Question</Button>
                        <Button className='w-100' variant="primary" onClick={ handleClick }>Next Question</Button>
                    </Stack>
                </div>
            </div>
        </ReactCardFlip>
    )
}

export default CardModal