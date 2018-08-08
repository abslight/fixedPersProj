require('dotenv').config()
const massive = require('massive')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const ctrl = require('./controller')
const session = require('express-session')
const checkUserSession = require('./middleware/checkUserSession')
const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)



app.use(express.static(`${__dirname}/../build`));

const {
    CONNECTION_STRING,
    SESSION_SECRET,
    SERVER_PORT,
    STRIPE_SECRET_KEY,
    STRIPE_PUB_KEY
} = process.env



// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:
// Using Express



massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
});

app.use(bodyParser.json());
app.use(cors());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(checkUserSession)

app.post('/api/login', ctrl.loginUser)
app.post('/api/register', ctrl.registerUser)
app.get('/api/inventory', ctrl.getAll)
app.get('/api/inventory/men', ctrl.getMen)
app.get('/api/inventory/women', ctrl.getWomen)
app.post('/api/item', ctrl.create)
app.get('/api/inventory/men/shoes', ctrl.menShoes)
app.get('/api/inventory/men/tops', ctrl.menTops)
app.get('/api/inventory/men/pants', ctrl.menPants)
app.get('/api/inventory/men/hoodies', ctrl.menHoodies)
app.get('/api/inventory/men/cleats', ctrl.menCleats)
app.get('/api/inventory/men/other', ctrl.menOther)
app.get('/api/cart', ctrl.getCart)
app.delete('/api/cartItem/:id', ctrl.delete)
app.post('/api/cartItem', ctrl.addToCart)
app.put('/api/cart', ctrl.quant)
app.post('/charge', (req, res, next) => {
    const amount = req.body.total * 100
    const charge = stripe.charges.create({
        amount,
        currency: 'usd',
        source: req.body.token.id,
        description: 'event ticket'
    }, function (err, charge) {
        // if (err) return res.sendStatus(500)

        const db = req.app.get('db')
        //const { id } = req.params

        db.cart_clear([req.session.user.userid])
            .then(cart => res.status(200).send(cart))
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })

    });
})
// app.get('/auth/user', (req, res) => {
//     if (req.user) {
//         res.status(200).send(req.user)
//     } else {
//         res.status(401).send('Unauthorized')
//     }
// }
// )


const port = 3005;
app.listen(port, () => console.log(`listening on port ${port}`))