import { useEffect, useState } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
// create a custom document head to add fonts, stylesheets, and other assets from bootstrap 5.2

export default function MyDocument() {
    const [theme, setTheme] = useState("dark");
    return <Html lang="pt-BR" data-bs-theme={theme}>
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />

            {/* Fontawesome */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

            {/* Bootsrap 5.2 */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

            {/* Chart.js */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.min.js"></script>
        </Head>

        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
}