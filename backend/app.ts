import { Process } from './types/index';
declare var process: Process

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

import { Express, Request, Response } from 'express';

const port = process.env.PORT || 8000
import express from "express";
const app: Express = express()
import path from "path";
const ejsMate = require('ejs-mate')
import mongoose from "mongoose";
import Joi from "joi";
import session from "express-session";
import flash from "connect-flash";
import methodOverride from "method-override";
import passport from "passport";
import LocalStrategy from "passport-local";
import helmet from "helmet";
import MongoStore from "connect-mongo";
import { RateLimiterMongo } from "rate-limiter-flexible";
import QRCode from "qrcode";
import speakeasy from "speakeasy";
import multer from "multer";// multer je middleware pro files
import os from "os";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bodyparser from "body-parser";
import cryptoLib from "crypto";
import fs from "fs";
import axios from "axios";
import Redis from "redis";

import catchAsync from "./utils/catchasync";
// const { cloudinary } = require('./cloudinary/index')
// const { storageCampImg } = require('./cloudinary/index')

const dbUrl = process.env.DB_URL
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Database connected');
});
mongoose.set('strictQuery', true);

const sessionStore = MongoStore.create({
    mongoUrl: dbUrl,
    touchAfter: 60 * 60 * 10, // v SEKUNDÁCH!!!!!!
    crypto: {
        secret: process.env.SECRET // 'secretword'
    }
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('trust proxy', true) // pro získání reálné IP adresy z req.ip
app.engine('ejs', ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    store: sessionStore,
    name: "mammamia",
    secret: process.env.SECRET_SESSION, // 'secretword'
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production' ? true : false,
        maxAge: 1000 * 60 * 60 * 24 * 100,
        // sameSite: 'strict'
    }
}));

app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND
}))
app.use(cookieParser(process.env.SECRET))
app.use(bodyparser.json())



app.use(async (err: { message?: any; status?: any; }, req: Request, res: Response, next: any) => {
    // console.log(err)
    try {
        const { status = 500 } = err;
        if (!err.message) err.message = 'Internal Server Error';
        console.log(err);

        // if (req.files && req.files.length) { // pro odstranění souborů, který zbyly po erroru
        //     images = req.files.map(f => ({ url: f.path, filename: f.filename }));
        //     for (let img of images) {
        //         await cloudinary.uploader.destroy(img.filename);
        //     }
        // }

        res.status(status).json(err)
    } catch (e) {
        console.log('ERROR!!!!!!!!!!!!!', e)
        res.status(500).json({ msg: 'Server Error' })
    }
});


app.listen(port, () => {
    console.log('LISTENNING ON PORT:', port);
});