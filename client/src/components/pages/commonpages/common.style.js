import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
        :root {
            --primary: #6366F1;
            --primary-light: #818CF8;
            --secondary: #A78BFA;
            --background: #F8FAFC;
            --text: #1E293B;
            --text-light: #64748B;
            --white: #FFFFFF;
            --success: #34D399;
            --warning: #FBBF24;
            --glass: rgba(255, 255, 255, 0.7);
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        body {
            background: linear-gradient(135deg, #EEF2FF 0%, #F8FAFC 100%);
            color: var(--text);
            line-height: 1.6;
            min-height: 100vh;
        }
        a{
            /* color: white; */
            text-decoration: none;
        }
`;


export const HomepageStyle = styled.div`
        .hero {
            margin-top: 2%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 0 2rem;
            background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.1) 0%, transparent 60%),
                        radial-gradient(circle at bottom left, rgba(167, 139, 250, 0.1) 0%, transparent 60%);
        }

        .hero-content {
            max-width: 900px;
            padding: 3rem;
            background: var(--glass);
            backdrop-filter: blur(10px);
            border-radius: 24px;
            box-shadow: 0 20px 40px -1px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #6366F1 0%, var(--secondary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1.2;
        }

        .hero p {
            font-size: 1.25rem;
            margin-bottom: 2.5rem;
            color: var(--text-light);
        }

        .cta-buttons {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
        }

        .cta-primary, .cta-secondary {
            padding: 1rem 2.5rem;
            border-radius: 12px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            text-decoration: none;
        }

        .cta-primary {
            background: linear-gradient(135deg, #6366F1 0%, var(--secondary) 100%);
            color: var(--white);
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .cta-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
        }

        .cta-secondary {
            background: var(--glass);
            color: #6366F1;
            border: 2px solid #6366F1;
        }

        .cta-secondary:hover {
            background: #6366F1;
            color: var(--white);
        }

        .features {
            padding: 8rem 2rem;
            background: var(--white);
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2.5rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .feature-card {
            background: var(--glass);
            padding: 2.5rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px -1px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #818CF8 0%, var(--secondary) 100%);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
        }

        .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #6366F1;
        }

        .feature-card p {
            color: var(--text-light);
            line-height: 1.7;
        }

        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .cta-buttons {
                flex-direction: column;
            }

            .feature-card {
                padding: 2rem;
            }
        }

        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }

        .floating {
            animation: float 3s ease-in-out infinite;
        }
`;