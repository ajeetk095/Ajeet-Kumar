export default async (req, res) => {
  try {
    const resumeUrl = process.env.RESUME_URL || "https://your-default-resume-url.com/resume.pdf";
    res.redirect(307, resumeUrl);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch resume" });
  }
};
