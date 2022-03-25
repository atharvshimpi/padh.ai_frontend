import React, { useState } from 'react'

import Card from 'react-bootstrap/Card'
import { Stack } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CardModal = ({ data, handleClick }) => {
    return (
        <Card border="dark" className='card-modal-container'>
            <div className='card-modal-front'>
                <Card.Header>{data.subject}</Card.Header>
                <Card.Body>
                    <Card.Title>Q.{data.index}</Card.Title>
                    <Card.Text>{data.about}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Form>
                        { data.options.map((options) => 
                            <Form.Check
                                key={`${options.id}`}
                                type='radio'
                                label={`${options.text}`}
                                id={`${options.id}`}
                                name='options'
                            />
                        )}
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <Stack gap={2}>
                        <Button className='w-100' variant="primary" onClick={ handleClick }>Submit</Button>
                        {/* <Button className='w-100' variant="primary">Skip</Button> */}
                    </Stack>
                </Card.Footer>
            </div>
            <div className='card-modal-back'>
                
            </div>
        </Card>
    )
}

export default CardModal