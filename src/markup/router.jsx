import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/index';
import About1 from './pages/about-1';
import About2 from './pages/about-2';

import ComingSoon1 from './pages/coming-soon-1';
import Contact1 from './pages/contact-1';
import Contact2 from './pages/contact-2';
import Contact3 from './pages/contact-3';
import Contact4 from './pages/contact-4';
import Error403 from './pages/error-403';
import Error404 from './pages/error-404';
import Error405 from './pages/error-405';
import Faq1 from './pages/faq-1';
import Faq2 from './pages/faq-2';
import HelpDesk from './pages/help-desk';
import PortfolioDetails from './pages/portfolio-details';
import PortfolioGrid2 from './pages/portfolio-grid-2';
import PortfolioGrid3 from './pages/portfolio-grid-3';
import PortfolioGrid4 from './pages/portfolio-grid-4';
import PrivacyPolicy from './pages/privacy-policy';
import Services1 from './pages/services-1';
import Services2 from './pages/services-2';
import ServicesDetails from './pages/services-details';

import Team1 from './pages/team-1';
import Team2 from './pages/team-2';
import Index2 from './pages/index-2';
import Index3 from './pages/index-3';
import Index4 from './pages/index-4';
import Index5 from './pages/index-5';
import Index6 from './pages/index-6';
import Index7 from './pages/index-7';
import Index8 from './pages/index-8';
import Index9 from './pages/index-9';
import Index10 from './pages/index-10';
import Index11 from './pages/index-11';
import Index12 from './pages/index-12';
import Index13 from './pages/index-13';
import Index14 from './pages/index-14';
import Index15 from './pages/index-15';
import shortButtons from './pages/shortcode-buttons';
import shortAlertBox from './pages/shortcode-alert-box';
import shortIconBoxStyles from './pages/shortcode-icon-box-styles';
import shortIconBox from './pages/shortcode-icon-box';
import shortPricingTable from './pages/shortcode-pricing-table';
import shortDividers from './pages/shortcode-dividers';
import shortListGroup from './pages/shortcode-list-group';
import shortTitleSeparators from './pages/shortcode-title-separators';
import shortImageBoxContent from './pages/shortcode-image-box-content';
import shortPagination from './pages/shortcode-pagination';
import shortCounters from './pages/shortcode-counters';
import shortTestimonials from './pages/shortcode-testimonials';
import shortImagesEffects from './pages/shortcode-images-effects';
import shopWidgets from './pages/shortcode-shop-widgets';
import shortTeam from './pages/shortcode-team';


class Router extends Component {
    render() {
        return (
            
			//<BrowserRouter>
			<BrowserRouter >
                <div className="page-wraper">
                    <Switch>
                        <Route path='/' exact component={Index} />
                        <Route path='/about-1' component={About1} />
                        <Route path='/about-2' component={About2} />
                   
						<Route path='/coming-soon-1' component={ComingSoon1} />
                        <Route path='/contact-1' component={Contact1} />
                        <Route path='/contact-2' component={Contact2} />
                        <Route path='/contact-3' component={Contact3} />
                        <Route path='/contact-4' component={Contact4} />
                        <Route path='/error-403' component={Error403} />
                        <Route path='/error-404' component={Error404} />
                        <Route path='/error-405' component={Error405} />
                        <Route path='/faq-1' component={Faq1} />
                        <Route path='/faq-2' component={Faq2} />
                        <Route path='/help-desk' component={HelpDesk} />
                        <Route path='/portfolio-details' component={PortfolioDetails} />
                        <Route path='/portfolio-grid-2' component={PortfolioGrid2} />
                        <Route path='/portfolio-grid-3' component={PortfolioGrid3} />
                        <Route path='/portfolio-grid-4' component={PortfolioGrid4} />
                        <Route path='/privacy-policy' component={PrivacyPolicy} />
                        <Route path='/services-1' component={Services1} />
                        <Route path='/services-2' component={Services2} />
                        <Route path='/services-details' component={ServicesDetails} />
                      
                        <Route path='/team-1' component={Team1} />
                        <Route path='/team-2' component={Team2} />
                        <Route path='/index-2' component={Index2} />
                        <Route path='/index-3' component={Index3} />
                        <Route path='/index-4' component={Index4} />
                        <Route path='/index-5' component={Index5} />
                        <Route path='/index-6' component={Index6} />
                        <Route path='/index-7' component={Index7} />
                        <Route path='/index-8' component={Index8} />
                        <Route path='/index-9' component={Index9} />
                        <Route path='/index-10' component={Index10} />
                        <Route path='/index-11' component={Index11} />
                        <Route path='/index-12' component={Index12} />
                        <Route path='/index-13' component={Index13} />
                        <Route path='/index-14' component={Index14} />
                        <Route path='/index-15' component={Index15} />
                        <Route path='/shortcode-buttons' component={shortButtons} />
                        <Route path='/shortcode-alert-box' component={shortAlertBox} />
                        <Route path='/shortcode-icon-box-styles' component={shortIconBoxStyles} />
                        <Route path='/shortcode-icon-box' component={shortIconBox} />
                        <Route path='/shortcode-pricing-table' component={shortPricingTable} />
                        <Route path='/shortcode-dividers' component={shortDividers} />
                        <Route path='/shortcode-list-group' component={shortListGroup} />
                        <Route path='/shortcode-title-separators' component={shortTitleSeparators} />
                        <Route path='/shortcode-image-box-content' component={shortImageBoxContent} />
                        <Route path='/shortcode-pagination' component={shortPagination} />
                        <Route path='/shortcode-counters' component={shortCounters} />
                        <Route path='/shortcode-testimonials' component={shortTestimonials} />
                        <Route path='/shortcode-images-effects' component={shortImagesEffects} />
                        <Route path='/shortcode-shop-widgets' component={shopWidgets} />
                        <Route path='/shortcode-team' component={shortTeam} />

                    </Switch>
                </div>

            </BrowserRouter>

        )
    }
}

export default Router;