const transporter = require("../../services/Email");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const sendEmail = async (to, subject, template_name, Data) => {
    try {

        const templatePath = path.resolve(__dirname, "../../utils/EmailTemplates", `${template_name}.html`);
        let html = fs.readFileSync(templatePath, "utf8");


        Object.keys(Data).forEach(key => {
            html = html.replace(new RegExp(`{{${key}}}`, "g"), Data[key]);
        });

        await transporter.sendMail({
            from: `${process.env.APP_NAME} <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html // ✅ HTML support added
        });

        console.log("Email sent successfully!");
    } catch (error) {
        console.error("Email send failed:", error.message);
    }
};

module.exports = sendEmail;
