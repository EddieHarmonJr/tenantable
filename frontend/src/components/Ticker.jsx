import React, { Component } from 'react';
import '../css/Ticker.css';



class Ticker extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="marquee">
                <div>
                    <span><a href="https://www.nytimes.com/2016/02/13/nyregion/displaced-by-blast-tenants-reflect-on-landlords-arrest.html" target="_blank">Landlord Causes Blast That Kills 2 Tenants💥💥</a>{" "}<a href="https://nypost.com/2015/04/16/landlords-indicted-in-scheme-to-gut-apartments-oust-tenants/" target="_blank">2 Brothers' Illegal Scheme To Oust Tenants!</a>{" "}<a href="https://nypost.com/2018/02/09/landlord-forced-to-pay-tenant-300k-for-bedbugs-infestation/" target="_blank">💸💸💸Landlord Forced To Pay $300,000 Payout To Tenant</a>{" "}<a href="http://wlrn.org/tenants-our-building-owned-slumlord" target="_blank">'Our 🏢 Is Owned By A Slumlord' Says Tenants</a>{" "}</span>
                </div>
            </div>
            // <div className="ticker-wrap">
            //     <div className="ticker">
            //         <p class="marquee"><a href="https://www.nytimes.com/2016/02/13/nyregion/displaced-by-blast-tenants-reflect-on-landlords-arrest.html" target="_blank">Landlord Causes Blast That Kills 2 Tenants💥💥</a>{" "}<a href="https://nypost.com/2015/04/16/landlords-indicted-in-scheme-to-gut-apartments-oust-tenants/" target="_blank">2 Brothers' Illegal Scheme To Oust Tenants!</a>{" "}<a href="http://wlrn.org/tenants-our-building-owned-slumlord" target="_blank">'Our 🏢 Is Owned By A Slumlord' Says Tenants</a>{" "}<a href="https://nypost.com/2018/02/09/landlord-forced-to-pay-tenant-300k-for-bedbugs-infestation/" target="_blank">💸💸💸Landlord Forced To Pay $300,000 Payout To Tenant</a>{" "}<a href="https://www.nytimes.com/2016/02/13/nyregion/displaced-by-blast-tenants-reflect-on-landlords-arrest.html" target="_blank">Landlord Causes Blast That Kills 2 Tenants💥💥</a></p>
            //     </div>
            // </div>
        )
    }
}

export default Ticker;