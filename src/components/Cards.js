import { React, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Cardsdata from './CardsData'
import './style.css'
import { add } from '../redux/reducers/reducer'

const Cards = () => {

	const [data, setData] = useState(Cardsdata);

	const dispatch = useDispatch();

	const send = (e) => {
		// console.log(e);
		dispatch(add(e))
	}

	return (
		<div className='container mt-3'>
			<h2 className='text-center'>Add to Cart Project</h2>
			<div className="row d-flex justify-content-center align-content-center">
				{
					data.map((element, id) => {
						return (
							<>
								<Card style={{ width: '22rem', border: 'none' }} className='mx-2 mt-4 card_style' >
									<Card.Img variant="top" src={element.imgdata} style={{ height: '16rem' }} className='mt-3' />
									<Card.Body>
										<Card.Title>{element.rname}</Card.Title>
										<Card.Text>
											Price : ₹{element.price}
										</Card.Text>
										<div className="button_div d-flex justify-content-center">
											<Button variant="primary" className='col-lg-12' onClick={() => send(element)}>Add to Cart</Button>
										</div>
									</Card.Body>
								</Card>
							</>
						)
					})
				}

			</div>
		</div>
	)
}

export default Cards