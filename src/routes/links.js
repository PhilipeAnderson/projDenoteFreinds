const express = require('express')
const router = express.Router()

const pool = require('../database')

router.get('/add', (req, res) => {
    res.render('links/add')
})

router.post('/add', async(req, res) => {
    const { title, url, description } = req.body
    const newLink  = {
        title,
        url,
        description
    }
    await pool.query("INSERT INTO links SET?", [newLink])
    req.flash('success', 'Sugestão criada com sucesso')
    res.redirect('/links')
})

router.get('/', async(req, res) => {
    const links = await pool.query("SELECT * FROM links")
    res.render('links/list', { links })
})

router.get('/delete/:id', async(req,res) => {
    const { id } = req.params
    await pool.query("DELETE FROM links WHERE ID = ?", [id])
    req.flash('success', 'Sugrstão excluída com sucesso')
    res.redirect('/links')
})

router.get('/edit/:id', async(req,res) => {
    const { id } = req.params
    const links = await pool.query("SELECT * FROM links WHERE ID = ?", [id])
    res.render('links/edit', {link: links[0]})
})

router.post('/edit/:id', async(req, res) => {
    const { id } = req.params
    const {title, url, description} = req.body
    const newLink = {
        title,
        url,
        description
    }
    await pool.query("UPDATE links SET ? WHERE ID = ?", [newLink, id])
    req.flash('success', 'Sugestão editada com sucesso')
    res.redirect('/links')
})

/* HOME APPLICATION */
router.get('/admin', (req, res) => {
    res.render('links/admin')
})

router.get('/home', (req, res) => {
    res.render('links/home')
})

router.get('/contact', (req, res) => {
    res.render('links/contact')
})

/* AUTHENTICATION */
router.get('/admin', (req, res) => {
    res.render('links/admin')
})

router.post('/admin', async(req, res) => {
    console.log(req.body)

    // const { usernameUser, passwordUser } = req.body
    // const newUser = {
    //     usernameUser,
    //     passwordUser
    // }
    // await pool.query("INSERT INTO users SET?", [newUser])
    // req.flash('success', 'Usuário criada com sucesso')
    // res.redirect('/links')
}) 

module.exports = router