import { useImperativeHandle, forwardRef } from "react";
import { notification } from "antd";

const NotificationComponent = forwardRef(({ type, text, title }: any, ref) => {
  const [api, contextHolder] = notification.useNotification();

  useImperativeHandle(ref, () => ({
    triggerNotification: () => {
      const isSuccess = type === "success";
      api[isSuccess ? "success" : "error"]({
        message: (
          <span
            style={{
              color: isSuccess ? "#32BB71" : "#FF0000",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {title}
          </span>
        ),
        description: (
          <span style={{ color: "#fff", fontSize: "14px" }}>{text}</span>
        ),
        placement: "bottomRight",
        style: {
          border: `1px solid ${isSuccess ? "#43D590" : "#D42525"}`,
          borderRadius: "12px",
          backgroundColor: isSuccess ? "rgba(50, 187, 113, 0.2)" : "#D4252533",
          background: "#351624",
          width: "299px",
          padding: "20px",
        },
        closable: true,
      });
    },
  }));

  return <>{contextHolder}</>;
});

export default NotificationComponent;
