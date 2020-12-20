import data from "../data.json";

const intState = {
    item: data.items,
    onlyPastry: false,
    sort: "latest",
    size: "",
    count: 0,
    order: []
}

const initQuant = intState.item.map(a => a.quant);
const reducer = (state = intState, action) => {
    const newState = { ...state };
    const sortState = ((filterState, sort) => {
        let itrObj;
        if(filterState.item){
            itrObj = filterState.item;
        } else {
            itrObj =filterState;
        }
        return itrObj.slice().sort((a, b) =>
            sort === "lowest" ?
                    a.price > b.price ? 1 : -1 :
                    sort === "highest" ?
                        a.price < b.price ? 1 : -1 :
                        a.id < b.id ? 1 : -1
        ) 
    });
    //const full = newState.item.filter( it => it.quant===10  );
    if (action.type === "UPDATE") {
        const itemName = newState.item[action.value.btnid].name;
        let itmIndex = action.value.btnid;
        let invQuantOrd = newState.item.find(it => it.id === itmIndex).quant;
        let arg = action.value.val;
        let newelem = true;
        const orderObj = (() => {
            let ordArr = newState.order;
            return function () {
                if (ordArr.length === 0) {
                    newelem = true;
                }
                ordArr.filter(el => {
                    if (el.oid === itmIndex) {
                        if ((invQuantOrd === 0 && arg === -1) || (invQuantOrd > 0)) {
                            el.cartQuant += arg;
                        }
                        newelem = false;
                    }
                });

                if (newelem === true && arg >= 1) {
                    ordArr.splice(itmIndex, 0, { oid: itmIndex, cartQuant: arg, itmName: itemName });
                }
                if (arg === -1 && newState.order.some(ut => ut.oid === itmIndex && ut.cartQuant === 0)) {
                    ordArr.splice(ordArr.findIndex(item => item.oid === itmIndex), 1);
                }
                return ordArr;
            }
        })();
        const calculateCount = (() => {
            let counter = newState.count;
            return function () {
                counter = newState.order.reduce((sum, it) => sum + it.cartQuant, 0);
                return counter;
            }
        })();
        const updateInventory = (() => {
            let itemInv = newState.item;
            return function () {
                itemInv.filter(el => {
                    if (el.id === itmIndex) {
                        if ((el.quant === 0 && arg === -1) ||
                            (el.quant === initQuant[itmIndex] && arg === 1) ||
                            (el.quant < initQuant[itmIndex] && el.quant > 0)) {
                            el.quant -= arg;
                        }
                    }
                });
                return itemInv;
            }

        })();
        return {
            ...newState,
            order: orderObj(),
            item: updateInventory(),
            count: calculateCount()
        }
    } else if (action.type === "SORT") {
        const sort = action.value.target.value;
        return {
            ...newState,
            sort: sort,
            item: sortState(newState, sort)
        }

    } else if (action.type === "FILTER") {
        const filter = action.value.target.value;
        let displayItem;
        if (filter === "") {
            displayItem = data.items
        } else {
            displayItem = data.items.filter(
                i => i.availableSizes.indexOf(filter) !== -1
            )
        }
        return {
            ...newState,
            size: filter,
            item: sortState(displayItem, newState.sort)
        }
    }
    return newState;
}



//const store = createStore(reducer);

export default reducer;