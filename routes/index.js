const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').config();





// Home Page
router.get('/index', (req, res) => res.render('index', { page: req.url }));
router.get('/', (req, res) => res.render('index', { page: req.url }));


router.get('/job-detail', (req, res) => res.render('job-detail', { page: req.url }));
router.get('/faq', (req, res) => res.render('faq', { page: req.url }));
router.get('/jobs', (req, res) => res.render('jobs', { page: req.url }));
router.get('/employers', (req, res) => res.render('employers', { page: req.url }));
router.get('/candidates', (req, res) => res.render('candidates', { page: req.url }));
router.get('/about', (req, res) => res.render('about', { page: req.url }));
router.get('/pricing', (req, res) => res.render('pricing', { page: req.url }));
router.get('/contactus', (req, res) => res.render('contactus', { page: req.url }));
router.get('/dash-post-job', (req, res) => res.render('dash-post-job', { page: req.url }));
router.get('/dash-messages', (req, res) => res.render('dash-messages', { page: req.url }));
router.get('/dash-dashboard', (req, res) => res.render('dash-dashboard', { page: req.url }));
router.get('/dash-myprofile', (req, res) => res.render('dash-myprofile', { page: req.url }));


router.get('/employer-ArtistreStudio', (req, res) => res.render('employer-ArtistreStudio', { page: req.url }));
router.get('/employer-HerbalLtd', (req, res) => res.render('employer-HerbalLtd', { page: req.url }));
router.get('/employer-ThewebmaxPVT', (req, res) => res.render('employer-ThewebmaxPVT', { page: req.url }));
router.get('/employer-WinsDevelopers', (req, res) => res.render('employer-WinsDevelopers', { page: req.url }));


router.get('/c-RandallWarren', (req, res) => res.render('c-RandallWarren', { page: req.url }));
router.get('/c-RandallHenderson', (req, res) => res.render('c-RandallHenderson', { page: req.url }));
router.get('/c-RalphJohnson', (req, res) => res.render('c-RalphJohnson', { page: req.url }));
router.get('/c-PeterHawkins', (req, res) => res.render('c-PeterHawkins', { page: req.url }));
router.get('/c-MichaelMontgomery', (req, res) => res.render('c-MichaelMontgomery', { page: req.url }));
router.get('/c-ChristinaFischer', (req, res) => res.render('c-ChristinaFischer', { page: req.url }));

module.exports = router;