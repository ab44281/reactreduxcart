import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { add, rmv } from '../redux/reducers/reducer'

const CardsDetails = () => {
	const [data, setData] = useState([]);
	// console.log(data);
	const { id } = useParams();
	// console.log(id);

	const history = useNavigate();

	const dispatch = useDispatch();

	const getData = useSelector((state) => state.cart.carts);
	// console.log(getData);

	const compare = () => {
		let compareData = getData.filter((e) => {
			return e.id == id
		});
		setData(compareData);
	}

	// add data
	const send = (e) => {
		// console.log(e);
		dispatch(add(e))
	}

	const dlt = (id) => {
		dispatch(rmv(id));
		history('/');
	}

	useEffect(() => { 
		compare(); 
	},[id]);
	return (
		<>
			<div className="container mt-2">
				<h2 className='text-center'>Items Details Page</h2>
				<section className='container mt-3'>
					<div className='itemsdetails'>
						{
							data.map((ele) => {
								return (
									<>
										<div className='items_img'>
											<img src={ele.imgdata} alt="" />
										</div>
										<div className='details'>
											<Table>
												<tr>
													<td>
														<p><strong>Restaurant</strong> : {ele.rname}</p>
														<p><strong>Price</strong> : ₹{ele.price}</p>
														<p><strong>Dishes</strong> : {ele.address}</p>
														<p><strong>Total</strong> : ₹350</p>
														<div className='mt-5 d-flex justify-content-between align-content-center' style={{ width: 100, cursor: 'pointer', background: '#ddd', color: '#111' }}>
															<span style={{ fontSize: 24 }}>-</span>
															<span style={{ fontSize: 22 }}>{ele.qnty}</span>
															<span style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span>
														</div>
													</td>
													<td>
														<p><strong>Rating</strong> : <span style={{ background: 'green', color: '#ffffff', padding: '2px 5px', borderRadius: '5px' }}>{ele.rating} ★</span></p>
														<p><strong>Order Review </strong> : {ele.somedata}</p>
														<p><strong>Remove</strong> : <i className='fas fa-trash' style={{ color: 'red', fontSize: 20, cursor: 'pointer' }} onClick={() => dlt(ele.id)}></i></p>
													</td>
												</tr>
											</Table>
										</div>
									</>
								)
							})
						}

					</div>
				</section>
			</div>
		</>
	)
}

export default CardsDetails