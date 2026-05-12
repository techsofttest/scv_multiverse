<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Servicemore extends Model
{
    protected $fillable = [
        'service_id',
        'more_title',
        'more_content',
        'more_image',
    ];
    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }
}
