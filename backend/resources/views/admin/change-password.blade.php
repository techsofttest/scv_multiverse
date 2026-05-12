@extends('adminlte::page')

@section('title', 'Change Password')

@section('content_header')
    <h1 class="text-center mb-4"><strong>Change Password</strong></h1>
@stop

@section('content')
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card shadow-sm border-0 rounded-lg mb-5">
                <div class="card-header">
                    <h3 class="card-title">Update Your Credentials</h3>
                </div>

                <form action="{{ route('update-password') }}" method="POST">
                    @csrf
                    <div class="card-body">

                        {{-- <div class="form-group">
                            <label for="current_password">Current Password</label>
                            <input type="password" name="current_password" class="form-control @error('current_password') is-invalid @enderror" id="current_password" placeholder="Enter current password">
                            @error('current_password')
                                <span class="invalid-feedback">{{ $message }}</span>
                            @enderror
                        </div> --}}

                        <div class="form-group">
                            <label for="password">New Password</label>
                            <input type="password" name="password" class="form-control @error('password') is-invalid @enderror" id="password" placeholder="Enter new password">
                            @error('password')
                                <span class="invalid-feedback">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="form-group">
                            <label for="password_confirmation">Confirm New Password</label>
                            <input type="password" name="password_confirmation" class="form-control" id="password_confirmation" placeholder="Confirm new password">
                        </div>
                    </div>

                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Update Password</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@stop

@section('css')
    <style>
       
        .btn-primary {
            background-color: #0a5c40;
            border-color: #0a5c40;
        }
        .btn-primary:hover {
            background-color: #084a33;
            border-color: #084a33;
        }
    </style>
@stop

@section('js')
     @if(session('success'))
<script>
Swal.fire({
    icon: 'success',
    title: 'Success',
    text: '{{ session('success') }}',
    timer: 2000,
    showConfirmButton: false
});
</script>
@endif
@endsection
