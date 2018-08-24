import firebase from 'firebase'
import firebaseConfig from '@/firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true}
firestore.settings(settings)
export default {
    getReleases() {
        return new Promise((resolve, reject) => {
            var obj = {}
            firestore.collection("releases").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    var releaseId = doc.id
                    var release = doc.data()
                    obj[releaseId] = release
                });
                resolve(obj);
            });
        })
    }
}
