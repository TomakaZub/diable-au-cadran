import React from "react"
import useBackground from "./../../utils/hooks/useBackground"
import useTransition from "./../../utils/hooks/useTransition"
import MapWrapper from "./../googleMaps/MapWrapper"
import { Form, Input, Button } from "antd"
import "antd/dist/antd.css"

import "../../style/section.css"

const Section3 = ({ section }) => {
  const filterFx = useBackground()
  const isChanging = useTransition()

  const layout = {
    labelCol: {
      sm: { span: 24 },
    },
    wrapperCol: {
      sm: { span: 24 },
    },
  }

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} n'est pas un email valide.",
    },
  }

  if (section) {
    return (
      <div
        id='section3'
        className={`section section${section.tech.order} ${isChanging}`}
      >
        <div className={`section-container ${filterFx}`}>
          <div className='left-side'>
            {/* <div>Adresse</div> */}
            <MapWrapper />
            {/* <div>Map</div> */}
          </div>
          <div className='right-side'>
            <div className='adress'>
              <h1>Contact</h1>
              <h3>17 rue de la Vicomte</h3>
              <h3>61200 Argentan</h3>
              <h3>02 33 36 07 93</h3>
            </div>
            <Form
              {...layout}
              name='nest-messages'
              onFinish={() => console.log("onFinish")}
              validateMessages={validateMessages}
              className='form-contact'
              labelAlign='left'
            >
              <Form.Item
                name={["user", "name"]}
                label='Nom + Prénom'
                className='input-fied'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label='Email'
                className='input-fied'
                rules={[
                  {
                    type: "email",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "message"]}
                label='Message'
                className='input-fied'
              >
                <Input.TextArea autoSize={{ minRows: 8 }} />
              </Form.Item>
              <Button className='send-email-btn'>Envoyer un email</Button>
            </Form>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Section3
