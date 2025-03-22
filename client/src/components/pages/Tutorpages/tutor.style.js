import styled from "styled-components";


export const DashboardStyle = styled.div`
            .main-content {
            margin-left: 250px;
            padding: 2rem;
            width: calc(100% - 250px);
            margin-top: 4%;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
        }

        .create-class-btn {
            background: #6366f1;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            border: none;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.2s;
        }

        .create-class-btn:hover {
            background: #4f46e5;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .stat-card {
            background: white;
            padding: 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .stat-title {
            color: #6b7280;
            font-size: 0.875rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
        }

        .stat-value {
            color: #6366f1;
            font-size: 2rem;
            font-weight: 600;
        }

        .charts-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .chart-container {
            background: white;
            padding: 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .chart-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: #111827;
            margin-bottom: 1rem;
        }

        .classes-list {
            background: white;
            padding: 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .class-item {
            padding: 1rem;
            border-bottom: 1px solid #e5e7eb;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .class-info h3 {
            color: #111827;
            font-size: 1rem;
            margin-bottom: 0.25rem;
        }

        .class-meta {
            color: #6b7280;
            font-size: 0.875rem;
        }

        .class-status {
            background: #ecfdf5;
            color: #059669;
            padding: 0.25rem 0.75rem;
            border-radius: 1rem;
            font-size: 0.875rem;
        }
`;

export const TutorDashboardStyle = styled.div`
        .dashboard-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 2rem;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .stat-card {
            background: var(--glass);
            backdrop-filter: blur(10px);
            padding: 1.5rem;
            border-radius: 24px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
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
            grid-template-columns: 2fr 1fr;
            gap: 1.5rem;
        }

        .panel {
            background: var(--glass);
            backdrop-filter: blur(10px);
            border-radius: 24px;
            padding: 1.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .panel-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(99, 102, 241, 0.1);
        }

        .panel-header h2 {
            font-size: 1.25rem;
            color: var(--text);
        }

        .question-card {
            background: var(--white);
            padding: 1.25rem;
            border-radius: 16px;
            margin-bottom: 1rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
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

export const ALlClassesStyle = styled.div`
        .main-content {
            margin-left: 250px;
            padding: 2rem;
            width: calc(100% - 250px);
            margin-top: 4%;
        }
       .action-btn a{
        color: gray;
       }
       .create-class-btn a{
        color: white;
       }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
        }

        .create-class-btn {
            background: #6366f1;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            border: none;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.2s;
        }

        .create-class-btn:hover {
            background: #4f46e5;
        }

        .class-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
        }

        .class-card {
            background: white;
            border-radius: 10px;
            /* box-shadow: 0 1px 3px rgba(0,0,0,0.1); */
            border: 1px solid #8080803b;
            overflow: hidden;
        }

        .class-header {
            background: #6366f1;
            color: white;
            padding: 1.5rem;
        }

        .class-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .class-schedule {
            font-size: 0.875rem;
            opacity: 0.9;
        }

        .class-body {
            padding: 1.5rem;
        }

        .class-stat {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 0;
            border-bottom: 1px solid #e5e7eb;
        }

        .class-stat:last-child {
            border-bottom: none;
        }

        .stat-label {
            color: #6b7280;
        }

        .stat-value {
            color: #111827;
            font-weight: 500;
        }

        .class-actions {
            padding: 1rem 1.5rem;
            background: #f9fafb;
            display: flex;
            gap: 1rem;
        }

        .action-btn {
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            border: 1px solid #e5e7eb;
            background: white;
            color: #4b5563;
            cursor: pointer;
            transition: all 0.2s;
        }

        .action-btn:hover {
            border-color: #6366f1;
            color: #6366f1;
        }
`;

export const CreateclassStyle = styled.div`
        .container {
            max-width: 800px;
            margin: 5% auto;
            background: var(--glass);
            backdrop-filter: blur(10px);
            border-radius: 24px;
            padding: 2.5rem;
            box-shadow: 0 20px 40px -1px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .form-title {
            font-size: 2rem;
            margin-bottom: 2.5rem;
            text-align: center;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .form-group {
            margin-bottom: 1.5rem;
            margin-top: 4%;
        }

        label {
            display: block;
            margin-bottom: 0.75rem;
            color: var(--text);
            font-weight: 500;
            font-size: 1.1rem;
        }

        input, textarea, select {
            width: 100%;
            padding: 1rem;
            border: 2px solid rgba(99, 102, 241, 0.2);
            border-radius: 12px;
            font-size: 1rem;
            background: var(--white);
            transition: all 0.3s ease;
        }

        input:focus, textarea:focus, select:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
        }

        .file-upload {
            background: rgba(99, 102, 241, 0.05);
            padding: 2.5rem;
            border-radius: 16px;
            text-align: center;
            margin-bottom: 2rem;
            border: 2px dashed rgba(99, 102, 241, 0.3);
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .file-upload:hover {
            background: rgba(99, 102, 241, 0.1);
            border-color: var(--primary);
        }

        .file-upload p {
            color: var(--text-light);
            margin-bottom: 1rem;
        }

        .file-upload input {
            
        }

        .upload-icon {
            width: 64px;
            height: 64px;
            margin-bottom: 1rem;
            color: var(--primary);
        }

        .submit-btn {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: var(--white);
            padding: 1rem 2rem;
            border: none;
            border-radius: 12px;
            font-weight: 600;
            font-size: 1.1rem;
            width: 100%;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
        }

        .form-section {
            background: var(--white);
            padding: 2rem;
            border-radius: 16px;
            margin-bottom: 2rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .form-section h3 {
            color: var(--primary);
            margin-bottom: 1.5rem;
            font-size: 1.25rem;
        }

        .input-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }

        @media (max-width: 768px) {
            .container {
                padding: 1.5rem;
            }

            .input-group {
                grid-template-columns: 1fr;
            }
        }

        .tags-input {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            padding: 0.5rem;
            border: 2px solid rgba(99, 102, 241, 0.2);
            border-radius: 12px;
            min-height: 50px;
        }

        .tag {
            background: rgba(99, 102, 241, 0.1);
            color: var(--primary);
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .tag span {
            cursor: pointer;
        }
`;

export const LiveclassStyle = styled.div`
           .live-container {
            display: grid;
            grid-template-columns: 3fr 2fr;
            gap: 1.5rem;
            padding: 1.5rem;
            max-width: 1800px;
            margin: 0 auto;
            height: calc(100vh - 80px);
        }

        .main-content {
            background: #000;
            border-radius: 24px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 20px 40px -1px rgba(0, 0, 0, 0.28);
        }

        .poll-container{
            background-color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 70%;
            padding: 0%;
            border-radius: 10px;

        }
        .question-content{
            display: flex;
            justify-content: space-between;
            width: 80%;
            margin: auto;
            padding: 2%;
            align-items: center;
        }
        .question-content h2{
            font-size: 1rem;
            font-weight: 400;
        }
        .question-content b{
            font-size: 0.8rem;
            color: red;
            background-color: #ff000029;
            padding: 5px;
            font-weight: 300;
            border-radius: 10px;
        }
        .poll-container ul{
            display: flex;
            width: 80%;
            margin: auto;
            justify-content: space-evenly;
            align-items: center;
            list-style: none;
            text-align: center;
            padding-bottom: 5%;
            padding-top: 2%;
        }
        .poll-container ul li{
            text-align: center;
            padding: 10px 35px;
            border-radius: 5px;
            border: 1px solid #ff000029;
        }

        .video-controls {
            position: absolute;
            bottom: 1.5rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 1rem;
            background: rgba(0, 0, 0, 0.6);
            padding: 0.75rem;
            border-radius: 12px;
            backdrop-filter: blur(10px);
        }

        .control-btn {
            background: transparent;
            border: 2px solid rgba(255, 255, 255, 0.2);
            color: var(--white);
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
        }

        .control-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: var(--white);
        }

        .control-btn.danger {
            background: var(--danger);
            border-color: var(--danger);
        }

        .control-btn.danger:hover {
            background: #DC2626;
        }

        .sidebar {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            height: 100%;
        }

        .chat-box, .poll-box {
            background: var(--glass);
            backdrop-filter: blur(10px);
            border-radius: 24px;
            padding: 1.5rem;
            /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); */
            border: 1px solid rgba(255, 255, 255, 0.2);
            display: flex;
            flex-direction: column;
        }

        .chat-box {
            height: 600px; /* Set the desired height */
    overflow-y: auto; /* Enable vertical scrolling */
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 2px;
    gap: 8px;
        }

        .poll-box {
            flex: 1;
        }

        .box-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(99, 102, 241, 0.1);
        }

        .box-header h2 {
            font-size: 1.25rem;
            color: var(--primary);
        }

        .messages {
            flex-grow: 1;
            /* overflow-y: auto; */
            padding-right: 0.5rem;
            margin-bottom: 1rem;
        }

        .message {
            /* margin-bottom: 1rem; */
            animation: slideIn 0.3s ease;
            /* border-bottom: 2px solid red; */
        }

        .message-bubble {
            background: var(--white);
            padding: 1rem;
            border-radius: 3px;
            /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); */
            max-width: 80%;
        }
        
        .message-sent strong{
            font-size: 0.85rem;
            color: gray;
            font-weight: 300;
        }
        .message strong{
            font-size: 0.75rem;
            color: white;
            font-weight: 300;   
        }
        .message.sent {
            display: flex;
            justify-content: flex-end;
        }

        .message.sent .message-bubble {
            background: var(--primary);
            color: var(--white);
        }

        .message-input {
            display: flex;
            gap: 0.50rem;
        }

        .message-input input {
            flex-grow: 1;
            padding: 0.75rem;
            border: 2px solid rgba(99, 102, 241, 0.2);
            border-radius: 2px;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .message-input input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
        }

        .send-btn {
            background: var(--primary);
            color: var(--white);
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 2px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .send-btn:hover {
            background: var(--primary-light);
        }

        .poll-question {
            margin-bottom: 1.5rem;
            font-weight: 500;
        }

        .poll-options {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .poll-option {
            background: var(--white);
            padding: 1rem;
            border-radius: 12px;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .poll-option:hover {
            transform: translateY(-2px);
        }

        .progress-bar {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            background: rgba(99, 102, 241, 0.1);
            z-index: 0;
            transition: width 0.3s ease;
        }

        .option-content {
            position: relative;
            z-index: 1;
            display: flex;
            justify-content: space-between;
        }

        .percentage {
            font-weight: 600;
            color: var(--primary);
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (max-width: 1024px) {
            .live-container {
                grid-template-columns: 1fr;
                height: auto;
            }

            .main-content {
                aspect-ratio: 16/9;
            }

            .sidebar {
                height: auto;
            }
        }

        ::-webkit-scrollbar {
            width: 6px;
        }

        ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
            border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb {
            background: var(--primary);
            border-radius: 3px;
        }
`;