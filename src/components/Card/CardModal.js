import React from 'react'
import ReactCardFlip from 'react-card-flip'

import './card.css'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CardModal = ({ data, isFlipped, handleClick, handleCardFlip, selectedOptionId, handleChange }) => {
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
                                        required
                                        key={options.id}
                                        type='radio'
                                        label={options.text}
                                        value={options.id}
                                        id={`${data.subject}${data.index}${options.id}`}
                                        name={`${data.subject}${data.index}`}
                                        onChange={ handleChange }
                                        checked={selectedOptionId === options.id}
                                    />
                                )}
                        </div>
                        <div className='card-footer'>
                            <Stack gap={2}>
                                {/* Disabled - to prevent submitting empty value */}
                                <Button id="btn-flip" className='w-100' variant="primary" disabled={!selectedOptionId} onClick={ handleCardFlip }>Submit</Button>
                            </Stack>
                        </div>
                    </Form>
                </div>
            </div>

            {/* To change the style according to the option selected */}
            <div className={`card mb-3 card-flip ${selectedOptionId && (selectedOptionId === data.answer_id ? 'card-correct-answer' : 'card-wrong-answer')}`}>
                <div className='card-header'>{data.subject}</div>
                <div className='card-body'>
                    <div className='card-title fs-3'>Solution</div>
                    <div className='card-text fs-5'>Your Answer :- <br /> <b>{selectedOptionId + ') ' + (selectedOptionId && data.options.filter(obj => obj.id === selectedOptionId)[0].text) } </b></div>
                    <br />
                    <div className='card-text fs-5'>Correct Answer :- <br /> <b>{data.answer_id + ') ' + data.options.filter(obj => obj.id === data.answer_id)[0].text}</b></div>
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