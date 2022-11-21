const app = new Vue({
    el: '#root',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '/Users/mariasofia/Desktop/Esercizi/vue-boolzapp/img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        menu: false,
                    }
                ],
            },
            
            {
                name: 'Alessandro L.',
                avatar: '/Users/mariasofia/Desktop/Esercizi/vue-boolzapp/img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        menu: false,
                    }
                ],
            },
        
            {
                name: 'Claudia',
                avatar: '/Users/mariasofia/Desktop/Esercizi/vue-boolzapp/img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        menu: false,
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        menu: false,
                    }
                ],
            },
        
            {
                name: 'Federico',
                avatar: '/Users/mariasofia/Desktop/Esercizi/vue-boolzapp/img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        menu: false,
                    }
                ],
            },
        
            {
                name: 'Davide',
                avatar: '/Users/mariasofia/Desktop/Esercizi/vue-boolzapp/img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        menu: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        menu: false,
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        menu: false,
                    }
                ],
            }
        ],
        currentChat: 0,
        newMsg: '',
        research: '',
    },
    methods: {
        selectedChat(index){
            this.currentChat = index;
        },
        sendMsg(){
            if(this.newMsg.trim()) {
                let newObjMsg = {
                    date: 'ciao',
                    message: this.newMsg.trim(),
                    status: 'sent',
                }
                this.contacts[this.currentChat].messages.push(newObjMsg);
                this.newMsg = '';

                setTimeout(this.receiveMsg, 1000);
            }
        },
        receiveMsg(){
            let newObjMsg = {
                date: 'ciao',
                message: 'Ok',
                status: 'received',
            }
            this.contacts[this.currentChat].messages.push(newObjMsg);
        },
        searchContact(){
            for(let i=0; i<this.contacts.length; i++){
                if(this.contacts[i].name.toLowerCase().includes(this.research.toLowerCase())){
                    this.contacts[i].visible = true
                }
                else{
                    this.contacts[i].visible = false
                }
            }
        },
        openMenu(indexdue){
            this.contacts[this.currentChat].messages[indexdue].menu = !this.contacts[this.currentChat].messages[indexdue].menu
        },
        deleteMsg(indexdue){
            this.contacts[this.currentChat].messages.splice(indexdue, 1)
        },
    }
});

