import { Button, Form, FormProps, Input, message } from "antd";
import { useLoginMutation } from "../../rtk/backendApi";
import { useEffect } from "react";

type FieldType = {
  email?: string;
  password?: string;
};
function LoginForm() {
  const [messageApi, contextHolder] = message.useMessage();
  const [login, { data, isSuccess, isLoading }] = useLoginMutation();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    login(values);
  };
  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("t", data.token);
      localStorage.setItem("n", data.name);
      messageApi.open({ type: "success", content: `Bienvenido ${data.name}` });
    }
  }, [isSuccess]);

  const onFinishFailed = () => {
    console.log("finish failed");
  };
  return (
    <>
      {contextHolder}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Correo electrónico"
          name="email"
          rules={[
            {
              required: true,
              message: "Por favor ingresa tu correo electrónico",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Contraseña"
          name="password"
          rules={[
            { required: true, message: "Por favor ingresa tu contraseña" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default LoginForm;
