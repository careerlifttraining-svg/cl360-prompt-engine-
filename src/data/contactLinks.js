export const contactLinks = {
  supportEmail: "careerlifttraining@gmail.com",
  creativeEmail: "cl360music@gmail.com",
  supportLabel: "Business / Beta / Platform Support",
  creativeLabel: "Creative / Music Inquiries",
  socials: [
    {
      label: "Instagram: @drefeuskane",
      url: "https://instagram.com/drefeuskane",
    },
    {
      label: "Instagram: @krag4pro",
      url: "https://instagram.com/krag4pro",
    },
  ],
};

export const mailto = (email, subject = "CL360 Prompt Engine") =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;
