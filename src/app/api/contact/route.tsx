import { NextResponse, NextRequest } from 'next/server'

const nodemailer = require('nodemailer');

// Handles POST requests to /api


export async function POST(request) {
    if (request.url.length < 0) {
        return new Response("Error");
    }
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    console.log(process.env.EMAIL_PASSWORD);

    // create transporter object
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {

            user: "oscarjey45@gmail.com",
            pass: "ltql msom awaz tpih"
        }
    });

    try {

        const mail = await transporter.sendMail({
            from: "oscarjey45@gmail.com",
            to: "hiring@hightech.tech",
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