<?php

use App\Models\User;
use App\Models\Category;
use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //created factory and assigned fake data from faker class into the database.
        Post::factory(10)->create();

        User::create([
            'username' => 'admin',
            'name' => 'safal',
            'email' => 'safaladhikari030@gmail.com',
            'password' => bcrypt('safal$0001'),
            'role_name' => 'admin',
            'email_verified_at' => Carbon::now(),
        ]);    

    
    }
}