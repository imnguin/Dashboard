import { notification } from 'antd';

/**
 * Hàm lõi để hiển thị thông báo với các tùy chỉnh cơ bản.
 * @param {('success'|'error'|'info'|'warning')} type - Loại thông báo
 * @param {string} message - Tiêu đề thông báo
 * @param {string} description - Nội dung chi tiết (tùy chọn)
 * @param {number} duration - Thời gian hiển thị (giây), mặc định 3 giây.
 */
const showNotification = (type, message, description = '', duration = 3) => {
    const notificationType = ['success', 'error', 'info', 'warning'].includes(type) ? type : 'info';

    // 💡 Lấy API từ Context Holder (nếu đã được gán)
    const api = window.globalNotificationApi || notification;

    // Gọi API
    api[notificationType]({
        message: message,
        description: description,
        placement: 'topRight',
        duration: duration,
    });
};

export const notificationService = {
    success: (message, description = '', duration) =>
        showNotification('success', message, description, duration),

    error: (message, description = 'Đã có lỗi xảy ra. Vui lòng thử lại.', duration) =>
        showNotification('error', message, description, duration),

    info: (message, description = '', duration) =>
        showNotification('info', message, description, duration),

    warning: (message, description = '', duration) =>
        showNotification('warning', message, description, duration),
};