const express = require('express');
const {Router}=require('express');
const { async } = require('rxjs');
const router =Router();

const News = require('../models/News');
const jwt =require('jsonwebtoken');

