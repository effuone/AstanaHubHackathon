import React from 'react'
import { Link } from 'react-router-dom'

function Cover() {
    return (
        <div class="px-3" style={{ marginTop: '6rem' }}>
            <h1>Logistic monitoring system</h1>
            <p class="lead">Логистическая система для отслеживания основных действий в интернет-магазине QMarket</p>
            <p class="lead">
                <Link class="btn btn-lg btn-secondary fw-bold border-white bg-white text-black mt-2">Learn more</Link>
            </p>
        </div>
    )
}

export default Cover