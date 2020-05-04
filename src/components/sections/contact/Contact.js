import React from "react"
import MapWrapper from "../../UX-UI/googleMaps/MapWrapper"
import { Form, Input, Button } from "antd"
import "antd/dist/antd.css"

import "./style/style.css"

const Contact = ({ section, isChanging, filterFx, appContext }) => {
  const [form] = Form.useForm()

  const layout = {
    labelCol: {
      sm: { span: 24 },
    },
    wrapperCol: {
      sm: { span: 24 },
    },
  }
  const validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
    required: "${label} est nécéssaire.",
    types: {
      email: "Ce n'est pas un email valide.",
    },
  }

  const onFinish = (values) => {
    form.resetFields()
  }

  if (section) {
    const settings = appContext.globalSettings[0]
    return (
      <div
        className={`section section${section.tech.order} ${isChanging} contact`}
      >
        <div className={`section-container ${filterFx}`}>
          <div className='left-side'>
            <MapWrapper />
          </div>
          <div className='right-side'>
            <div className='adress'>
              <h3>Contact</h3>
              <span>{settings && settings.adress}</span>
              <span>
                {settings && settings.zipcode} - {settings && settings.city}
              </span>
              <span>{settings && settings.phone}</span>
            </div>
            <Form
              {...layout}
              form={form}
              onFinish={onFinish}
              validateMessages={validateMessages}
              className='form-contact'
              labelAlign='left'
              data-netlify='true'
              method='POST'
            >
              <Form.Item
                name={["user", "name"]}
                label='Nom + Prénom'
                className='input-field'
                // onChange={(e) => setUserName(e.target.value)}
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
                // onChange={(e) => setEmail(e.target.value)}
                className='input-field'
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
                // onChange={(e) => setMessage(e.target.value)}
                label='Message'
                className='input-field'
              >
                <Input.TextArea autoSize={{ minRows: 8 }} />
              </Form.Item>
              <Form.Item name={["user", "captcha"]} className='input-field'>
                <div data-netlify-recaptcha='true' />
              </Form.Item>
              <Button htmlType='submit' className='send-email-btn'>
                Envoyer un email
              </Button>
            </Form>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default React.memo(Contact)
