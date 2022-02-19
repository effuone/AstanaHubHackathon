import React from 'react'
import Map from '../components/Map';
import Monitor from '../components/Monitor';
import { FiHome } from 'react-icons/fi'
import { BiMapPin } from 'react-icons/bi';
import { MdProductionQuantityLimits } from 'react-icons/md'
import { RiGroupLine } from 'react-icons/ri'
import Graph from '../components/Graph';
import BarGraph from '../components/BarGraph';
import Map2 from '../components/Map2';
import Reviews from '../components/Reviews';

function Dashboard2() {
    return (
        <div style={{ fontSize: '.875rem' }}>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Re Vera</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <a className="nav-link px-3" href="#">Sign out</a>
                    </div>
                </div>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link d-flex active" aria-current="page" href="#" id="pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#pills-dashboard" type="button" role="tab" aria-controls="pills-dashboard" aria-selected="true">
                                        <FiHome style={{ marginRight: '5px', marginTop: '4px' }} />
                                        Dashboard
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex" href="#" id="pills-map-tab" data-bs-toggle="pill" data-bs-target="#pills-map" type="button" role="tab" aria-controls="pills-map" aria-selected="false">
                                        <BiMapPin style={{ marginRight: '5px', marginTop: '4px' }} />
                                        Monitoring
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex" href="#" id="pills-users-tab" data-bs-toggle="pill" data-bs-target="#pills-users" type="button" role="tab" aria-controls="pills-users" aria-selected="false">
                                        <RiGroupLine style={{ marginRight: '5px', marginTop: '4px' }} />
                                        Customers
                                    </a>
                                </li>
                            </ul>

                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Saved reports</span>
                                <a className="link-secondary" href="#" aria-label="Add a new report">
                                    <span data-feather="plus-circle"></span>
                                </a>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Current month
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Last quarter
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Social engagement
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Year-end sale
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className='tab-content p-2' id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-dashboard" role="tabpanel" aria-labelledby="pills-dashboard-tab">
                                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                    <h1 className="h2">Dashboard</h1>
                                    <div className="btn-toolbar mb-2 mb-md-0">
                                        <div className="btn-group me-2">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                        </div>
                                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                            <span data-feather="calendar"></span>
                                            This week
                                        </button>
                                    </div>
                                </div>
                                <Graph />
                                <h6 className='mt-5 mb-2'>Топ компаний по доставке</h6>
                                <BarGraph />
                            </div>
                            <div class="tab-pane fade" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab">
                                <div className="monitor-title border-bottom">
                                    <h1 className="h2">Monitoring</h1>
                                </div>
                                <Map />
                                <div className='monitor'>
                                    <Monitor />
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-users" role="tabpanel" aria-labelledby="pills-users-tab">
                                <div className="d-flex flex-column justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                                    <h1 className="h2">Customers</h1>
                                    <h6 className="mt-4 mb-3">Отзывы</h6>
                                    <Reviews/>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Dashboard2