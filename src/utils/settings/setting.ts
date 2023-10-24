// in bytes - 25MB = 25000000B
export const html = (body: string) => {
	return `<!DOCTYPE html>
    <html>
    <head>
        <title></title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <style type="text/css">
            body {
                height: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
            }
            .title-form {
                text-align: center;
                font-weight: 700;
                font-size: 36px;
                text-transform: uppercase;
                color: rgb(206, 56, 50);
            }
            .form-container {
                border-style: dashed;
                border-width: 1px;
                border-color: rgb(206, 56, 50);
                max-width: 500px;
                margin: auto;
                display: grid;
                padding: 16px;
                font-size: 18px;
                font-weight: 400;
                line-height: 28px;
            }
            .form-container tr {
                padding: 4px;
            }
        </style>
    </head>
    <body>
        ${body}
    </body>
    </html>`;
};
