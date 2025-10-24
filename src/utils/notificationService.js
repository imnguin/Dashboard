import { notification } from 'antd';

/**
 * Hàm lõi để hiển thị thông báo với các tùy chỉnh cơ bản.
 * @param {('success'|'error'|'info'|'warning')} type
 * @param {string} message
 * @param {string} description
 * @param {number} duration
 */
const showNotification = (type, message, description = '', duration = 3) => {
    const notificationType = ['success', 'error', 'info', 'warning'].includes(type) ? type : 'info';

    const api = window.globalNotificationApi || notification;

    api[notificationType]({
        message: message,
        description: description,
        placement: 'topRight',
        duration: duration,
    });
};

export const NotificationService = {
    success: (message, description = '', duration) =>
        showNotification('success', message, description, duration),

    error: (message, description = 'Đã có lỗi xảy ra. Vui lòng thử lại.', duration) =>
        showNotification('error', message, description, duration),

    info: (message, description = '', duration) =>
        showNotification('info', message, description, duration),

    warning: (message, description = '', duration) =>
        showNotification('warning', message, description, duration),
};