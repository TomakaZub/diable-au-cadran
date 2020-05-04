import React, { useState } from "react"
import MapWrapper from "../../UX-UI/googleMaps/MapWrapper"
import { Form, Input, Button } from "antd"
import "antd/dist/antd.css"

import "./style/style.css"

const Contact = ({ section, isChanging, filterFx, appContext }) => {
  const [form] = Form.useForm()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

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

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: encode({
        "form-name": "contact",
        name: name,
        email: email,
        message: message,
      }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error))
    form.resetFields()
    e.preventDefault()
  }

  // const onFinish = (values) => {
  //   form.resetFields()
  // }

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

            {/* Form hidden pour Netlify */}
            <form
              name='contact'
              data-netlify='true'
              netlify-honeypot='bot-field'
              hidden
            >
              <input type='text' name='name' />
              <input type='email' name='email' />
              <textarea name='message'></textarea>
            </form>

            {/* Form affiché */}
            <Form
              {...layout}
              form={form}
              validateMessages={validateMessages}
              className='form-contact'
              labelAlign='left'
            >
              <Form.Item
                name={["user", "name"]}
                label='Nom + Prénom'
                className='input-field'
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setMessage(e.target.value)}
                label='Message'
                className='input-field'
              >
                <Input.TextArea autoSize={{ minRows: 8 }} />
              </Form.Item>
              <Button
                htmlType='submit'
                className='send-email-btn'
                onClick={(e) => handleSubmit}
              >
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
