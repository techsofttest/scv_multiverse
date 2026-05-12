<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
      protected $fillable=['title','image','content','slug','meta_title','meta_desc','meta_key'];
      public function servicemore()
      {
          return $this->hasMany(Servicemore::class, 'service_id');
      }
}
