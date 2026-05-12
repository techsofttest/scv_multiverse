@extends('adminlte::page')

@section('title', 'CMS Page')

@section('content_header')
    <div class="d-flex justify-content-between align-items-center">
        <h1><strong>CMS Page</strong></h1>
    </div>
@stop

@section('content')
    <div class="card shadow-sm border-0 rounded-lg">
        <div class="card-header">
            <h3 class="card-title">Manage Inquiries</h3>
        </div>
        <div class="card-body p-0">
            @if (session('success'))
                <div class="alert alert-success m-3">
                    {{ session('success') }}
                </div>
            @endif

            <div class="table-responsive">
                <table class="table table-hover mb-0">
                    <thead class="thead-light">
                        <tr>
                            <th>SI no</th>
                            <th>Page Name</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th class="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($pages as $page)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $page->title }}</td>
                                <td>{{ $page->cms_title }}</td>
                                <td>{{ Str::limit(strip_tags($page->content), 100) }}</td>
                                <td class="text-right">
                                    <a href="{{ route('page.edit', $page->id) }}"
                                        class="btn btn-sm btn-outline-primary mr-1">
                                        <i class="fas fa-edit"></i> Edit
                                    </a>
                                    {{-- <form action="{{ route('page.destroy', $page->id) }}" method="POST"
                                        class="d-inline">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-sm btn-outline-danger"
                                            onclick="return confirm('Are you sure?')">
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
