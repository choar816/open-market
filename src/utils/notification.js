import { notification } from 'antd';

export const openNotification = ({ type, message, description, placement }) => {
  notification[type]({
    message,
    description,
    placement,
  });
};
