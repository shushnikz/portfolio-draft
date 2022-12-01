import React from "react";
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { Button, Col, Form, Input, Row } from "antd"
import TextArea from "antd/es/input/TextArea";

export default function Contact() {
  function onFinish() {
    window.location.reload()
  }
  return (
    <div>
      <div className="card m-3 border-0">
        <div className="card-header border-0 contact"><h1>Contact Me</h1></div>
        <div className="flex justify-content-around">

          <div className="m-3">
            <p><b>If you want to know more about me or my work, or if you would just like to say hello,
              <br />
              send me a message, I would love to hear from you</b></p>
            <Form layout="vertical" className="mt-5 w-100" onFinish={onFinish}>
              <Form.Item name="title" required rules={[{ required: true }]} label="Name">
                <Input placeholder="Enter Your Name" />
              </Form.Item>
              <Form.Item name="email" required rules={[{ required: true }]} label="Email">
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item name="message" required rules={[{ required: true }]} label="Message">
                <TextArea rows={4} placeholder="Enter your message here" />
              </Form.Item>
              <Button htmlType="submit">Submit</Button>
            </Form>

          </div>
          <div className="mt-4">
            <div className="card border-0" style={{ width: "18rem" }}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h6><b>Name</b></h6>
                  <p><b>Sushmitha Narayana Devadiga</b></p>
                </li>
                <li className="list-group-item">
                  <h6><b>Email</b></h6>
                  <p><b>sushmithadevadiga997@gmail.com</b></p>
                </li>
                <li className="list-group-item">
                  <h6><b>Social</b></h6>
                  <div className="flex justify-content-between">
                    <a className="link" href="https://www.linkedin.com/in/sushmitha-narayan-devadiga-b1741216a"
                      target="_blank" rel="noreferrer">
                      <IconButton>
                        <LinkedInIcon color="primary" />
                      </IconButton></a>
                    <a className="link" href="https://github.com/shushnikz?tab=repositories"
                      target="_blank" rel="noreferrer">
                      <IconButton>
                        <GitHubIcon style={{ color: "grey" }} />
                      </IconButton></a>
                    <a className="link" href="https://whatsapp.com/dl/"
                      target="_blank" rel="noreferrer">
                      <IconButton>
                        <WhatsAppIcon color="success" />
                      </IconButton></a>
                    <a className="link" href="mailto: sushmithadevadiga997@gmail.com"
                      target="_blank" rel="noreferrer">
                      <IconButton>
                        <EmailIcon color="error" />
                      </IconButton></a>
                  </div>

                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}
