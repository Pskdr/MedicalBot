import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <footer>
      <Box>
        <h1 style={{ color: "green", textAlign: "center", marginTop: "-50px" }}>
          Making a nice footer
        </h1>
        <Container>
          <Row>
            <Column>
              <Heading>Develop By</Heading>
              <FooterLink href="#">Juan Camilo</FooterLink>
              <FooterLink href="#">Leon</FooterLink>
              <FooterLink href="#">Jhoan</FooterLink>
              <FooterLink href="#">Cesar</FooterLink>
            </Column>
            <Column>
              <Heading></Heading>
            </Column>
          </Row>
        </Container>
      </Box>
    </footer>
  );
};
export default Footer;
