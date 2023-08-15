import React from 'react';

import Header from '../component/Header';
import LeftSidebar from '../component/Sidebar';
import Footer from '../component/FooterBar'
import { Outlet } from 'react-router-dom';

const PageLayout = () => {
    return (
        <div class="wrapper">
            
            <div class="header"><Header /></div>
            <div class="content">
                <aside class="left-col">
                    {/* <div class="left-col-header">
                        <div class="search-input-wrapper">
                            <input type="text" placeholder="Search" />
                        </div>
                        <div class="search-button-wrapper">
                            <button type="button" >Go</button>
                        </div>
                    </div> */}
                    <div class="left-col-content">
                        <LeftSidebar />
                    </div>
                </aside>
                <main class="right-col"><Outlet /></main>
            </div>
            <div class="footer"><Footer /></div>
        </div>
    )
}

export default PageLayout
