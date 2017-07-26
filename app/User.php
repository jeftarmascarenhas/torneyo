<?php

namespace App;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Auth\Authenticatable as AuthenticableTrait;
use Illuminate\Database\Eloquent\Model as Model;

class User extends Model implements Authenticatable
{
    use AuthenticableTrait;

//{
//"client_secret":"bEoyH3MtiBgpLRRgl08wHo2sKra6Me3RuR4IJya0",
//"grant_type":"password",
//"client_id":"2",
//"username":"root@mail.com",
//"password":"secret"
//}

    protected $fillable = ["username", "email","password"];

    public static $rules = [
        "username" => "required",
        "email" => "required",
        'password' => 'required'
    ];

}
