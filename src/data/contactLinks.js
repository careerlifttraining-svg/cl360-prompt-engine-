export const contactLinks = {
  supportEmail: "careerlifttraining@gmail.com",
  creativeEmail: "cl360music@gmail.com",
  supportLabel: "Business / Beta / Platform Support",
  creativeLabel: "Creative / Music Inquiries",
  socials: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/careerlift360",
    },
    {
      label: "Instagram: @CareerLift360",
      url: "https://instagram.com/CareerLift360",
    },
    {
      label: "YouTube",
      url: "https://www.youtube.com/@careerlift360",
    },
  ],
};

export const mailto = (email, subject = "CL360 Prompt Engine") =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;
