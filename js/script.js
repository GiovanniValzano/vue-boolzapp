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
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
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
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
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
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
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
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
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
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        currentChat: 0,
        newMsg: '',
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

                setTimeout(this.receiveMsg, 2000);
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
    }
});

