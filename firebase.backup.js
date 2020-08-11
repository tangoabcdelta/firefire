{
    const firebaseConfig = JSON.parse(process.env.firebaseConfig);
    const defaultProject = firebase.initializeApp(firebaseConfig);
    const store = firebase.firestore();
    // only `none` persistence is supported in a node.js environment
    let promise = firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
}

    
{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
        } else {
            // No user is signed in.
        }
    });

    const user = firebase.auth().currentUser;
    
    if (user) {
        // User is signed in.
    } else {
        // No user is signed in.
    }
}



await page.goto('https://example.com');
await page.screenshot({
    path: 'example.png'
});

await page.goto('http://congenial-doodle.herokuapp.com/');
await page.screenshot({
    path: 'congenial-doodle.herokuapp.png'
});
