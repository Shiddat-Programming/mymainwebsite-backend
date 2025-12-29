const transporter = require("../config/mailConfig");

exports.applyInternship = async (req, res) => {
  try {
    const {
      full_name,
      college_name,
      course_year,
      branch,
      email,
      mobile,
      dob,
      project_title,
      project_type,
      role,
      from_date,
      to_date,
      total_hours,
      message,
    } = req.body;

    // ==============================
    // 1️⃣ CLIENT KO TURANT RESPONSE
    // ==============================
    res.status(200).json({
      success: true,
      message: "Application submitted successfully",
    });

    // ==============================
    // 2️⃣ HR MAIL (BACKGROUND)
    // ==============================
    const hrMailOptions = {
      from: `"Internship Application" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Internship Application - ${full_name}`,
      html: `
        <h2>New Internship Application</h2>

        <h3>Intern Information</h3>
        <p><b>Name:</b> ${full_name}</p>
        <p><b>College:</b> ${college_name}</p>
        <p><b>Course & Year:</b> ${course_year}</p>
        <p><b>Branch:</b> ${branch}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>DOB:</b> ${dob}</p>

        <h3>Project Details</h3>
        <p><b>Project Title:</b> ${project_title}</p>
        <p><b>Project Type:</b> ${project_type}</p>
        <p><b>Role:</b> ${role}</p>

        <h3>Internship Duration</h3>
        <p><b>From:</b> ${from_date}</p>
        <p><b>To:</b> ${to_date}</p>
        <p><b>Total Hours:</b> ${total_hours}</p>

        <h3>Why Internship Needed</h3>
        <p>${message}</p>
      `,
    };

    transporter.sendMail(hrMailOptions)
      .then(() => console.log("✅ HR mail sent"))
      .catch(err => console.error("❌ HR mail error:", err));

    // ==============================
    // 3️⃣ USER CONFIRMATION MAIL (BACKGROUND)
    // ==============================
    const userMailOptions = {
      from: `"Witx Technologies HR" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Applying – Internship Application Received",
      html: `
        <p>Dear <b>${full_name}</b>,</p>

        <p>Thank you for applying for the internship at <b>Witx Technologies</b>.</p>

        <p>We have successfully received your application.</p>

        <p>Our team will review your profile and contact you if shortlisted.</p>

        <br/>
        <p>Best regards,<br/>
        <b>HR Team</b><br/>
        Witx Technologies</p>
      `,
    };

    transporter.sendMail(userMailOptions)
      .then(() => console.log("✅ User mail sent"))
      .catch(err => console.error("❌ User mail error:", err));

  } catch (error) {
    console.error("Controller error:", error);
  }
};
