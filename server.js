const createError = require('http-errors');
const express = require('express');
const process = require('process');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = express.Router();
const googledocsapi = require('./middleware/googledocs.api.middleware');
const firebase = require('@firebase/app').default;
const firestore = require('@firebase/firestore');
const fireauth = require('@firebase/auth');
const admin = require('firebase-admin');
const { Readability } = require('@mozilla/readability');
const automate = require('./automate');
const sample = require('./automate/sample');

{
    // Go to:
    // https://console.firebase.google.com/../../project/<project-name>-<hash>/settings/serviceaccounts/adminsdk
    // Service Accounts Tab
    // Generate Key

    // Fetch the service account key JSON file contents
    const serviceAccount = JSON.parse(process.env.serviceAccountKey);
    // Initialize the app with a service account, granting admin privileges
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://charlesaugustusmagnussen-cf42a.firebaseio.com"
    });
    
    // Need to call: setPersistence(firebase.auth.Auth.Persistence.NONE);
    console.log("Firebase DB Admin mode initialized");

    // As an admin, the app has access to read and write all data, regardless of Security Rules
    const db = admin.database();

    var ref;
    //ref = db.ref("public/default/articles");
    //ref = db.ref("server/saving-data/fireblog/");
    ref = db.ref("/");
    
    // Attach an asynchronous callback to read the data at our posts reference
    ref.orderByKey().limitToLast(2).on("value", function(snapshot) {
        console.log('snapshot::', snapshot.val());
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
  
}
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(googledocsapi);


app.get('/add?:url', async (req, res) => {
    const db = admin.database();
    console.clear();
    const { query: { url } } = req;
    const key = Buffer.from(url).toString('base64');
    const ref = db.ref("public/default/articles");
    
    console.log(`retrieving HASH#: ${key}::${url}`);

    //let result = checkIfExists(ref, key);
    //console.log(`checkIfExists::${Boolean(result)}`);
    //console.log(result);

    //let article = sample;
    let article = await automate.load([url]);
    console.log(`${article.excerpt} ...has been fully loaded`);
    ref.push(article);
    
    db.ref("public/default/hashes").push({ key, title: article.title });
    
    res.status(200).json(await checkValue(ref, res));
});

const checkIfExists = async (ref, key) => {
    return ref.equalTo(key).once("value", e => e.val());
}
const checkValue = async (ref, res) => {
    let val = await ref.orderByKey().limitToLast(1).once("value", e => e.val());
    res.status(200).json(val);
    return val;
}

app.post('/archive-article', function(req, res) {
    const db = admin.database();
    const ref = db.ref("public/default/articles");
    let obj = req.something;
    ref.push(obj);
    ref.orderByKey().limitToLast(1).once("value", (snapshot) => {
        res.status(200).json(snapshot.val());
    }, (errorObject) => {
        res.status(errorObject.code).json(errorObject);
    });
});

app.get('/aaa', function(req, res) {
    const db = admin.database();
    //const ref = db.ref("server/saving-data/fireblog/");
    const ref = db.ref("/");
    ref.orderByKey().once("value", (snapshot) => {
        res.status(200).json(snapshot.val());
    }, (errorObject) => {
        res.status(errorObject.code).json(errorObject);
    });
});


app.get('/bbb', function(req, res) {
    var ref = db.ref("public/default/articles");
    ref.set({
        alanisawesome: {
            date_of_birth: "June 23, 1912",
            full_name: "Alan Turing"
        }
    });
});

app.get('/ccc', function(req, res) {
    const db = admin.database();
    const ref = db.ref("server/saving-data/fireblog/");
    
    const date_of_birth = (new Date()).toISOString();
    const full_name = 'Random_Name__' + Math.round(Math.random() * 1000000);
    let obj = {};
    obj [full_name] = {
        date_of_birth,
        full_name
    };
    ref.push(obj);
    ref.orderByKey().limitToLast(1).once("value", (snapshot) => {
        res.status(200).json(snapshot.val());
    }, (errorObject) => {
        res.status(errorObject.code).json(errorObject);
    });
});








// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // next(createError(404));
  res.status(404).send("NOT FOUND!!!");
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
