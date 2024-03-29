import React, { useState } from "react";
import { Input } from "rsuite";
import axios from "axios";
import "./Components.css";
import { NavLink } from "react-router-dom";
import cccLogo from "../Images/CCC_logo.svg";
import { Modal, ButtonToolbar, Button, Placeholder } from "rsuite";
import hamburger from "../Images/hamburgur.svg";

const Navbar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const [pop, setPop] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState();

  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleShow = (value) => {
    setSize(value);
    setPop(true);
  };
  const handleExit = () => setPop(false);
  const handleClose = () => setOpen(false);

  var data = { name: name, email: email, message: message };

  const sendContactData = async () => {
    try {
      const response = await axios.post(
        "https://contact-dpnu.onrender.com/cloud/contact",
        data
      );
      if (response.status === 200) {
        alert("Form submitted successfully");
      } else {
        alert("Form submission failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  function contactData() {
    sendContactData();
    handleExit();
  }

  function handleName(e) {
    if (/^[a-zA-Z ]*$/.test(e) || e === "") {
      setName(e);
      document.getElementById("invalidName").style.visibility = "hidden";
      if (e === "") {
        document.getElementById("nname").style.borderColor = "#443C68";
      } else {
        document.getElementById("nname").style.borderColor = "green";
      }
    } else {
      document.getElementById("invalidName").style.visibility = "visible";
      document.getElementById("nname").style.borderColor = "red";
    }
  }

  function handleEmail(e) {
    if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(e) || e === "") {
      setEmail(e);
      document.getElementById("invalidEmail").style.visibility = "hidden";
      if (e === "") {
        document.getElementById("uname").style.borderColor = "#443C68";
      } else {
        document.getElementById("uname").style.borderColor = "green";
      }
    } else {
      setEmail("");
      document.getElementById("invalidEmail").style.visibility = "visible";
      document.getElementById("uname").style.borderColor = "red";
    }
  }

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src={cccLogo} alt="logo" style={{ height: "4vw" }} />
          <span id="name" style={{ fontSize: "2vw" }}>
            Cloud Computing Cell
          </span>
        </div>
        <div style={{ gap: "1vw" }}>
          <span className="nav-item">
            <NavLink className="menu" to={"/"} style={{ fontSize: "1.2vw" }}>
              Home
            </NavLink>
          </span>
          <span className="nav-item">
            <NavLink
              className="menu"
              to={"/Activity"}
              style={{ fontSize: "1.2vw" }}
            >
              Activities
            </NavLink>
          </span>
          <span className="nav-item">
            <NavLink
              className="menu"
              to={"/Team"}
              style={{ fontSize: "1.2vw" }}
            >
              Team
            </NavLink>
          </span>
          <span className="nav-item">
            <NavLink className="menu" style={{ fontSize: "1.2vw" }}>
              <span onClick={() => handleShow("sm")}>Contact Us</span>
              <Modal size={size} open={pop} onClose={handleExit}>
                <Modal.Header>
                  <Modal.Title>
                    <div id="title-cont">
                      <span>Contact </span>
                      <span className="inline">Us</span>
                    </div>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <label>Name</label>
                    <Input
                      placeholder="Enter your name"
                      id="nname"
                      onClick={handleName}
                      onChange={handleName}
                      required
                    />
                  </div>
                  <p className="valid" id="invalidName">
                    Only alphabets are allowed.
                  </p>
                  <div>
                    <label>Email</label>
                    <Input
                      placeholder="Enter your email"
                      id="uname"
                      onClick={handleEmail}
                      onChange={handleEmail}
                      required
                    />
                  </div>
                  <p className="valid" id="invalidEmail">
                    Enter valid email address.
                  </p>

                  <label>Your Message</label>
                  <div>
                    <Input
                      as="textarea"
                      rows={3}
                      onChange={(e) => {
                        setMessage(e);
                      }}
                      placeholder="Enter your Message"
                    />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={handleExit} appearance="subtle">
                    Cancel
                  </Button>
                  <Button onClick={contactData} appearance="primary">
                    Send
                  </Button>
                </Modal.Footer>
              </Modal>
            </NavLink>
          </span>
          <span className="nav-item">
            <NavLink className="menu" style={{ fontSize: "1.2vw" }}>
              <span onClick={() => handleOpen("sm")}>Register</span>
              <Modal size={size} open={open} onClose={handleClose}>
                <Modal.Header>
                  <Modal.Title id="header-text">STAY TUNED</Modal.Title>
                </Modal.Header>
                <Modal.Body id="body-text">
                  For upcoming events that will be happening soon!
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={handleClose} appearance="subtle">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} appearance="primary">
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
            </NavLink>
          </span>
        </div>
      </header>
      <div className="mobNav" style={{ backgroundColor: "#007dfe" }}>
        <div>
          <img onClick={() => setNavOpen(!navOpen)} src={hamburger} />
        </div>
        {navOpen && (
          <ul className="navList">
            <li>
              <NavLink to="/">
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Activity">
                <span>Activities</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Team">Team</NavLink>
            </li>
            <li>
              <NavLink>
                <span onClick={() => handleShow("sm")}>Contact Us</span>
                <Modal size={size} open={pop} onClose={handleExit}>
                  <Modal.Header>
                    <Modal.Title>
                      <div id="title-cont">
                        <span>Contact </span>
                        <span className="inline">Us</span>
                      </div>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div>
                      <label>Name</label>
                      <Input
                        placeholder="Enter your name"
                        id="nname"
                        onClick={handleName}
                        onChange={handleName}
                        required
                      />
                    </div>
                    <p className="valid" id="invalidName">
                      Only alphabets are allowed.
                    </p>
                    <div>
                      <label>Email</label>
                      <Input
                        placeholder="Enter your email"
                        id="uname"
                        onClick={handleEmail}
                        onChange={handleEmail}
                        required
                      />
                    </div>
                    <p className="valid" id="invalidEmail">
                      Enter valid email address.
                    </p>

                    <label>Your Message</label>
                    <div>
                      <Input
                        as="textarea"
                        rows={3}
                        onChange={(e) => {
                          setMessage(e);
                        }}
                        placeholder="Enter your Message"
                      />
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={handleExit} appearance="subtle">
                      Cancel
                    </Button>
                    <Button onClick={contactData} appearance="primary">
                      Send
                    </Button>
                  </Modal.Footer>
                </Modal>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <span onClick={() => handleOpen("sm")}>Register</span>
                <Modal size={size} open={open} onClose={handleClose}>
                  <Modal.Header>
                    <Modal.Title id="header-text">STAY TUNED</Modal.Title>
                  </Modal.Header>
                  <Modal.Body id="body-text">
                    For upcoming events that will be happening soon!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={handleClose} appearance="subtle">
                      Cancel
                    </Button>
                    <Button onClick={handleClose} appearance="primary">
                      Ok
                    </Button>
                  </Modal.Footer>
                </Modal>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
