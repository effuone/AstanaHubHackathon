import React from 'react'
import Header from '../components/Header';
import Cover from '../components/Cover';

function Home() {
    return (
        <div className='d-flex text-center text-white bg-dark' style={{ height: '100vh' }}>
            <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
                <Header />
                <Cover />
                <footer class="footer-home text-white-50">
                    <p>Logistic monitoring system, by <a href="https://twitter.com/mdo" class="text-white">@Re Vera</a>.</p>
                </footer>
            </div>
        </div>
    )
}

export default Home