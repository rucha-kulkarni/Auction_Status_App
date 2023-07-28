const container = document.getElementById("container");

async function fetchCards() {
    let url = "https://gauravgitacc.github.io/postAppData/auctionData.json";
    const response = await fetch(url);
    const data = await response.json();
    appendData(data);
}

function appendData(cardslist){
    cardslist.forEach((card) => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `        
            <div class="top">
                <div class="left">
                    <span class="badge ${card.status.toLowerCase()}">${card.status}</span>
                    <span class="case-number">${card.caseNumber}</span>
                </div>
                <div class="right">${card.date}</div>
            </div>
            <div class="bottom">
                <b>${card.fromLocation}</b>
                <span>${card.toLocation}</span>
                <span class="price">${card.fare}</span>
            </div>`;
        container.appendChild(div);
    })
}
fetchCards();