import { ICustomer } from "../model/Customer";

const ResetPasswordTemplate = (customer:ICustomer)=>{

    return {
        from: { name: "Bounce & Back", address: "www.bounce&back.com" },
        to: customer.email, // list of receivers (separated by ,)
        subject: 'Reset Insider Note Account Password',
        text: 'Reset Insider Note Account Password',
        html: `
        <!DOCTYPE html>
<html>
  <head>
    <title>Reset Bounce & Back Account Password </title>
  </head>

  <body
    style="
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 10px 0px;
    "
  >
    <div
      style="
        background-color: #fff;
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: left;
      "
    >
   
      <h3>
        To reset your Bounce & Back account password, please click on the link
        below:
      </h3>
      <a
        href="http://localhost:5173/resetPassword/${customer.resetToken}"
        target="_blank"
        >Click here to reset your password</a
      >
        <p style="padding: 1rem 0rem 0rem 0rem;">
          <strong>Note: </strong> For security reasons, this link will expire in <strong>10 Minutes</strong>. If you do not use it within this time frame, you will need to
          request another password reset.
        </p>
    </div>
  </body>
</html>
        `
    };
}

export default ResetPasswordTemplate