const bcrypt = require('bcryptjs')
var session_id_count = 1
var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
module.exports = {
    getAll: (req, res, next) => {
        const db = req.app.get('db');
        db.get_inventory()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    getOne: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.get_one([id])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send())
    },
    create: (req, res, next) => {
        const db = req.app.get('db');
        const { imageURL, name, price, stock, cat } = req.body;
        db.create([imageURL, name, price, stock, cat])
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send())
    },
    edit: (req, res, next) => {
        const db = req.app.get('db');
        const { quantity, id } = req.params;
        db.edit([quantity, id])
            .then(() => res.status(200).send(inventory))
            .catch((err) => res.status(500).send())
    },
    delete: (req, res, next) => {
        const db = req.app.get('db');
        console.log(req.session)
        const { id } = req.params;
        db.delete([id])
            .then((cart) => res.status(200).send(cart))
            .catch((err) => {
                console.log(err)
                res.status(500).send('error')
            })
    },
    getMen: (req, res, next) => {
        const db = req.app.get('db');
        db.men()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    getWomen: (req, res, next) => {
        const db = req.app.get('db');
        db.women()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    womenShoes: (req, res, next) => {
        const db = req.app.get('db');
        db.womenshoes()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    womenTops: (req, res, next) => {
        const db = req.app.get('db');
        db.womentops()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    womenPants: (req, res, next) => {
        const db = req.app.get('db');
        db.womenpants()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    womenHoodies: (req, res, next) => {
        const db = req.app.get('db');
        db.womenhoodies()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    womenCleats: (req, res, next) => {
        const db = req.app.get('db');
        db.womencleats()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    womenOther: (req, res, next) => {
        const db = req.app.get('db');
        db.womenother()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    menOther: (req, res, next) => {
        const db = req.app.get('db');
        db.menother()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    menShoes: (req, res, next) => {
        const db = req.app.get('db');
        db.menshoes()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    menTops: (req, res, next) => {
        const db = req.app.get('db');
        db.mentops()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    menHoodies: (req, res, next) => {
        const db = req.app.get('db');
        db.menhoodies()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    menCleats: (req, res, next) => {
        const db = req.app.get('db');
        db.mencleats()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    menPants: (req, res, next) => {
        const db = req.app.get('db');
        db.menpants()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    allShoes: (req, res, next) => {
        const db = req.app.get('db');
        db.shoes()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    allTops: (req, res, next) => {
        const db = req.app.get('db');
        db.tops()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    allPants: (req, res, next) => {
        const db = req.app.get('db');
        db.pants()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    allHoodies: (req, res, next) => {
        const db = req.app.get('db');
        db.hoodies()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    allCleats: (req, res, next) => {
        const db = req.app.get('db');
        db.cleats()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    allOther: (req, res, next) => {
        const db = req.app.get('db');
        db.other()
            .then((inventory) => res.status(200).send(inventory))
            .catch(() => res.status(500).send());
    },
    registerUser: (req, res) => {
        const { email, password } = req.body
        const db = req.app.get('db')
        db.checkEmail([email]).then(user => {
            console.log(user)
            if (user.length !== 0) {
                res.status(200).send('email taken. Try another.')
            } else {
                const salt = bcrypt.genSaltSync(10)
                console.log('salt: ', salt)
                const hash = bcrypt.hashSync(password, salt)
                console.log('hash: ', hash)

                db.registerUser([email, hash]).then((user) => {
                    req.session.user.session_id = session_id_count
                    session_id_count++
                    req.session.user.userid = user[0].userid
                    req.session.user.email = user[0].email
                    console.log('registered: ', req.session)
                    res.status(200).send(user)
                })
            }
        })
    },
    loginUser: (req, res) => {
        const { email, password } = req.body
        const db = req.app.get('db')
        db.checkEmail([email]).then(user => {
            if (user.length !== 0) {
                const validPassword = bcrypt.compareSync(password, user[0].password)
                if (validPassword) {
                    req.session.user.session_id = session_id_count
                    session_id_count++
                    req.session.user.userid = user[0].userid
                    req.session.user.email = user[0].email
                    res.status(200).send(user)
                    console.log(req.session.user)
                } else {
                    res.status(200).send('Invalid Password')
                }
            } else {
                res.status(200).send('User does not exist')
            }
        })
    },
    logout: (req, res, next) => {

    },
    addToCart: (req, res, next) => {
        const db = req.app.get('db');
        const { productid, userid } = req.body.cartItem
        db.addToCart([userid, productid])
            .then((cart) => res.status(200).send(cart)
                .catch(() => res.status(500).send())
            )
    },
    getCart: (req, res, next) => {
        const db = req.app.get('db');
        db.view_cart([req.session.user.userid])
            .then((cart) => res.status(200).send(cart))
            .catch(() => res.status(500).send());
    },
    // "stripe": (req, res, next) => {
    //     //convert amount to pennies
    //     // console.log(req)
    //     // console.log(req.session)

    //     const amountArray = req.body.amount.toString().split('');
    //     const pennies = [];
    //     for (var i = 0; i < amountArray.length; i++) {
    //         if (amountArray[i] === ".") {
    //             if (typeof amountArray[i + 1] === "string") {
    //                 pennies.push(amountArray[i + 1]);
    //             } else {
    //                 pennies.push("0");
    //             }
    //             if (typeof amountArray[i + 2] === "string") {
    //                 pennies.push(amountArray[i + 2]);
    //             } else {
    //                 pennies.push("0");
    //             }
    //             break;
    //         } else {
    //             pennies.push(amountArray[i])
    //         }
    //     }
    //     const convertedAmt = parseInt(pennies.join(''));

    //     const charge = stripe.charges.create({
    //         amount: convertedAmt, // amount in cents, again
    //         currency: 'usd',
    //         source: req.body.token.id,
    //         description: 'Test charge from react app'
    //     }, function (err, charge) {
    //         if (err) return res.sendStatus(500)
    //         console.log(req.params)
    //         const db = req.app.get('db');
    //         // const { id } = req.params
    //         //  const { user_id } = req.user
    //         db.cart_clear([req.session.user.usersid])
    //             .then(cart => res.status(200).send(cart))

    //         // if (err && err.type === 'StripeCardError') {
    //         //   // The card has been declined
    //         // }
    //     });
    // },
    quant: (req, res) => {
        const { quantity, productid } = req.body

        const db = req.app.get('db');
        console.log('console log:', req.params, req.body)


        db.update_quantity([quantity, req.session.user.userid, productid])
            .then(cart => {
                console.log(cart)
                res.status(200).send(cart)
            })
            .catch((err) => {
                console.log(err)
                res.status(500).send('error')
            });
    }
    
    }

