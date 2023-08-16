import React from 'react';

import Header from '../component/Header';
import LeftSidebar from '../component/Sidebar';
import Footer from '../component/FooterBar'
import { Outlet } from 'react-router-dom';

const PageLayout = () => {
    return (
        <div className="wrapper">
            
            <div className="header"><Header /></div>
            <div className="content">
                <aside className="left-col">
                    {/* <div class="left-col-header">
                        <div class="search-input-wrapper">
                            <input type="text" placeholder="Search" />
                        </div>
                        <div class="search-button-wrapper">
                            <button type="button" >Go</button>
                        </div>
                    </div> */}
                    <div className="left-col-content">
                        <LeftSidebar />
                    </div>
                </aside>
                <main className="right-col"><Outlet /></main>
            </div>
            <div className="footer"><Footer /></div>
        </div>
    )
}

export default PageLayout
