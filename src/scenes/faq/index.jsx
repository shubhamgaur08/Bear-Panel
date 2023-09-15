import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What is an admin panel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          An admin panel, short for administration panel, is a web-based interface or dashboard that allows administrators to manage and control various aspects of a website, application, or system.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Why do I need an admin panel for my website or application?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          An admin panel is essential for efficiently managing and maintaining your digital platform. It empowers administrators to perform tasks such as adding new content, moderating user-generated content, analyzing site performance, and ensuring security.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What are some common features of an admin panel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Common admin panel features include user management (adding, editing, and deleting users), content management (creating, editing, and deleting content), access control (defining user roles and permissions), analytics (monitoring site traffic and user behavior), security settings (implementing security measures like authentication and authorization), and system configuration (adjusting settings to fit specific needs).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How can I ensure the security of my admin panel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To enhance the security of your admin panel, consider the following:

Implement strong authentication mechanisms like two-factor authentication (2FA).
Enforce strict access controls based on roles and permissions.
Regularly update and patch software to fix vulnerabilities
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Can I customize my admin panel to suit my specific needs?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, many admin panels are designed to be customizable. You can often modify the layout, design, and functionality to align with your unique requirements.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
