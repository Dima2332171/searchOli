import Alpine from 'alpinejs'

Alpine.store('darkMode',{
    on: false,

    toggle(){
        this.on = !this.on
        if(this.on){
            document.documentElement.classList.add('dark');
        }
        else{
            document.documentElement.classList.remove('dark');
        }
    }
})

function loadCards(){
    return{
        search: "",
        myForData: cardData,
        get filteredCards(){
            if(this.search===""){
                return this.myForData
            }
            return this.myForData.filter((item)=>{
                return item.title.startsWith(this.search)
            })
        }
    }
}

let cardData = [
    {
        id: '1',
        title:'dsds'
    },
    {
        id: '1',
        title:'dsds'
    },
    {
        id: '1',
        title:'dsds'
    },
    {
        id: '1',
        title:'dsds'
    },

]

window.Alpine = Alpine;

Alpine.start()