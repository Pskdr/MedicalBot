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
              <Heading>Develop by: </Heading>
              <FooterLink href="#">Juan Camilo</FooterLink>
              <FooterLink href="#">Leon</FooterLink>
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink href="#">Jhoan</FooterLink>
              <FooterLink href="#">Cesar</FooterLink>
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">Uttar Pradesh</FooterLink>
              <FooterLink href="#">Ahemdabad</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>Facebook</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </footer>
  );
};
export default Footer;
