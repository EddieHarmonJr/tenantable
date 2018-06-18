import React, { Component } from 'react';
import '../css/FAQ.css'
import Ticker from './Ticker';

class FAQ extends Component {
    constructor() {
        super();
    }

    //This allows javascript to run inside of react (in a manner of speaking...)
    componentDidMount() {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }

    render() {
        return (
            <div>

                <h1 id="faq">Frequently Asked Questions</h1>

                <button class="accordion"><h2>How can I be sure that I can trust Tenantable?</h2></button>
                <div class="panel">
                    <p>You can rest assured that Tenantable is a trustworthy platform because we verify all users. Although we allow account holders to utilize their own discretion when determining how much personal information they publicize on the platform, we still take great lengths to verify the varacity of the claims made on Tenantable by using "proof photos" and allowing the landlords of implicated propertie to give responses to tenant claims so that it is not only a one-way conversation.</p>
                </div>

                <button class="accordion"><h2>How are users verified?</h2></button>
                <div class="panel">
                    <p>We verify users through several channels.</p>
                    <p>1) We use a form of payment (debit/credit card) to verify the account hoder is a real person. We debit 1&cent; from the account and refund it immediately once a ping to a legitimate financial institution goes through. Many instituitons do this (such as AirBnB, for example).</p>
                    <p>2) We also verify that a tenant actually resides at the residence in question via utility bills that states that they actually live in the building/unit and are a real rent-payer, not simply making unsubstantiated claims.</p>
                </div>

                <button class="accordion"><h2>What are the benefits of Tenantable?</h2></button>
                <div class="panel">
                    <p>1) Tenantable allows anyone with an account to speak directly with the tenants who live where they are seeking to reside, allowing access to first-hand, authentic, unbiased reviews and feedback that they cannot attain anywhere else. Gone are the days of waiting outside a building and awkwardly waiting for tenants to come in and out of the building to ask starngers questions. Tenantable provides a safe, friendly, mutually agreed upon platform for these dialogues to occur.</p>
                    <p>2) In addition, if the tenant so desires, they can provide first-hand access to the building and even provide a tour of their home if they so wish.</p>
                    <p>3) Prospective renters can get proof from those who live there concerning the safety, cleanliness, and fairness of the building and its condition, without having to rely on only one source (the landlord) for intel about the property that may be fabricated for financial gain.</p>
                </div>

                <button class="accordion"><h2>What about privacy? I don't want strangers to know where I live...</h2></button>
                <div class="panel">
                    <p>1) When creating an account, the user has sole discretion on whether they choose to divulge personal information. You are not required to share a picture with your likeness, your specific unit number, your phone number, and your email can be hidden. You do not have to use your real/full name. Screen names will suffice.</p>
                    <p>2) We understand that telling the truth about your property may not make those with a vested financial interest very happy, which is why you are not required to give out specific information that will identify you uniquely. We will verify that you are an actual resident, and once confirmation clears, you can create an account on the platform.</p>
                    <p>3) You may even wish to provide walk-through tours of your building/unit to assist intrested parties. You are under <u>NO obligation</u> to do so by using this platform. It is at your sole discretion and at your own risk to do so.</p>
                </div>



                {/*
                <h2>How can I be sure that I can trust Tenantable?</h2>
                <h2>How are users verified?</h2>
                <h2>What are the benefits of Tenantable?</h2> */}


                <div>
                    <Ticker />
                </div>
            </div>
        )
    }
}

export default FAQ;