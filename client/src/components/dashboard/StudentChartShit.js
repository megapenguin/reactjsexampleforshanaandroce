import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Typography,
  Form,
  Input,
  Button,
  Checkbox,
} from "antd";
import axios from "axios";

const { Title, Text } = Typography;

function StudentChartShit() {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    // sfsfsdfsdfsdf
    axios
      .get("/users/")
      .then((res) => {
        console.log(res);

        let data = res.data;
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const onFinish = (values) => {
    axios
      .post("/users/add", values)
      .then((res) => {
        let usersCopy = [...users];

        usersCopy = [...usersCopy, res.data];
        console.log(usersCopy);
        setUsers(usersCopy);
      })
      .catch((error) => console.log(error));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleDelete = (id) => {
    axios
      .delete("/users/delete", {
        params: {
          id,
        },
      })
      .then((res) => {
        let usersCopy = [...users];

        usersCopy = usersCopy.filter((user) => user.id !== id);
        setUsers(usersCopy);

        console.log(usersCopy);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Row gutter={[16, 16]}>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input your First Name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input your last Name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {users.map((user, index) => (
        <Col key={index} md={{ span: 6 }}>
          <Card className="shadow-sm">
            <Title>
              {user.firstName} {user.lastName}
            </Title>

            <Button onClick={() => handleDelete(user.id)} danger>
              Delete
            </Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default StudentChartShit;
