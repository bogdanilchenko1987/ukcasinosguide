import {offers} from "./offers.js";


const offersList = document.getElementById("offers_list");

const parsePayments = (arr) => {
    let paymentsMarkup = "";

    for (let payment of arr) {
        paymentsMarkup += `<img src="./assets/img/payments/${payment}.png" alt="pay-icon"/>`;
    }

    return paymentsMarkup
}

if (offers && offers.length > 0)  {


    const offersByOrder = offers.sort((a, b) => a.order - b.order);
    const bestOffer = offersByOrder[0];

    for (let offer of offersByOrder) {
        const formattedName = offer.name.charAt(0).toUpperCase() + offer.name.slice(1);

        let payments = parsePayments(offer.payments)

        const mainClass = offer.order % 2 !== 0 ? "casino-item trans" : "casino-item";
        const firstClass = offer.order===1?'first':'';

        const ribbon = offer.order ===1  
            ? `<div class="best"><img src="./assets/img/best.png" alt="best"></div>`
            : ``|| offer.order ===2  
            ? `<div class="best"><img src="./assets/img/hotPl.png" alt="best"></div>`
            : ``|| offer.order ===3  
            ? `<div class="best"><img src="./assets/img/topPl.png" alt="best"></div>`
            : ``
        

            const startsPick = offer.rating <9.5  
            ? `<img src="./assets/img/stars4.svg" class="starsImg" alt="stars">`
            : `<img src="./assets/img/stars5.svg" class="starsImg" alt="stars">` 
        const markup = `
            
            <li class="${mainClass} ${firstClass}" id="${offer.name}">
                ${ribbon}
                <div class="mobileLeft">
            
                    <div class="numberItem">
                        <h2 class="numberText">${offer.order}</h2>
                    </div>
            
                    <a class="offerLogoLink" target="_blank" href=${offer.ref_link}>
                        <img src="${offer.logo}" alt="${offer.name}" class="${offer.name}"/>
                    </a>
            
                    <div class="price-block">
                        <h3 class="grey-title">${offer.prebonus}</h3>
                        <h1 class="bonusText">${offer.bonus}</h1>
                        <h3 class="grey-title">${offer.freeSpins}</h3>
                    </div>
                    
                    <img src="./assets/img/lineItem.png" alt="line" class="itemLine"/>
            
                    <div class="rating-wrapper">
                        <p class="ratingNumber">${offer.rating}</p>
            
                        ${startsPick}
            
                        <span class="votesText">(${offer.votes}) User Votes</span>
                    </div>
            
                    <img src="./assets/img/lineItem.png" alt="line" class="itemLine"/>
            
                    <div class="payments">
                        ${payments}
                    </div>
            
                    <img src="./assets/img/lineItem.png" alt="line" class="itemLine"/>
            
                </div>
            
                <div class="mobileRight">
                    <div class="price-block hidden">
                        <h3 class="grey-title">${offer.prebonus}</h3>
                        <h1 class="bonusText">${offer.bonus}</h1>
                        <h3 class="grey-title">${offer.freeSpins}</h3>
                    </div>
                    <div class="buttonWrap">
                        <h1 class="buttonWrappLink">
                            <a href="${offer.ref_link}" class="buttonLink">
                                Get Bonus
                            </a>
                        </h1>
            
                        <a href="${offer.ref_link}" class="visitLink">Visit ${offer.formattedName}</a>
            
                    </div>
            
                </div>


            </li>
        `;

        offersList.insertAdjacentHTML("beforeend", markup)
        
    }


}
