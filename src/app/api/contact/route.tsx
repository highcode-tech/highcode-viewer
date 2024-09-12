import { NextResponse, NextRequest } from 'next/server'



const nodemailer = require('nodemailer');

// Handles POST requests to /api


export async function POST(request) {
/*
    const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
    const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
*/
    //const test = require('dotenv').config()
    //console.log(test)
    

    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    console.log(process.env.EMAIL_PASSWORD);

    // create transporter object
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {

            user: /*process.env.EMAIL_FROM,  //*/"oscarjey45@gmail.com",
            pass: /*process.env.EMAIL_PASSWORD, //*/ "ltql msom awaz tpih"
        }
    });

    try {

        const mail = await transporter.sendMail({
            from: /*process.env.EMAIL_FROM, //*/"oscarjey45@gmail.com",
            to: /*process.env.EMAIL_TO, //*/ "jey109eugene@gmail.com",
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        // NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }


}