@extends('adminlte::page')



@section('title', 'Edit Contact')



@section('content_header')

    <h1>Contact</h1>

@stop



@section('content')





<div class="card card-info">





    <div class="card-header">

    <h3 class="card-title">Edit Contact</h3>

    </div>





<form action="{{route('contact.update',$contact->id)}}" method="POST" enctype="multipart/form-data">

@csrf

@method('PUT')



<div class="card-body">



                <div class="form-group row">

                    <label for="" class="col-sm-2 col-form-label">Address</label>

                

                    <div class="col-sm-10">

                        <textarea id="editor1" class="form-control" style="height:150px" name="address" >{!!$contact->address!!}</textarea>

                    </div>

                </div>



               {{-- @if(!in_array($page->type, [2]))--}}
              
                
                 {{--@endif--}}

               {{--  @if(!in_array($page->type, [6,7,8,9,10,11]))--}}


                <div class="form-group row">



                    <label for="" class="col-sm-2 col-form-label">Location</label>
                    <div class="col-sm-10">

                        <input class="form-control" value="{{ $contact->location}}" name="location">

                    </div>
                </div>
                <div class="form-group row">

                    <label for="" class="col-sm-2 col-form-label">Phone</label>

                

                    <div class="col-sm-10">

                    <input type="tel" class="form-control" name="phone" value="{{$contact->phone}}" required>

                    </div>

                </div>
                 <div class="form-group row">

                    <label for="" class="col-sm-2 col-form-label">Phone2</label>

                

                    <div class="col-sm-10">

                    <input type="tel" class="form-control" name="phone2" value="{{$contact->phone2}}" >

                    </div>

                </div> <div class="form-group row">

                    <label for="" class="col-sm-2 col-form-label">Email</label>

                

                    <div class="col-sm-10">

                    <input type="email" class="form-control" name="email" value="{{$contact->email}}" required>

                    </div>

                </div> <div class="form-group row">

                    <label for="" class="col-sm-2 col-form-label">Email2</label>

                

                    <div class="col-sm-10">

                    <input type="email" class="form-control" name="email2" value="{{$contact->email2}}" >

                    </div>

                </div>
                 <div class="form-group row">

                    <label for="" class="col-sm-2 col-form-label">Whatsapp</label>
                    <div class="col-sm-10">

                    <input type="tel" class="form-control" name="whatsapp" value="{{$contact->whatsapp}}" >

                    </div>

                </div>
                 <div class="form-group row">

                    <label for="" class="col-sm-2 col-form-label">Facebook</label>

                

                    <div class="col-sm-10">

                    <input type="text" class="form-control" name="facebook" value="{{$contact->facebook}}" >

                    </div>

                </div>
                <div class="form-group row">

                    <label for="" class="col-sm-2 col-form-label">Linked In</label>

                

                    <div class="col-sm-10">

                    <input type="text" class="form-control" name="linkedin" value="{{$contact->linkedin}}" >

                    </div>

                </div>
                <div class="form-group row">

                    <label for="" class="col-sm-2 col-form-label">Instagram</label>
                    <div class="col-sm-10">

                    <input type="text" class="form-control" name="instagram" value="{{$contact->instagram}}">

                    </div>

                </div>
                <div class="form-group row">

                    <label for="" class="col-sm-2 col-form-label">Youtube</label>

                

                    <div class="col-sm-10">

                    <input type="text" class="form-control" name="youtube" value="{{$contact->youtube}}" >

                    </div>

                </div>
                </div>

                <!-- /.card-body -->





                <div class="card-footer">

                  <button type="submit" class="btn btn-primary">Submit</button>

                  <button type="button" class="btn btn-danger" onclick="window.history.back()">Cancel</button>

                </div>



                </div>





              </form>



</div>





@stop



@section('css')

    <!--<link rel="stylesheet" href="/css/admin_custom.css">-->

    <link rel="stylesheet" href="{{asset('css/alertify.min.css')}}">

    <link rel="stylesheet" href="{{asset('css/default.min.css')}}">



    <style>

        .ajs-content {

            background-color: #17a2b8;

            color: white;

            text-align: center;

            font-weight : bold;

            height : 50px;

            margin-top: -10px;

        }



        .alertify .ajs-header {

            

            display: none;

        }



        /* .alertify .ajs-modal {

    

                height : 100px;

            } */



            .alertify .ajs-dialog {

   

                height: 78px;

                min-height: unset;

                padding: 24px 24px 24px 24px;

   

            }



            .alertify .ajs-commands button.ajs-close {

    background-color: #854361;

}



        .alertify .ajs-body .ajs-content {

            padding: 16px 24px 10px 16px;

}

    </style>
   {{-- <link rel="stylesheet" href="{{asset('vendor\adminlte\dist\css\adminlte-sidebar.css')}}">--}}
@stop



@section('js')

    

    <!-- Include CKEditor script -->

 

    <script src="{{asset('js/alertify.min.js')}}"></script> 


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
@if(session('error'))
<script>
Swal.fire({
    icon: 'error',
    title: 'Error',
    text: '{{ session('error') }}',
    timer: 2000,
    showConfirmButton: false
});
</script>
@endif

   
    <script src="{{asset('ckeditor5/build/ckeditor.js')}}"></script>

<script>

 //import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';


 class MyUploadAdapter {

constructor(loader) {
    // The file loader instance to use during the upload.
    this.loader = loader;
}

// Starts the upload process.
upload() {
    return this.loader.file
        .then(file => new Promise((resolve, reject) => {
            this._initRequest();
            this._initListeners(resolve, reject, file);
            this._sendRequest(file);
        }));
}

// Aborts the upload process.
abort() {
    if (this.xhr) {
        this.xhr.abort();
    }
}

// Initializes the XMLHttpRequest object using the URL passed to the constructor.
_initRequest() {
    const xhr = this.xhr = new XMLHttpRequest();
    xhr.open('post', '{{ route('ckeditor.upload') }}', true);
    xhr.responseType = 'json';
}

// Initializes XMLHttpRequest listeners.
_initListeners(resolve, reject, file) {
    const xhr = this.xhr;
    const loader = this.loader;
    const genericErrorText = `Couldn't upload file: ${file.name}.`;

    xhr.addEventListener('error', () => reject(genericErrorText));
    xhr.addEventListener('abort', () => reject());
    xhr.addEventListener('load', () => {
        const response = xhr.response;

        if (!response || response.error) {
            return reject(response && response.error ? response.error.message : genericErrorText);
        }

        resolve({ default: response.url });
    });

    if (xhr.upload) {
        xhr.upload.addEventListener('progress', evt => {
            if (evt.lengthComputable) {
                loader.uploadTotal = evt.total;
                loader.uploaded = evt.loaded;
            }
        });
    }
}

// Prepares the data and sends the request.
_sendRequest(file) {
    const data = new FormData();

    // Append the file and CSRF token to the FormData object
    data.append('upload', file);
    data.append('_token', '{{ csrf_token() }}');  // Add the CSRF token

    // Send the request
    this.xhr.send(data);
}
}




// ...



function MyCustomUploadAdapterPlugin( editor ) {

editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {

    // Configure the URL to the upload script in your back-end here!

    return new MyUploadAdapter( loader );

};

}



	ClassicEditor

			.create( document.querySelector( '#editor1' ), {

				
                // ckfinder: {
                //     uploadUrl: '/ckeditor/upload?_token={{ csrf_token() }}'  // Use your upload URL (with CSRF token)
                // },
				toolbar: {

					items: [

						'exportPdf',

						'heading',

						'|',

						'bold',

						'italic',

						'link',

						'bulletedList',

						'numberedList',

						'|',

						

						'imageUpload',

						'blockQuote',

						'insertTable',

						

						'specialCharacters',

						'fontColor',

						'fontSize',

						'underline',

						'strikethrough',

						'pageBreak',

						'horizontalLine',

						'fontBackgroundColor',

						'undo',

						'redo',

						'alignment',

						'mediaEmbed',

					]

				},

                heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
                { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
            ]
        },

				language: 'en',

				image: {

					styles: [

                          'alignLeft', 'alignCenter', 'alignRight'

                        ],

					toolbar: [

					    'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',

						'imageTextAlternative',

						'imageStyle:full',

						'imageStyle:side'

					]

				},

				table: {

					contentToolbar: [

						'tableColumn',

						'tableRow',

						'mergeTableCells'

					]

				},

				licenseKey: '',

				 extraPlugins: [ MyCustomUploadAdapterPlugin ],	


			} )

			.then( editor => {

				window.editor = editor;

		


			} )

			.catch( error => {

				console.error( 'Oops, something went wrong!' );

				console.error( 'Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:' );

				console.warn( 'Build id: r44fntrg0y2-lxdeldtm5eps' );

				console.error( error );

			} );

</script>


<script>
	
	    Filevalidation = () => {
            const fi = document.getElementById('typ_name');
            // Check if any file is selected.
            if (fi.files.length > 0) {
                for (const i = 0; i <= fi.files.length - 1; i++) {
          
                    const fsize = fi.files.item(i).size;
                    const file = Math.round((fsize / 1024));
                    // The size of the file.
                    if (file >= 1096) {
                        alert(
                          "File too Big, please select a file less than 1mb");
						  $("#typ_name").val('');
                    } else if (file < 20) {
                       /* alert(
                          "File too small, please select a file greater than 20kb");
						   $("#typ_name").val('');*/
                    } else { 
                       /* document.getElementById('size').innerHTML = '<b>'
                        + file + '</b> KB';*/
                    }
                }
            }
        }
	
	</script>	








@stop



      

