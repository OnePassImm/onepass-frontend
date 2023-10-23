import { TConsultationForm } from "./types";

export const ConsultationFormBody = (data: TConsultationForm) => {
	return `<h2 class="title-form">TƯ VẤN MIỄN PHÍ</h2>
    <div class="form-container">
        <table>
            <tr>
                <td class="name">
                    Họ & tên:
                </td>
                <td class="info-name">
                    ${data.name}
                </td>
            </tr>
            <tr>
                <td class="email">
                    Email:
                </td>
                <td class="info-email">
                    ${data.email}
                </td>
            </tr>
            <tr>
                <td class="phone">
                    Số điện thoại:
                </td>
                <td class="info-phone">
                    ${data.phone}
                </td>
            </tr>
        </table>
    </div>`;
};
