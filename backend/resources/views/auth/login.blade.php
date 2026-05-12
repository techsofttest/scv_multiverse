@extends('adminlte::auth.login')
@section('css')
    <style>
        /* 1. Modern Canvas Background */
        .login-page {
            background-color: #a2afab !important; /* Clean off-white/grey */
            background-image: 
                radial-gradient(at 0% 0%, rgba(42, 82, 152, 0.05) 0px, transparent 50%), 
                radial-gradient(at 100% 100%, rgba(30, 60, 114, 0.05) 0px, transparent 50%) !important;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* 2. Elevating the Login Box */
        .login-box {
            width: 400px;
        }

        .login-box .card {

            border: 1px solid rgba(0, 0, 0, 0.05);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            overflow: hidden;
        }

        /* 3. Header & Logo Branding */
        .login-logo {
            margin-bottom: 1.5rem;
        }

        .login-logo a {
            font-size: 0 !important; /* Blocks the text title */
            display: block;
        }

        .login-logo img {
            height: 100px; 
            width: auto;
        }
        .card-footer {
            display: none;
        }
        .card-header {
            background-color: transparent !important;
            border-bottom: none !important;
            padding-top: 1.5rem !important;
        }

        /* 4. Refined Form Inputs */
        .form-control {
            height: 48px;
            border-radius: 8px;
            border: 1.5px solid #e2e8f0;
            transition: all 0.2s ease;
        }

        .form-control:focus {
            border-color: #0a5c40;
            box-shadow: 0 0 0 3px rgba(42, 82, 152, 0.1);
        }

        .input-group-text {
            background-color: transparent;
            border: 1.5px solid #e2e8f0;
            border-left: none;
            border-radius: 0 8px 8px 0;
            color: #94a3b8;
        }

        /* 5. Professional Primary Button */
        .btn-primary {
            height: 48px;
            font-weight: 600;
            letter-spacing: 0.3px;
            background: #0a5c40;
            border: none;
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(30, 60, 114, 0.2);
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-primary:hover {
            background: #0a5c40;
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(30, 60, 114, 0.3);
        }

        .btn-primary:active {
            transform: translateY(0);
        }

        /* 6. Footer Links */
        .login-box .card-body p {
            margin-bottom: 0.5rem;
        }

        .login-box a {
            color: #64748b;
            font-size: 0.875rem;
            transition: color 0.2s;
        }

        .login-box a:hover {
            color: #1e3c72;
            text-decoration: underline;
        }
    </style>
@endsection
