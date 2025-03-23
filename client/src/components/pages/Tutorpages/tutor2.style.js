import styled from "styled-components";


export const ClassDashboardStyle = styled.div`
        .dashboard-container {
            max-width: 1400px;
            margin: 4% auto;
            padding: 2rem;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .stat-card {
            background: var(--glass);
            backdrop-filter: blur(10px);
            padding: 1.5rem;
            border-radius: 10px;
            /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); */
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: transform 0.3s ease;
        }

        .stat-card:hover {
            transform: translateY(-5px);
        }

        .stat-card h3 {
            color: var(--text-light);
            font-size: 1rem;
            margin-bottom: 0.5rem;
        }

        .stat-card .value {
            font-size: 2.5rem;
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }

        .stat-card .trend {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
        }

        .trend.up {
            color: var(--success);
        }

        .main-content {
            display: grid;
            grid-template-columns: 1.5fr 1.5fr;
            gap: 1.5rem;

        }

        .panel {
            background: var(--glass);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            padding: 1.5rem;
            /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); */
            border: 1px solid rgba(255, 255, 255, 0.2);

        }

        .panel-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(99, 102, 241, 0.1);
        }
            .create-question-btn{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }

        .panel-header h2 {
            font-size: 1.25rem;
            color: var(--text);
        }
    .questions-list{
        overflow-y : auto;
            height : 400px;
            width: 100%;
            overflow-x: hidden;
            }
        .question-card {
            background: var(--white);
            padding: 1.25rem;
            border-radius: 7px;
            margin-bottom: 1rem;
            /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); */
            border: 1px solid #88888840;
            transition: transform 0.3s ease;
        }

        .question-card:hover {
            transform: translateX(5px);
        }

        .relevance {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            background: rgba(99, 102, 241, 0.1);
            color: var(--primary);
            border-radius: 20px;
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
        }

        .leaderboard-item {
            display: flex;
            align-items: center;
            padding: 1rem;
            background: var(--white);
            border-radius: 16px;
            margin-bottom: 1rem;
            transition: transform 0.3s ease;
        }

        .leaderboard-item:hover {
            transform: translateX(5px);
        }

        .rank {
            width: 40px;
            height: 40px;
            background: var(--primary);
            color: var(--white);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            margin-right: 1rem;
        }

        .student-info {
            flex-grow: 1;
        }

        .student-name {
            font-weight: 500;
            color: var(--text);
        }

        .contribution {
            font-size: 0.875rem;
            color: var(--text-light);
        }

        .points {
            font-weight: 600;
            color: var(--primary);
            padding: 0.5rem 1rem;
            background: rgba(99, 102, 241, 0.1);
            border-radius: 20px;
        }

        @media (max-width: 1024px) {
            .main-content {
                grid-template-columns: 1fr;
            }
        }

        .chart {
            width: 100%;
            height: 300px;
            margin-top: 2rem;
            background: rgba(99, 102, 241, 0.05);
            border-radius: 16px;
            display: flex;
            align-items: flex-end;
            padding: 1rem;
            gap: 1rem;
        }

        .bar {
            flex-grow: 1;
            background: linear-gradient(to top, var(--primary), var(--primary-light));
            border-radius: 8px 8px 0 0;
            transition: height 0.3s ease;
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        .live-indicator {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background: rgba(52, 211, 153, 0.1);
            color: var(--success);
            border-radius: 20px;
            font-size: 0.875rem;
        }

        .live-indicator::before {
            content: '';
            width: 8px;
            height: 8px;
            background: var(--success);
            border-radius: 50%;
            animation: pulse 2s infinite;
        }

`;