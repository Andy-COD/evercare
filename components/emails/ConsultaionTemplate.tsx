import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Hr,
  } from "@react-email/components";
  
  type ConsultationEmailProps = {
    providerName: string;
    fullName: string;
    email: string;
    phone: string;
    careType: string;
    message?: string;
    companyName: string;
  };
  
  export default function ConsultationEmail({
    providerName,
    fullName,
    email,
    phone,
    careType,
    message,
    companyName,
  }: ConsultationEmailProps) {
    return (
      <Html>
        <Head />
        <Body style={main}>
          <Container style={container}>
            {/* Header */}
            <Text style={heading}>
              New Consultation Request
            </Text>
  
            <Text style={paragraph}>
              Dear {providerName},
            </Text>
  
            <Text style={paragraph}>
              You have received a new consultation request. The client’s details are provided below:
            </Text>
  
            <Hr style={divider} />
  
            {/* Client Info */}
            <Section>
              <Text style={sectionTitle}>Client Information</Text>
              <Text style={text}><strong>Name:</strong> {fullName}</Text>
              <Text style={text}><strong>Email:</strong> {email}</Text>
              <Text style={text}><strong>Phone:</strong> {phone}</Text>
            </Section>
  
            {/* Service */}
            <Section>
              <Text style={sectionTitle}>Requested Service</Text>
              <Text style={text}><strong>Care Type:</strong> {careType}</Text>
            </Section>
  
            {/* Message */}
            <Section>
              <Text style={sectionTitle}>Additional Information</Text>
              <Text style={messageBox}>
                {message?.trim() || "No additional details provided."}
              </Text>
            </Section>
  
            <Hr style={divider} />
  
            {/* Footer */}
            <Text style={paragraph}>
              Please reach out to the client at your earliest convenience to arrange the consultation.
            </Text>
  
            <Text style={paragraph}>
              Kind regards, <br />
              {companyName}
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }

  const main = {
    backgroundColor: "#f4f6f8",
    fontFamily: "Arial, sans-serif",
  };
  
  const container = {
    margin: "0 auto",
    padding: "24px",
    maxWidth: "600px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
  };
  
  const heading = {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#0f766e",
  };
  
  const paragraph = {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#333",
    marginBottom: "12px",
  };
  
  const sectionTitle = {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "8px",
    color: "#0f766e",
  };
  
  const text = {
    fontSize: "14px",
    marginBottom: "6px",
    color: "#333",
  };
  
  const messageBox = {
    fontSize: "14px",
    backgroundColor: "#f1f5f9",
    padding: "12px",
    borderRadius: "8px",
    color: "#333",
    whiteSpace: "pre-line" as const,
  };
  
  const divider = {
    borderColor: "#e5e7eb",
    margin: "20px 0",
  };