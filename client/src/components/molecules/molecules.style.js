import styled from "styled-components"

export const NavbarStyle = styled.div`
            .navbar {
            background: var(--glass);
            backdrop-filter: blur(10px);
            padding: 1rem 2rem;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); */
            border-bottom: 1px solid #A78BFA40;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .logo {
            font-size: 1.75rem;
            font-weight: 700;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.5px;
        }

        .nav-links {
            display: flex;
            gap: 2.5rem;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text);
            font-weight: 500;
            transition: all 0.3s ease;
            font-size: 1.1rem;
            position: relative;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 0;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

`;

export const SidebarStyle = styled.div`
 .sidebar {
            width: 250px;
            background: white;
            height: 100vh;
            padding: 2rem 1rem;
            position: fixed;
            box-shadow: 2px 0 5px rgba(0,0,0,0.05);
        }

        .logo {
            color: #6366f1;
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 2rem;
            padding: 0 1rem;
        }

        .nav-item {
            padding: 0.75rem 1rem;
            color: #4b5563;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            border-radius: 0.5rem;
            margin-bottom: 0.5rem;
            transition: all 0.2s;
        }

        .nav-item:hover {
            background: #f3f4f6;
            color: #6366f1;
        }

        .nav-item.active {
            background: #ede9fe;
            color: #6366f1;
        }

`;