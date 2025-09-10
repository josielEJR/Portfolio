import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail", // Change if using another provider
    auth: {
        // aqui vai precisar ser configurado um email que será usado como mediador, ou seja, aquele que vai ser responsável por enviar a mensagem do cliente para o email de contato da empresa
        user: "aquablastbrasil@gmail.com",
        pass: "vivj zysu wtnb isoi",
    },
});

app.post("/send-email", async (req, res) => {
    const { subject, text, from } = req.body;

    try {
        await transporter.sendMail({
            from,
            to: "contato@aquablast.com.br", // aqui vai ser o email de contato da empresa
            subject,
            text,
        });
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error)
        res.status(500).json({ message: "Error sending email", error });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));