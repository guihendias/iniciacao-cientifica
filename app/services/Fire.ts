import {Injectable} from '@angular/core';

declare var firebase: any;

@Injectable()
export class Fire {
    user: any = {};
    sales: any = [];
    stores: any = [];
    products: any = [];

    constructor() {
        var config = {
            apiKey: "AIzaSyArpxJgHwlNkcuKqmcnyyCP-m-M71dWj1U",
            authDomain: "iniciacao-cientifica.firebaseapp.com",
            databaseURL: "https://iniciacao-cientifica.firebaseio.com",
            storageBucket: "iniciacao-cientifica.appspot.com",
        };

        firebase.initializeApp(config);

        this.attResults();
    }

    login(token: string, successCallback, errorCallback) {
        let credential = firebase.auth.FacebookAuthProvider.credential(token);

        firebase.auth().signInWithCredential(credential).then(response => {
            this.setUser(token, response.providerData[0]);
            successCallback();
        }, error => {
            errorCallback(error);
        })
    }

    getDB() {
        return firebase;
    }

    attResults() {
        let sales = [];
        let stores = [];
        let products = [];

        firebase.database().ref('sale').orderByKey().on('child_added', function(snapshot) {
            sales.push({
                name: snapshot.val().name,
                price: snapshot.val().price,
                description: snapshot.val().description,
                thumbnail: snapshot.val().thumbnail,
                store: snapshot.val().store,
                product: snapshot.val().product
            })
        });
        this.sales = sales;

        firebase.database().ref('store').orderByKey().on('child_added', function(snapstore) {
            stores.push({
                name: snapstore.val().name,
                lat: snapstore.val().lat,
                lng: snapstore.val().lng,
                tel: snapstore.val().tel
            });
        });

        this.stores = stores;

        firebase.database().ref('product').orderByKey().on('child_added', function(snapproduct) {
            products.push({
                name: snapproduct.val().name
            });
        });

        this.products = products;

    }
    private setUser(token: string, authData: any) {
        this.user.name = authData.displayName;
        this.user.photo = authData.photoURL;
        this.user.id = authData.uid;
        this.user.token = token;

        this.saveUser();
    }

    private saveUser() {
        this.getDB().database().ref('users').child(this.user.id).set({
            name: this.user.name,
            photo: this.user.photo,
            id: this.user.id
        });
    }

    getSales() {
        this.attResults();
        return this.sales;
    }

    getStores() {
        this.attResults();
        return this.stores;
    }

    getProducts() {
        this.attResults();
        return this.products;
    }

    sendMessage(friend, message) {
        let ref = this.getDB().database().ref();

        return ref.child('messages').child(friend.id).push().set({
            senderId: this.user.id,
            senderName: this.user.name,
            message: message,
            read: false,
            date: new Date()
        })
    }

    getMessage(successCallback) {
        let ref = this.getDB().database().ref('messages').child(this.user.id);

        ref.orderByChild('senderId').equalTo(this.user.id).on('child_added'), (snapshot) => {
            let message = snapshot.val();

            successCallback(message);
        }
    }
}
