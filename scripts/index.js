
let bagItems;
onLoad();

function onLoad(){
    let bagitemStr = localStorage.getItem('bagitems');
    bagItems = bagitemStr ? JSON.parse(bagitemStr) : [];
    displayItemsOnHomepage();
    displayBagIcon();

}
function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagitems' , JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    }
    else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHomepage(){
    let itemscontainerElement = document.querySelector('.items_container');
    if(!itemscontainerElement) return;

let innerHTML = '';
items.forEach(item =>{
    innerHTML +=  `
            <div class="item_container">
                    <img class="item_image" src="${item.image}" alt=" item image">
                    <div class="rating">${item.rating.stars}⭐|${item.rating.count}</div>
                    <div class="company_name">${item.company}</div>
                    <div class="item_name">${item.item_name}</div>
                <div class="price">
                    <span class="current_price">Rs ${item.current_price}</span>
                    <span class="original_price">Rs ${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                    <button onclick="addToBag(${item.id})" class="btn_add_bag">Add to Bag</button>
            </div>
`;
});

itemscontainerElement.innerHTML = innerHTML;
}