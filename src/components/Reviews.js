import React from 'react'
import { Link } from 'react-router-dom'

function Reviews() {
    return (
        <div className='row'>
            <div className='col mb-4'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="/user.png" className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Анастасия</h5>
                        <p className="card-text">Все круто</p>
                        <div className="btn btn-primary">Go somewhere</div>
                    </div>
                </div>
            </div>
            <div className='col'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="/user.png" className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Анастасия</h5>
                        <p className="card-text">Классные продукты и персонал!</p>
                        <div className="btn btn-primary">Go somewhere</div>
                    </div>
                </div>
            </div>
            <div className='col'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="/user.png" className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Анастасия</h5>
                        <p className="card-text">Вчера заказала семена яблоки все пришло в высшем качестве! Отлично!</p>
                        <div className="btn btn-primary">Go somewhere</div>
                    </div>
                </div>
            </div>
            <div classNameName='col'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="/user.png" className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Анастасия</h5>
                        <p className="card-text">Вчера заказала селитру все пришло в высшем качестве! Отлично!</p>
                        <div className="btn btn-primary">Go somewhere</div>
                    </div>
                </div>
            </div>
            <div className='col'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="/user.png" className="card-img-top" width={50} height={50} alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Анастасия</h5>
                        <p className="card-text">Вчера заказала грязь для удобрения все пришло в высшем качестве! Отлично!</p>
                        <div className="btn btn-primary">Go somewhere</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews