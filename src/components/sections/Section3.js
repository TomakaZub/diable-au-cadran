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
          <div className='map'>
            {/* <div>Adresse</div> */}
            <MapWrapper />
            {/* <div>Map</div> */}
          </div>
          <Form
            {...layout}
            name='nest-messages'
            onFinish={() => console.log("onFinish")}
            validateMessages={validateMessages}
            className='form-contact'
            labelAlign='left'
          >
            <h1>Contact</h1>
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
              <Input.TextArea autoSize={{ minRows: 10 }} />
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Section3
