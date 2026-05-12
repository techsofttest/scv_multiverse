@extends('adminlte::page')

@section('title', 'Contact Submissions')

@section('content_header')
    <div class="d-flex justify-content-between align-items-center">
        <h1><strong>Contact Submissions</strong></h1>
    </div>
@stop

@section('content')
    <div class="card shadow-sm border-0 rounded-lg">
        <div class="card-header">
            <h3 class="card-title">Manage Inquiries</h3>
        </div>
        <div class="card-body p-0">
            @if(session('success'))
                <div class="alert alert-success m-3">
                    {{ session('success') }}
                </div>
            @endif

            <div class="table-responsive">
                <table class="table table-hover mb-0">
                    <thead class="thead-light">
                        <tr>
                            <th>SI no</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($contacts as $contact)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{!! $contact->address !!}</td>
                                <td>{{ $contact->email }}</td>
                                <td>{{ $contact->phone }}</td>
                                <td>
                                    <a href="{{ route('contact.edit', $contact->id) }}" class="btn btn-sm btn-outline-primary mr-1">
                                        <i class="fas fa-edit"></i> Edit
                                    </a>
                                    {{-- <form action="{{ route('contact.destroy', $contact->id) }}" method="POST" class="d-inline">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-sm btn-outline-danger" onclick="return confirm('Are you sure?')">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </form> --}}
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="5" class="text-center py-4 text-muted">No records found.</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
       
            {{-- <div class="card-footer clearfix">
                {{ $contacts->links() }}
            </div> --}}
    </div>
@stop

@section('css')
    <style>
        .btn-outline-primary {
            color: #0a5c40;
            border-color: #0a5c40;
        }
        .btn-outline-primary:hover {
            background-color: #0a5c40;
            border-color: #0a5c40;
        }
        .thead-light th {
            background-color: #f8f9fa;
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