import React from "react"
import useBackground from "../../../utils/hooks/useBackground"
import useTransition from "../../../utils/hooks/useTransition"
import MapWrapper from "../../UX-UI/googleMaps/MapWrapper"
import { Form, Input, Button } from "antd"
import "antd/dist/antd.css"

import "./style/style.css"

const Contact = ({ section }) => {
  const filterFx = useBackground()
  const isChanging = useTransition()
  // const [userName, setUserName] = useState("")
  // const [email, setEmail] = useState("")
  // const [message, setMessage] = useState("")

  const layout = {
    labelCol: {
      sm: { span: 24 },
    },
    wrapperCol: {
      sm: { span: 24 },
    },
  }

  // const handleChange = (key, value) => {
  //   let inputValue = {}
  //   inputValue[key] = value

  //   setEmail((prev) => {
  //     return { ...prev, inputValue }
  //   })
  // }

  const validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
    required: "${label} est nécéssaire.",
    types: {
      email: "Ce n'est pas un email valide.",
    },
  }

  const onFinish = (values) => {
    console.log("submit")
  }

  if (section) {
    return (
      <div
        className={`section section${section.tech.order} ${isChanging} contact`}
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
              onFinish={onFinish}
              validateMessages={validateMessages}
              className='form-contact'
              labelAlign='left'
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

export default Contact
